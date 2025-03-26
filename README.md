Este proyecto contiene pruebas automatizadas para validar el formulario de inicio de sesión en SauceDemo utilizando WebdriverIO y Mocha.

Estructura del test

El archivo de prueba test1.spec.js evalúa tres casos de uso:
UC-1: Intento de login sin usuario ni contraseña (espera mensaje de error: Username is required).
UC-2: Intento de login sin contraseña (espera mensaje de error: Password is required).
UC-3: Login exitoso con credenciales válidas (espera el título de la página: Swag Labs).
