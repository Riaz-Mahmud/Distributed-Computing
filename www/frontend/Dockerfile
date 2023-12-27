# Use the official PHP Apache image
FROM php:apache

# Copy the PHP files to the web server's document root
COPY ./ /var/www/html/

# Expose port 80 for HTTP
EXPOSE 80

# Start the Apache server
CMD ["apache2-foreground"]
