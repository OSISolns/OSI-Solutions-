// Obfuscated protection script
(function(){
    // Basic protection without breaking functionality
    if(window.location !== window.parent.location) {
        // Prevent iframe embedding
        window.top.location = window.location;
    }

    // Console warning
    const warning = `
    ⚠️ Warning:
    This site is protected by copyright law.
    Unauthorized use or reproduction is prohibited.
    
    © 2024 OSI Solutions Ltd
    `;
    
    console.log(warning);
    
    // Disable specific keyboard combinations
    window.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 'u' || e.key === 's')) {
            e.preventDefault();
            return false;
        }
    });
})(); 