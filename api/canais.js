module.exports = async (req, res) => {
  const lista = `
#EXTM3U
#EXTINF:-1 cuid="104" tvg-name="CNN 🇺🇸" tvg-id="CNN.HD.uk" tvg-logo="https://logo.iptveditor.com/cnn.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CNN 🇺🇸
https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_2_1964000.m3u8

#EXTINF:-1 cuid="105" tvg-name="CNN Internacional 🇺🇸" tvg-id="66c45afaa72e7b0008a2b153" tvg-logo="https://images.pluto.tv/channels/66c45afaa72e7b0008a2b153/colorLogoPNG.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CNN Internacional 🇺🇸
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/66c45afaa72e7b0008a2b153/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&deviceMake=github.com/inspirationlinks&deviceDNT=1

#EXTINF:-1 cuid="106" tvg-name="CNN Highlights 🇺🇸" tvg-id="5421f71da6af422839419cb3" tvg-logo="https://m.media-amazon.com/images/G/01/LCXO_Station_Logos/cnn_headlines_new.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CNN Highlights 🇺🇸
https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00405-rakutentv-cnnfastlg-rakuten-lgpt/playlist.m3u8

#EXTINF:-1 cuid="107" tvg-name="CNN XPRESS 🇲🇽" tvg-id="673248f9030a2c0008033af8" tvg-logo="https://provider-static.plex.tv/epg/cms/production/42343540-3224-4dc1-9c4f-c056ddeb57e3/CNNE_EXPRES_LOGO_DARK.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CNN XPRESS 🇲🇽
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/673248f9030a2c0008033af8/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&deviceMake=github.com/inspirationlinks&deviceDNT=1

#EXTINF:-1 cuid="108" tvg-name="CNN Fast 🇺🇸" tvg-id="GBBD1900008O3" tvg-logo="https://tvpnlogopeu.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/ITBD19000097D_20241022T051548SQUARE.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CNN Fast 🇺🇸
https://amg01448-samsungin-cnnnow-samsungin-4npqg.amagi.tv/playlist/amg01448-samsungin-cnnnow-samsungin/playlist.m3u8
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/66c45ba803e3b20008d8c294/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&servertSideAds=false&&deviceMake=inspirationiptv&deviceDNT=1
https://dqmhiwgbe98iq.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-1e8xhm2nv4xdw/index.m3u8
https://mediapackage-ptcn-source.fullscreen.nz/index.m3u8

#EXTINF:-1 cuid="109" tvg-name="60 Minutes" tvg-id="66b646f9cd0d3100086af83c" tvg-logo="https://m.media-amazon.com/images/G/01/digital/video/Linear_Clean_Slate/60_minutes.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",60 Minutes 🇺🇸
https://stitcher.pluto.tv/stitch/hls/channel/66b646f9cd0d3100086af83c/master.m3u8?deviceType=web&servertSideAds=false&deviceMake=safari&deviceVersion=1&deviceId=spencer&appVersion=1&deviceDNT=0&deviceModel=web&sid=5df26085-4618-11f0-a8d7-0ede5cc29e67
https://dai.google.com/linear/hls/event/nrb-l85CR7SIr-rGXqz4zA/master.m3u8
https://amd-mediator-eolq3tk4la-uk.a.run.app/cbs/map.m3u8?imafw__fw_is_lat=&imafw__fw_vcid2=&imafw__fw_app_bundle=&imafw__fw_us_privacy=1YNY&attmas=not_determined&am.originUrl=https%3A%2F%2Fdai.google.com%2Flinear%2Fhls%2Fevent%2Fnrb-l85CR7SIr-rGXqz4zA%2Fmaster.m3u8&imafw_csid=desktop_web&imafw__fw_did=&ip_addr=195.179.200.80&page_url=https%25253A%25252F%25252Flocalnow.com%25252Fchannels%25252Fcbs-news-chicago-hyperlocal&ua=Mozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%2C%20Gecko%29%20Chrome%2F122.0.0.0%20Safari%2F537.36&width=1920&app_version=0.0.0&height=1080

#EXTINF:-1 cuid="110" tvg-name="CNN Fast 🇺🇸" tvg-id="" tvg-logo="" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CNN Fast 🇺🇸
+https:

#EXTINF:-1 cuid="111" tvg-name="CNN Fast 🇺🇸" tvg-id="" tvg-logo="" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",
+https:

#EXTINF:-1 cuid="112" tvg-name="CNN GO 🇺🇸" tvg-id="" tvg-logo="" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",
+https:

#EXTINF:-1 cuid="113" tvg-name="Cheddar News 🇺🇸" tvg-id="USAJ3504714A" tvg-logo="https://m.media-amazon.com/images/G/01/digital/video/Linear_Clean_Slate/Carbon_Integration_Station_Image_Update/CheddarNews_1920x1080.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",Cheddar News 🇺🇸
https://cheddar-cheddar-3-us.vizio.wurl.tv/playlist.m3u8

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
