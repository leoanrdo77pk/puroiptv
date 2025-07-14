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
#EXTINF:-1 cuid="136" tvg-name="CBS News Philadelphia 🇺🇸" tvg-id="CBSNewsPhilly.us" tvg-logo="https://i.imgur.com/FmtTbNY.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CBS News Philadelphia 🇺🇸
https://cbsn-phi.cbsnstream.cbsnews.com/out/v1/5c9ad3e215984b0e9ad845b335216b72/master.m3u8

#EXTINF:-1 cuid="137" tvg-name="CBS News Pittsburgh 🇺🇸" tvg-id="CBSNewsPittsburgh.us" tvg-logo="https://i.imgur.com/Un9IrUh.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CBS News Pittsburgh 🇺🇸
https://cbsn-pit.cbsnstream.cbsnews.com/out/v1/6966dabf8150405ab26f854e3cd6a2b8/master.m3u8

#EXTINF:-1 cuid="138" tvg-name="CBS News Sacramento 🇺🇸" tvg-id="CBSNewsSacramento.us" tvg-logo="https://i.imgur.com/0e1kSGX.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CBS News Sacramento 🇺🇸
https://lineup.cbsivideo.com/playout/c1ed69db-6b71-4581-a937-a70ab4089f8a/index.m3u8

#EXTINF:-1 cuid="139" tvg-name="CBS News 🇺🇸" tvg-id="62310d5a5dc9550007c6f580" tvg-logo="https://m.media-amazon.com/images/X/lsmP/M/1lsmPhEDvDwPGUY.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CBS News 🇺🇸
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/62310d5a5dc9550007c6f580/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&deviceMake=github.com/inspirationlinks&deviceDNT=1

#EXTINF:-1 cuid="140" tvg-name="CBS News Explore 🇺🇸" tvg-id="CABC2300009KD" tvg-logo="https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/CABC2300009KD_20240527T200831SQUARE.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CBS News Explore 🇺🇸
https://d36tuf8zz9b2bm.cloudfront.net/v1/manifest/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-hfw6opvomwxih/82023db6-4ade-4add-be40-13d271a74f89/3.m3u8

#EXTINF:-1 cuid="141" tvg-name="CBS News 24/7 🇺🇸" tvg-id="61e82af27027f9000753c6e4" tvg-logo="https://images.pluto.tv/channels/5a6b92f6e22a617379789618/colorLogoSVG.svg" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CBS News 24/7 🇺🇸
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/61e82af27027f9000753c6e4/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&deviceMake=github.com/inspirationlinks&deviceDNT=1

#EXTINF:-1 cuid="142" tvg-name="Global News Toronto" tvg-id="62cc00b3b821cf00070f82c3" tvg-logo="https://images.pluto.tv/channels/62cc00b3b821cf00070f82c3/colorLogoPNG.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",Global News Toronto
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/62cc00b3b821cf00070f82c3/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&deviceMake=github.com/inspirationlinks&deviceDNT=1

#EXTINF:-1 cuid="143" tvg-name="ABC News Australia 🇦🇺" tvg-id="ABC.NEWS.us" tvg-logo="https://i.ibb.co/mBTzvw8/Abcau.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",ABC News Australia 🇦🇺
https://abc-news-dmd-streams-1.akamaized.net/out/v1/701126012d044971b3fa89406a440133/index.m3u8

#EXTINF:-1 cuid="144" tvg-name="ABC News Live 🇺🇸" tvg-id="USBC39000171G" tvg-logo="" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",
#http

#EXTINF:-1 cuid="145" tvg-name="ABC News Live 🇺🇸" tvg-id="ABC.NEWS.us" tvg-logo="https://images.pluto.tv/channels/6508be683a0d700008c534e4/colorLogoPNG.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",ABC News Live 🇺🇸
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/6508be683a0d700008c534e4/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&deviceMake=github.com/inspirationlinks&deviceDNT=1

#EXTINF:-1 cuid="146" tvg-name="BBC News 🇺🇸" tvg-id="65d92a8c8b24c80008e285c0" tvg-logo="https://m.media-amazon.com/images/G/01/LCXO_Station_Logos/BBC_News_Logo_16_9501.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",BBC News 🇺🇸
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/65d92a8c8b24c80008e285c0/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&deviceMake=github.com/inspirationlinks&deviceDNT=1

