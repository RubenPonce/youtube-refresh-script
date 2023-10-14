(function() {
    'use strict';
    let lastPathName = window.location.pathname;
    const handleUrlChange = () => {
        const url = new URL(window.location.href);
        if (url.pathname.startsWith('/watch') && url.pathname !== lastPathName) {
            window.location.reload();
        }
        lastPathName = url.pathname;
    };
    const observer = new MutationObserver(handleUrlChange);
    observer.observe(document, { childList: true, subtree: true });
})();
