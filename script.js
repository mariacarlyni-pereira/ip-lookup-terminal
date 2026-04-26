async function buscarIP() {
    const ip = document.getElementById('ipInput').value;
    const token = '2a5d7f0320d8b2';
    const output = document.getElementById('output');

    if (!ip) return;

    output.innerHTML = "Iniciando scan...";

    try {
        const response = await fetch(`https://ipinfo.io/${ip}/json?token=${token}`);
        const data = await response.json();

        if (data.error) {
            output.innerHTML = `[ERRO] ${data.error.message}`;
            return;
        }

        // Formatação estilo Log
        const result = `
[SUCCESS] Scan concluído para: ${data.ip}
-----------------------------------------
Cidade:    ${data.city || 'N/A'}
Região:    ${data.region || 'N/A'}
País:      ${data.country || 'N/A'}
Local:     ${data.loc || 'N/A'}
Org/ISP:   ${data.org || 'N/A'}
Timezone:  ${data.timezone || 'N/A'}
-----------------------------------------
[FIM DA EXECUÇÃO]`;
        
        output.innerHTML = result;
    } catch (error) {
        output.innerHTML = "[ERRO CRÍTICO] Falha na conexão com o servidor.";
    }
}