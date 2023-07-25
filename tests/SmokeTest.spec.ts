import { describe, expect, test } from 'vitest';
import { setup, $fetch } from '@nuxt/test-utils';

describe('smoke tests', async () => {
    await setup({
        // test context options
    });
    test('homepage has the correct title', async () => {
        const html = await $fetch('/');
        expect(html).includes('nuxt3-vuetify3-dashboard');
    });
});
