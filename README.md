## Working with Web Workers: Enabling HTTPS

To work with Web Workers, your site needs to be accessible over the HTTPS protocol. Here’s how to set it up:

### Prerequisites

- You must have `mkcert` installed on your machine.

### Generating Certificates for localhost

1. **Install mkcert:**

   If you haven't installed mkcert yet, follow the installation instructions on the [mkcert GitHub page](https://github.com/FiloSottile/mkcert).

2. **Generate Certificates:**

   To issue new certificates for localhost, use the `mkcert` command in the terminal while you are in the root folder of your project:

   ```shell
   mkcert localhost
   ```

   This command will generate two files: `localhost.pem` (the certificate) and `localhost-key.pem` (the private key). Keep these files in a secure location within your project directory.

### Accessing Your Site

- Once your development server is properly configured, you can access your site at the following URL:

  ```
  https://localhost:5173
  ```

### Note

- Use Chrome browser

- When accessing your site, your browser may warn you about the site's security certificate since it was self-signed by mkcert. You'll need to proceed with the option to continue to the site (the exact option varies by browser).

Following these steps will enable you to work with Web Workers over HTTPS in a local development environment.