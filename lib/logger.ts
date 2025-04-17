import pino from 'pino'

// Simple logger configuration without transport
const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  // Basic formatting for better readability
  formatters: {
    level: (label) => {
      return { level: label }
    },
    bindings: () => {
      return { pid: process.pid, host: process.env.HOSTNAME || 'localhost' }
    },
  },
})

export default logger 