#EXTINF:-1 cuid="147" tvg-name="BBC News 🇺🇸" tvg-id="BBC.NEWS.HD.uk" tvg-logo="https://m.media-amazon.com/images/G/01/LCXO_Station_Logos/BBC_News_Logo_16_9501.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",BBC News₂ 🇬🇧
https://vs-cmaf-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/iptv_hd_abr_v1.mpd

#EXTINF:-1 cuid="148" tvg-name="" tvg-id="" tvg-logo="" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍", 🇺🇸
#http

#EXTINF:-1 cuid="149" tvg-name="TRT World 🇬🇧" tvg-id="TRT.World.HD.uk" tvg-logo="https://i.ibb.co/nP9xpck/trtw.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",TRT World 🇬🇧
https://tv-trtworld.medya.trt.com.tr/master.m3u8

#EXTINF:-1 cuid="150" tvg-name="" tvg-id="" tvg-logo="" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",
#http

#EXTINF:-1 cuid="151" tvg-name="CGTN News 🇬🇧" tvg-id="CGTN.News.ng" tvg-logo="https://graph.facebook.com/ChinaGlobalTVNetwork/picture?width=200&height=200" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CGTN News 🇬🇧
https://english-livebkali.cgtn.com/live/encgtn.m3u8

#EXTINF:-1 cuid="152" tvg-name="The F1rt 🇺🇸" tvg-id="US1000016Q" tvg-logo="https://us-image.samsungtvplus.com/stretch?url=https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/US1000016Q_20240520T223423CIRCLE.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",The F1rt 🇺🇸
https://d3l2p35bml4f7o.cloudfront.net/v1/manifest/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-wmvu6cnvjroib/02c44a36-5972-4920-bf7c-df7d80bcdc63/3.m3u8

#EXTINF:-1 cuid="153" tvg-name="Press Tvᴸᴼᵂ 🇺🇸" tvg-logo="https://www.presstv.ir/custom/images/site/LOGO.gif" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",Press Tvᴸᴼᵂ 🇺🇸
https://live.presstv.ir/hls/presstv.m3u8

#EXTINF:-1 cuid="154" tvg-name="Al Jazeera 🇬🇧" tvg-id="Al.Jazeera.pt" tvg-logo="https://www.aljazeera.com/favicon_aje.ico" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",Al Jazeera 🇬🇧
https://live-hls-web-aje-fa.getaj.net/AJE/01.m3u8

#EXTINF:-1 cuid="155" tvg-name="DW 🇬🇧" tvg-id="DW.pt" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/8/8e/DW_%28TV%29_Logo_2012.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",DW 🇬🇧
http://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9OC8yMy8yMDIxIDEyOjQ3OjU3IFBNJmhhc2hfdmFsdWU9ZkJ0QTd3enJhWUtYSGsrZHFieUZodz09JnZhbGlkbWludXRlcz00ODA=

#EXTINF:-1 cuid="156" tvg-name="" tvg-id="" tvg-logo="" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",
#http

#EXTINF:-1 cuid="157" tvg-name="Cnews 🇺🇸" tvg-id="" tvg-logo="" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",
#http

#EXTINF:-1 cuid="158" tvg-name="NHK World 🇬🇧" tvg-id="NHK.World.TV.pt" tvg-logo="https://i.ibb.co/JCjsXZm/nhk.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",NHK World 🇬🇧
https://nhkwlive-ojp.nhkworld.jp/hls/live/2003459/nhkwlive-ojp-en/index.m3u8

#EXTINF:-1 cuid="159" tvg-name="NDR" tvg-id="NDR.de" tvg-logo="https://logo.iptveditor.com/ndr.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",NDR 🇩🇪
https://mcdn.ndr.de/ndr/hls/ndr_fs/ndr_hh/master.m3u8

#EXTINF:-1 cuid="160" tvg-name="Das Erste" tvg-id="Das.Erste.de" tvg-logo="https://logo.iptveditor.com/daserste.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",Das Erste 🇩🇪
https://derste247liveint.akamaized.net/hls/live/662735/daserste_int/index.m3u8

#EXTINF:-1 cuid="161" tvg-name="Channel News Asia" tvg-id="Channel.News.Asia.id" tvg-logo="https://logo.iptveditor.com/cna.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",Channel News Asia
http://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index_5.m3u8


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
