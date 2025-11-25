
from playwright.sync_api import sync_playwright
import os

def run_verification():
    # Asegurarse de que el directorio para la captura de pantalla existe
    output_dir = "/home/jules/verification"
    os.makedirs(output_dir, exist_ok=True)

    screenshot_path = os.path.join(output_dir, "verification.png")

    # Obtener la ruta absoluta al fichero HTML de prueba
    # Usamos os.path.abspath para construir una URL file:// correcta
    html_file_path = os.path.abspath('examples/intelligent-layout-test.html')
    html_file_url = f'file://{html_file_path}'

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Array para almacenar los mensajes de la consola
        console_logs = []

        # Escuchar los eventos de la consola y guardar los mensajes
        page.on("console", lambda msg: console_logs.append(f"CONSOLE: {msg.text}"))

        try:
            print(f"Navigating to {html_file_url}")
            page.goto(html_file_url, wait_until='networkidle')

            # Esperar un poco más para asegurar que todos los scripts se han ejecutado
            page.wait_for_timeout(500)

            print(f"Taking screenshot at {screenshot_path}")
            page.screenshot(path=screenshot_path, full_page=True)
            print("Screenshot taken successfully.")

        except Exception as e:
            print(f"An error occurred: {e}")
        finally:
            browser.close()

            # Imprimir todos los mensajes de la consola capturados
            print("\\n--- Console Logs ---")
            if console_logs:
                for log in console_logs:
                    print(log)
            else:
                print("No console messages were captured.")
            print("--- End of Logs ---")

if __name__ == "__main__":
    run_verification()
