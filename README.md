# DashMetrics MCP Server

A powerful MCP server providing comprehensive cryptocurrency technical analysis indicators and strategies, designed to empower AI trading agents with advanced market analysis capabilities.

<img width="1206" alt="Screenshot 2025-05-03 at 5 50 37 PM" src="https://github.com/user-attachments/assets/de0c6bbf-2a1a-4c8a-b2cf-4b013a69045c" />


https://github.com/codemintous/dashmetrics-mcp.git

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
![Status](https://img.shields.io/badge/status-active-brightgreen.svg)

## Overview

DashMetrics MCP is a Model Context Protocol server that provides a rich set of technical analysis tools for cryptocurrency markets. It enables AI agents to perform sophisticated market analysis and develop data-driven trading strategies.

## Features

- **Comprehensive Technical Analysis**: 50+ indicators across multiple categories
- **Real-time Market Data**: Integration with major cryptocurrency exchanges
- **Advanced Strategies**: Signal generation for automated trading decisions
- **Flexible Integration**: Easy to integrate with any MCP-compatible client
- **RESTful API**: HTTP+SSE transport for seamless integration

## Categories of Indicators

### Trend Indicators
- Moving Averages (SMA, EMA, DEMA, TEMA)
- MACD and its variants
- Parabolic SAR
- Aroon Indicator
- And many more...

### Momentum Indicators
- RSI (Relative Strength Index)
- Stochastic Oscillator
- Williams %R
- Awesome Oscillator
- And more...

### Volatility Indicators
- Bollinger Bands
- Average True Range (ATR)
- Keltner Channels
- And more...

### Volume Indicators
- On-Balance Volume (OBV)
- Chaikin Money Flow
- Volume Weighted Average Price (VWAP)
- And more...

## Installation

### Prerequisites

- Node.js (v18.x or higher)
- npm (v8.x or higher)

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kukapay/dashmetrics-mcp.git
   cd dashmetrics-mcp
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file with:
   ```
   PORT=3000
   EXCHANGE_NAME=binance
   ```

4. **Start the Server**:
   ```bash
   npm start
   ```

## API Usage

### MCP Client Integration

To use DashMetrics MCP with an MCP client, configure it with:

```json
{
  "mcpServers": {
    "dashmetrics-mcp": {
      "endpoint": "https://your-deployed-server.com/mcp",
      "transport": "http+sse"
    }
  }
}
```

### Example Requests

1. **Calculate MACD**:
   ```json
   {
     "method": "$/invoke",
     "params": {
       "tool": "calculate_macd",
       "arguments": {
         "symbol": "BTC/USDT",
         "timeframe": "1h",
         "fastPeriod": 12,
         "slowPeriod": 26,
         "signalPeriod": 9
       }
     }
   }
   ```

2. **Get RSI Signals**:
   ```json
   {
     "method": "$/invoke",
     "params": {
       "tool": "calculate_rsi_strategy",
       "arguments": {
         "symbol": "ETH/USDT",
         "timeframe": "4h",
         "period": 14
       }
     }
   }
   ```

## Deployment

### Heroku Deployment

1. Create a new Heroku app
2. Set environment variables
3. Deploy using Git:
   ```bash
   git push heroku main
   ```

### Docker Deployment

1. Build the image:
   ```bash
   docker build -t dashmetrics-mcp .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 dashmetrics-mcp
   ```

## Security

- HTTPS is required for all communications
- Rate limiting is implemented
- Input validation is enforced
- Proper error handling is in place

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please:
- Open an issue on GitHub
- Contact us at contact@kukapay.com
- Join our Discord community

