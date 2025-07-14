module.exports = async (req, res) => {
  const lista = `
#EXTM3U

#EXTINF:-1 tvg-name="SIC Noticias 🇵🇹" tvg-id="SIC.Notícias.HD.pt" user-agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41" tvg-logo="https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/portugal/sic-noticias-pt.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ News 🇵🇹🇧🇷",SIC Noticias 🇵🇹
https://sicnot.live.impresa.pt/sicnot.m3u8

#EXTINF:-1 tvg-name="SIC Replay 🇵🇹" tvg-id="SIC.Replay.pt" tvg-logo="https://github.com/inspirationlinks/m3u/raw/live/LogosTv/SICReplay.webp" group-logo="https://cdn-icons-png.freepik.com/512/4482/4482879.png" group-title="🆁™ Portugal",SIC Replay 🇵🇹
https://production-fast-sic.content.okast.tv/fa2e8c4385712f9a7dce4ff2dcebac2e/channels/d9070446-8448-455e-8075-773b1ba12562/d47eae0f-ad77-414a-9a1d-2a6628ba18c3/media_.m3u8

#EXTINF:-1 tvg-name="SIC Alta Definição 🇵🇹" tvg-id="SIC.Alta.Definição.pt" tvg-logo="https://github.com/inspirationlinks/m3u/raw/live/LogosTv/SICAltaDefinicao.webp" group-logo="https://cdn-icons-png.freepik.com/512/4482/4482879.png" group-title="🆁™ Portugal",SIC Alta Definição 🇵🇹
https://production-fast-sic.content.okast.tv/fa2e8c4385712f9aa54bbe52b1bd9b6b/channels/d9070446-8448-455e-8075-773b1ba12562/fc831b20-f252-4e7d-8cc5-2d05f4d43c1c/media_.m3u8
`;

  res.setHeader("Content-Type", "application/x-mpegURL");
  res.send(lista);
};
