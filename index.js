const { McpServer } = require("@modelcontextprotocol/sdk/server/mcp.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Initialize MCP server
const server = new McpServer({
  name: "dashmetrics-mcp",
  version: "1.0.0",
});

// Load tools from separate files
require("./indicators/trendIndicators")(server);
require("./indicators/momentumIndicators")(server);
require("./indicators/volatilityIndicators")(server);
require("./indicators/volumeIndicators")(server);

// Load strategies from separate files
require("./strategies/trendStrategies")(server);
require("./strategies/momentumStrategies")(server);
require("./strategies/volatilityStrategies")(server);
require("./strategies/volumeStrategies")(server);

// Function to start the server using async/await
async function startServer() {
  const transport = new StdioServerTransport();
  try {
    await server.connect(transport);
    console.log(`DashMetrics MCP Server is running`);
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

// Start the server
startServer();