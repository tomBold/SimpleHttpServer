# Contributing to Simple HTTP Server

Thank you for your interest in contributing to Simple HTTP Server! This document provides guidelines and information for contributors.

## Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How to Contribute

### Reporting Issues

Before creating an issue, please check if a similar issue already exists. When creating a new issue, please include:

- A clear and descriptive title
- A description of the expected behavior
- A description of the actual behavior
- Steps to reproduce the issue
- Your environment (OS, Node.js version, etc.)
- Any relevant error messages or logs

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- A clear and descriptive title
- A detailed description of the proposed enhancement
- Use cases and examples
- Any additional context

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Ensure all tests pass
6. Commit your changes (`git commit -m 'Add some amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simple-http-server.git
   cd simple-http-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run in development mode:
   ```bash
   npm run dev
   ```

4. Build the project:
   ```bash
   npm run build
   ```

### Coding Standards

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Write clear, self-documenting code
- Add comments for complex logic
- Use meaningful variable and function names
- Keep functions small and focused

### Testing

- Write tests for new features
- Ensure all existing tests pass
- Test your changes thoroughly before submitting

### Commit Messages

Use clear and descriptive commit messages. Follow this format:

```
type(scope): description

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Pull Request Guidelines

- Keep PRs focused and small when possible
- Provide a clear description of changes
- Reference any related issues
- Ensure CI checks pass
- Request review from maintainers

## Questions?

If you have questions about contributing, please open an issue or contact the maintainers.

Thank you for contributing! 🎉
