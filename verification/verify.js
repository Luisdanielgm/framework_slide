const playwright = require('playwright');

async function main() {
    const browser = await playwright.chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Capture console logs
    page.on('console', msg => {
        console.log(`Browser Console: ${msg.text()}`);
    });

    try {
        // Navigate to the test file
        const filePath = `file://${process.cwd()}/examples/intelligent-layout-test.html`;
        await page.goto(filePath, { waitUntil: 'networkidle' });

        // --- Verify Overflow Slide ---
        console.log('Verifying overflow slide...');
        await page.evaluate(() => {
            document.getElementById('sapiens-slide-overflow').style.display = 'flex';
            document.getElementById('sapiens-slide-underflow').style.display = 'none';
        });
        await page.waitForTimeout(500); // Wait for layout to settle
        await page.screenshot({ path: 'verification/verification-overflow.png', fullPage: true });
        console.log('Overflow screenshot taken.');

        // --- Verify Underflow Slide ---
        console.log('Verifying underflow slide...');
        await page.evaluate(() => {
            document.getElementById('sapiens-slide-overflow').style.display = 'none';
            document.getElementById('sapiens-slide-underflow').style.display = 'flex';
        });

        // Re-run the layout check logic for the newly visible slide
        await page.evaluate(() => {
            window.Sapiens.checkAllSlidesLayout();
        });

        await page.waitForTimeout(500); // Wait for layout to settle
        await page.screenshot({ path: 'verification/verification-underflow.png', fullPage: true });
        console.log('Underflow screenshot taken.');

    } catch (error) {
        console.error('Error during verification:', error);
    } finally {
        await browser.close();
    }
}

main();
