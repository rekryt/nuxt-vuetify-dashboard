export function useCookieTheme() {
    const theme = useCookie<string>('theme');
    if (!theme.value) theme.value = 'system';

    return theme;
}
