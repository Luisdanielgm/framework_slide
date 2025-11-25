const playwright = require('playwright');
const path = require('path');

async function main() {
    const browser = await playwright.chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Capture console logs
    page.on('console', msg => {
        console.log(`Browser Console: ${msg.text()}`);
    });

    try {
        // --- Standard Layout Tests ---
        console.log('Running standard layout tests...');
        let filePath = `file://${path.resolve('examples/intelligent-layout-test.html')}`;
        await page.goto(filePath, { waitUntil: 'networkidle' });

        // Verify Overflow Slide
        await page.evaluate(() => {
            document.getElementById('sapiens-slide-overflow').style.display = 'flex';
            document.getElementById('sapiens-slide-underflow').style.display = 'none';
        });
        await page.waitForTimeout(500);
        await page.screenshot({ path: path.resolve('verification/verification-overflow.png'), fullPage: true });
        console.log('Standard overflow screenshot taken.');

        // Verify Underflow Slide
        await page.evaluate(() => {
            document.getElementById('sapiens-slide-overflow').style.display = 'none';
            document.getElementById('sapiens-slide-underflow').style.display = 'flex';
        });
        await page.evaluate(() => { window.Sapiens.checkAllSlidesLayout(); });
        await page.waitForTimeout(500);
        await page.screenshot({ path: path.resolve('verification/verification-underflow.png'), fullPage: true });
        console.log('Standard underflow screenshot taken.');

        // --- Intro Layout Tests ---
        console.log('\nRunning intro layout tests...');
        filePath = `file://${path.resolve('verification/intro-layout-test.html')}`;
        await page.goto(filePath, { waitUntil: 'networkidle' });

        // Verify Intro Overflow Slide
        console.log('Verifying intro overflow slide...');
        await page.evaluate(() => {
            document.getElementById('sapiens-slide-intro-overflow').style.display = 'flex';
            document.getElementById('sapiens-slide-intro-underflow').style.display = 'none';
        });
        await page.waitForTimeout(500); // Wait for layout to settle
        await page.screenshot({ path: path.resolve('verification/verification-intro-overflow.png'), fullPage: true });
        console.log('Intro overflow screenshot taken.');

        // Verify Intro Underflow Slide
        console.log('Verifying intro underflow slide...');
        await page.evaluate(() => {
            document.getElementById('sapiens-slide-intro-overflow').style.display = 'none';
            document.getElementById('sapiens-slide-intro-underflow').style.display = 'flex';
        });
        await page.evaluate(() => { window.Sapiens.checkAllSlidesLayout(); });
        await page.waitForTimeout(500); // Wait for layout to settle
        await page.screenshot({ path: path.resolve('verification/verification-intro-underflow.png'), fullPage: true });
        console.log('Intro underflow screenshot taken.');

    } catch (error) {
        console.error('Error during verification:', error);
    } finally {
        await browser.close();
    }
}

main();
