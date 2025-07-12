

// api/canais.js
module.exports = async (req, res) => {
  const lista = `
#EXTM3U
#EXT-X-SESSION-DATA:DATA-ID="com.xui.1_5_12r2"
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV GAZETA DE ALAGOAS HD [LOCAIS]" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/d/de/Logotipo_da_TV_Gazeta_%28Alagoas%29.png" group-title="✅ GLOBO",GLOBO TV GAZETA DE ALAGOAS HD [LOCAIS]
http://lexus.hubns.top:80/castor777/125020917/1257369.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV GAZETA DE ALAGOAS FHD [LOCAIS]" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/d/de/Logotipo_da_TV_Gazeta_%28Alagoas%29.png" group-title="✅ GLOBO",GLOBO TV GAZETA DE ALAGOAS FHD [LOCAIS]
http://lexus.hubns.top:80/castor777/125020917/1257368.m3u8
#EXTINF:-1 tvg-id="br#tv-gazeta-alagoas-hd" tvg-name="GLOBO TV GAZETA" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/7/75/Tvgazetaes2014transparent.png/revision/latest?cb=20191028180528" group-title="✅ GLOBO",GLOBO TV GAZETA
http://lexus.hubns.top:80/castor777/125020917/1257367.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV FRONTEIRA PAULISTA SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/7f/Logotipo_da_TV_Fronteira.png" group-title="✅ GLOBO",GLOBO TV FRONTEIRA PAULISTA SD
http://lexus.hubns.top:80/castor777/125020917/1257364.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV FRONTEIRA PAULISTA FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/7f/Logotipo_da_TV_Fronteira.png" group-title="✅ GLOBO",GLOBO TV FRONTEIRA PAULISTA FHD
http://lexus.hubns.top:80/castor777/125020917/1257363.m3u8
#EXTINF:-1 tvg-id="br#tv-diario-hd" tvg-name="GLOBO TV DIÁRIO HD" tvg-logo="https://s2-redeglobo.glbimg.com/eF-2D7oWXSQfRzYn5-zGEesVeKM=/0x0:826x459/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2020/v/y/HpGVy9Saiu6G5ilotwqg/logo-tv.jpg" group-title="✅ GLOBO",GLOBO TV DIÁRIO HD
http://lexus.hubns.top:80/castor777/125020917/1257360.m3u8
#EXTINF:-1 tvg-id="br#tv-diario-hd" tvg-name="GLOBO TV DIÁRIO FHD" tvg-logo="https://s2-redeglobo.glbimg.com/eF-2D7oWXSQfRzYn5-zGEesVeKM=/0x0:826x459/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2020/v/y/HpGVy9Saiu6G5ilotwqg/logo-tv.jpg" group-title="✅ GLOBO",GLOBO TV DIÁRIO FHD
http://lexus.hubns.top:80/castor777/125020917/1257359.m3u8
#EXTINF:-1 tvg-id="br#tv-diario-hd" tvg-name="GLOBO TV DIARIO FHD * [LOCAIS]" tvg-logo="https://s2-redeglobo.glbimg.com/eF-2D7oWXSQfRzYn5-zGEesVeKM=/0x0:826x459/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2020/v/y/HpGVy9Saiu6G5ilotwqg/logo-tv.jpg" group-title="✅ GLOBO",GLOBO TV DIARIO FHD * [LOCAIS]
http://lexus.hubns.top:80/castor777/125020917/1257354.m3u8
#EXTINF:-1 tvg-id="TVCaboBranco.br" tvg-name="GLOBO TV CABO BRANCO HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/2a/TV_Cabo_Branco.jpg" group-title="✅ GLOBO",GLOBO TV CABO BRANCO HD
http://lexus.hubns.top:80/castor777/125020917/1257344.m3u8
#EXTINF:-1 tvg-id="TVCaboBranco.br" tvg-name="GLOBO TV CABO BRANCO FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/2a/TV_Cabo_Branco.jpg" group-title="✅ GLOBO",GLOBO TV CABO BRANCO FHD
http://lexus.hubns.top:80/castor777/125020917/1257343.m3u8
#EXTINF:-1 tvg-id="br#tv-bahia-hd" tvg-name="GLOBO TV BAHIA HD" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/9/92/TV_Bahia_Logo_%281985%29.png/revision/latest?cb=20210329140155" group-title="✅ GLOBO",GLOBO TV BAHIA HD
http://lexus.hubns.top:80/castor777/125020917/1257340.m3u8
#EXTINF:-1 tvg-id="br#tv-bahia-hd" tvg-name="GLOBO TV BAHIA FHD" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/9/92/TV_Bahia_Logo_%281985%29.png/revision/latest?cb=20210329140155" group-title="✅ GLOBO",GLOBO TV BAHIA FHD
http://lexus.hubns.top:80/castor777/125020917/1257339.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV ASA BRANCA HD [LOCAIS]" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/1e/Logotipo_da_TV_Asa_Branca.png" group-title="✅ GLOBO",GLOBO TV ASA BRANCA HD [LOCAIS]
http://lexus.hubns.top:80/castor777/125020917/1257338.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV ASA BRANCA FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/1e/Logotipo_da_TV_Asa_Branca.png" group-title="✅ GLOBO",GLOBO TV ASA BRANCA FHD
http://lexus.hubns.top:80/castor777/125020917/1257337.m3u8
#EXTINF:-1 tvg-id="br#tv-anhanguera-hd" tvg-name="GLOBO TV ANHANGUERA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a0/Logo_TV_Anhanguera_2019.png" group-title="✅ GLOBO",GLOBO TV ANHANGUERA HD
http://lexus.hubns.top:80/castor777/125020917/1257332.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV ANHANGUERA FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a0/Logo_TV_Anhanguera_2019.png" group-title="✅ GLOBO",GLOBO TV ANHANGUERA FHD
http://lexus.hubns.top:80/castor777/125020917/1257331.m3u8
#EXTINF:-1 tvg-id="RPCTVPontaGrossa.br" tvg-name="GLOBO RPC PONTA GROSSA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC PONTA GROSSA HD
http://lexus.hubns.top:80/castor777/125020917/1257180.m3u8
#EXTINF:-1 tvg-id="RPCTVPontaGrossa.br" tvg-name="GLOBO RPC PONTA GROSSA FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC PONTA GROSSA FHD
http://lexus.hubns.top:80/castor777/125020917/1257179.m3u8
#EXTINF:-1 tvg-id="RPCTVParanavai.br" tvg-name="GLOBO RPC PARANAVAI HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC PARANAVAI HD
http://lexus.hubns.top:80/castor777/125020917/1257178.m3u8
#EXTINF:-1 tvg-id="RPCTVParanavai.br" tvg-name="GLOBO RPC PARANAVAI FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC PARANAVAI FHD
http://lexus.hubns.top:80/castor777/125020917/1257177.m3u8
#EXTINF:-1 tvg-id="RPCTVMaringa.br" tvg-name="GLOBO RPC MARINGA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC MARINGA HD
http://lexus.hubns.top:80/castor777/125020917/1257176.m3u8
#EXTINF:-1 tvg-id="RPCTVMaringa.br" tvg-name="GLOBO RPC MARINGA FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC MARINGA FHD
http://lexus.hubns.top:80/castor777/125020917/1257175.m3u8
#EXTINF:-1 tvg-id="br#rpc-curitiba" tvg-name="GLOBO RPC FOZ DO IGUACU HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC FOZ DO IGUACU HD
http://lexus.hubns.top:80/castor777/125020917/1257174.m3u8
#EXTINF:-1 tvg-id="TVGloboRiodeJaneiro.br" tvg-name="GLOBO RPC FOZ DO IGUACU FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC FOZ DO IGUACU FHD
http://lexus.hubns.top:80/castor777/125020917/1257173.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO RPC CURITIBA FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC CURITIBA FHD
http://lexus.hubns.top:80/castor777/125020917/1257171.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO RPC CASCAVEL SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC CASCAVEL SD
http://lexus.hubns.top:80/castor777/125020917/1257170.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO RPC CASCAVEL FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC CASCAVEL FHD
http://lexus.hubns.top:80/castor777/125020917/1257169.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO REDE AMAZONICA PORTO VELHO SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/26/Logotipo_da_Rede_Amaz%C3%B4nica.png" group-title="✅ GLOBO",GLOBO REDE AMAZONICA PORTO VELHO SD
http://lexus.hubns.top:80/castor777/125020917/1257144.m3u8
#EXTINF:-1 tvg-id="RedeAmazonica.br" tvg-name="GLOBO REDE AMAZONICA PORTO VELHO FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/26/Logotipo_da_Rede_Amaz%C3%B4nica.png" group-title="✅ GLOBO",GLOBO REDE AMAZONICA PORTO VELHO FHD
http://lexus.hubns.top:80/castor777/125020917/1257143.m3u8
#EXTINF:-1 tvg-id="RedeAmazonica.br" tvg-name="GLOBO REDE AMAZONICA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/26/Logotipo_da_Rede_Amaz%C3%B4nica.png" group-title="✅ GLOBO",GLOBO REDE AMAZONICA HD
http://lexus.hubns.top:80/castor777/125020917/1257142.m3u8
#EXTINF:-1 tvg-id="RedeAmazonica.br" tvg-name="GLOBO REDE AMAZONICA FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/26/Logotipo_da_Rede_Amaz%C3%B4nica.png" group-title="✅ GLOBO",GLOBO REDE AMAZONICA FHD
http://lexus.hubns.top:80/castor777/125020917/1257141.m3u8
#EXTINF:-1 tvg-id="RedeAmazonica.br" tvg-name="GLOBO REDE AMAZONICA BOA VISTA SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/26/Logotipo_da_Rede_Amaz%C3%B4nica.png" group-title="✅ GLOBO",GLOBO REDE AMAZONICA BOA VISTA SD
http://lexus.hubns.top:80/castor777/125020917/1257140.m3u8
#EXTINF:-1 tvg-id="RBSTVSantaMaria.br" tvg-name="GLOBO RBS TV SANTA MARIA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/RBS_TV.png/200px-RBS_TV.png" group-title="✅ GLOBO",GLOBO RBS TV SANTA MARIA HD
http://lexus.hubns.top:80/castor777/125020917/1257109.m3u8
#EXTINF:-1 tvg-id="RBSTVPortoAlegre.br" tvg-name="GLOBO RBS TV PORTO ALEGRE HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/RBS_TV.png/200px-RBS_TV.png" group-title="✅ GLOBO",GLOBO RBS TV PORTO ALEGRE HD
http://lexus.hubns.top:80/castor777/125020917/1257107.m3u8
#EXTINF:-1 tvg-id="RBSTVPortoAlegre.br" tvg-name="GLOBO RBS TV PORTO ALEGRE FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/RBS_TV.png/200px-RBS_TV.png" group-title="✅ GLOBO",GLOBO RBS TV PORTO ALEGRE FHD
http://lexus.hubns.top:80/castor777/125020917/1257106.m3u8
#EXTINF:-1 tvg-id="RBSTVRS.br" tvg-name="GLOBO RBS TV PELOTAS" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/RBS_TV.png/200px-RBS_TV.png" group-title="✅ GLOBO",GLOBO RBS TV PELOTAS
http://lexus.hubns.top:80/castor777/125020917/1257105.m3u8
#EXTINF:-1 tvg-id="RBSTVRS.br" tvg-name="GLOBO RBS TV PELOTAS" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/RBS_TV.png/200px-RBS_TV.png" group-title="✅ GLOBO",GLOBO RBS TV PELOTAS
http://lexus.hubns.top:80/castor777/125020917/1257104.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO RBS TV PASSO FUNDO SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/RBS_TV.png/200px-RBS_TV.png" group-title="✅ GLOBO",GLOBO RBS TV PASSO FUNDO SD
http://lexus.hubns.top:80/castor777/125020917/1257103.m3u8
#EXTINF:-1 tvg-id="RBSTVRS.br" tvg-name="GLOBO RBS TV PASSO FUNDO FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/RBS_TV.png/200px-RBS_TV.png" group-title="✅ GLOBO",GLOBO RBS TV PASSO FUNDO FHD
http://lexus.hubns.top:80/castor777/125020917/1257102.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO RBS TV DOS VALES SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/RBS_TV.png/200px-RBS_TV.png" group-title="✅ GLOBO",GLOBO RBS TV DOS VALES SD
http://lexus.hubns.top:80/castor777/125020917/1257101.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO RBS TV DOS VALES FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/RBS_TV.png/200px-RBS_TV.png" group-title="✅ GLOBO",GLOBO RBS TV DOS VALES FHD
http://lexus.hubns.top:80/castor777/125020917/1257100.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO RBS TV CAXIAS DO SUL HD [LOCAIS]" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/RBS_TV.png/200px-RBS_TV.png" group-title="✅ GLOBO",GLOBO RBS TV CAXIAS DO SUL HD [LOCAIS]
http://lexus.hubns.top:80/castor777/125020917/1257099.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO RBS TV CAXIAS DO SUL FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/RBS_TV.png/200px-RBS_TV.png" group-title="✅ GLOBO",GLOBO RBS TV CAXIAS DO SUL FHD
http://lexus.hubns.top:80/castor777/125020917/1257098.m3u8
#EXTINF:-1 tvg-id="NSCTVFlorianopolis.br" tvg-name="GLOBO NSC TV FLORIANOPOLIS HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NSC_TV_logo.png/220px-NSC_TV_logo.png" group-title="✅ GLOBO",GLOBO NSC TV FLORIANOPOLIS HD
http://lexus.hubns.top:80/castor777/125020917/1257037.m3u8
#EXTINF:-1 tvg-id="NSCTVFlorianopolis.br" tvg-name="GLOBO NSC TV FLORIANOPOLIS FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NSC_TV_logo.png/220px-NSC_TV_logo.png" group-title="✅ GLOBO",GLOBO NSC TV FLORIANOPOLIS FHD
http://lexus.hubns.top:80/castor777/125020917/1257036.m3u8
#EXTINF:-1 tvg-id="NSCTVCriciuma.br" tvg-name="GLOBO NSC TV CRICIUMA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NSC_TV_logo.png/220px-NSC_TV_logo.png" group-title="✅ GLOBO",GLOBO NSC TV CRICIUMA HD
http://lexus.hubns.top:80/castor777/125020917/1257035.m3u8
#EXTINF:-1 tvg-id="NSCTVCriciuma.br" tvg-name="GLOBO NSC TV CRICIUMA FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NSC_TV_logo.png/220px-NSC_TV_logo.png" group-title="✅ GLOBO",GLOBO NSC TV CRICIUMA FHD
http://lexus.hubns.top:80/castor777/125020917/1257034.m3u8
#EXTINF:-1 tvg-id="NSCTVChapeco.br" tvg-name="GLOBO NSC TV CHAPECO HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NSC_TV_logo.png/220px-NSC_TV_logo.png" group-title="✅ GLOBO",GLOBO NSC TV CHAPECO HD
http://lexus.hubns.top:80/castor777/125020917/1257033.m3u8
#EXTINF:-1 tvg-id="NSCTVChapeco.br" tvg-name="GLOBO NSC TV CHAPECO FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NSC_TV_logo.png/220px-NSC_TV_logo.png" group-title="✅ GLOBO",GLOBO NSC TV CHAPECO FHD
http://lexus.hubns.top:80/castor777/125020917/1257032.m3u8
#EXTINF:-1 tvg-id="NSCTVBlumenau.br" tvg-name="GLOBO NSC TV BLUMENAU FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NSC_TV_logo.png/220px-NSC_TV_logo.png" group-title="✅ GLOBO",GLOBO NSC TV BLUMENAU FHD
http://lexus.hubns.top:80/castor777/125020917/1257030.m3u8
#EXTINF:-1 tvg-id="NSCTVBlumenau.br" tvg-name="GLOBO NSC TV BLUMENAU FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NSC_TV_logo.png/220px-NSC_TV_logo.png" group-title="✅ GLOBO",GLOBO NSC TV BLUMENAU FHD
http://lexus.hubns.top:80/castor777/125020917/1257029.m3u8
#EXTINF:-1 tvg-id="InterTVSerraPlusMar.br" tvg-name="GLOBO INTER TV SERRA MAR HD" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/8/83/Youtu.be-rimMau7u6eo.png/revision/latest?cb=20220718231952" group-title="✅ GLOBO",GLOBO INTER TV SERRA MAR HD
http://lexus.hubns.top:80/castor777/125020917/1256955.m3u8
#EXTINF:-1 tvg-id="InterTVSerraPlusMar.br" tvg-name="GLOBO INTER TV SERRA MAR FHD" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/8/83/Youtu.be-rimMau7u6eo.png/revision/latest?cb=20220718231952" group-title="✅ GLOBO",GLOBO INTER TV SERRA MAR FHD
http://lexus.hubns.top:80/castor777/125020917/1256954.m3u8
#EXTINF:-1 tvg-id="InterTVGrandeMinas.br" tvg-name="GLOBO INTER TV GRANDE MINAS HD" tvg-logo="https://s2.glbimg.com/FfDSGtP6CgEUrqKm9B4CqIDDGco=/s.glbimg.com/og/rg/f/original/2015/10/23/logo.png" group-title="✅ GLOBO",GLOBO INTER TV GRANDE MINAS HD
http://lexus.hubns.top:80/castor777/125020917/1256953.m3u8
#EXTINF:-1 tvg-id="InterTVGrandeMinas.br" tvg-name="GLOBO INTER TV GRANDE MINAS FHD" tvg-logo="https://s2.glbimg.com/FfDSGtP6CgEUrqKm9B4CqIDDGco=/s.glbimg.com/og/rg/f/original/2015/10/23/logo.png" group-title="✅ GLOBO",GLOBO INTER TV GRANDE MINAS FHD
http://lexus.hubns.top:80/castor777/125020917/1256952.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO INTER TV DOS VALES HD" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/5/5f/InterTVdosVales_2016.png/revision/latest/scale-to-width-down/250?cb=20200106042606" group-title="✅ GLOBO",GLOBO INTER TV DOS VALES HD
http://lexus.hubns.top:80/castor777/125020917/1256951.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO INTER TV DOS VALES FHD [LOCAIS]" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/5/5f/InterTVdosVales_2016.png/revision/latest/scale-to-width-down/250?cb=20200106042606" group-title="✅ GLOBO",GLOBO INTER TV DOS VALES FHD [LOCAIS]
http://lexus.hubns.top:80/castor777/125020917/1256950.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO INTER TV CABUGI SD" tvg-logo="https://s2.glbimg.com/GyuEeQBEJgBRvhPTxl6knGjowUY=/s.glbimg.com/og/rg/f/original/2015/04/21/cabugi_menos_linha_s_bg2.jpg" group-title="✅ GLOBO",GLOBO INTER TV CABUGI SD
http://lexus.hubns.top:80/castor777/125020917/1256949.m3u8
#EXTINF:-1 tvg-id="InterTVCabugi.br" tvg-name="GLOBO INTER TV CABUGI HD ALT" tvg-logo="https://s2.glbimg.com/GyuEeQBEJgBRvhPTxl6knGjowUY=/s.glbimg.com/og/rg/f/original/2015/04/21/cabugi_menos_linha_s_bg2.jpg" group-title="✅ GLOBO",GLOBO INTER TV CABUGI HD ALT
http://lexus.hubns.top:80/castor777/125020917/1256948.m3u8
#EXTINF:-1 tvg-id="InterTVCabugi.br" tvg-name="GLOBO INTER TV CABUGI HD" tvg-logo="https://s2.glbimg.com/GyuEeQBEJgBRvhPTxl6knGjowUY=/s.glbimg.com/og/rg/f/original/2015/04/21/cabugi_menos_linha_s_bg2.jpg" group-title="✅ GLOBO",GLOBO INTER TV CABUGI HD
http://lexus.hubns.top:80/castor777/125020917/1256947.m3u8
#EXTINF:-1 tvg-id="InterTVCabugi.br" tvg-name="GLOBO INTER TV CABUGI FHD" tvg-logo="https://s2.glbimg.com/GyuEeQBEJgBRvhPTxl6knGjowUY=/s.glbimg.com/og/rg/f/original/2015/04/21/cabugi_menos_linha_s_bg2.jpg" group-title="✅ GLOBO",GLOBO INTER TV CABUGI FHD
http://lexus.hubns.top:80/castor777/125020917/1256946.m3u8
#EXTINF:-1 tvg-id="InterTVAltoLitoral.br" tvg-name="GLOBO INTER TV ALTO LITORAL HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/22/Logotipo_da_InterTV.png" group-title="✅ GLOBO",GLOBO INTER TV ALTO LITORAL HD
http://lexus.hubns.top:80/castor777/125020917/1256945.m3u8
#EXTINF:-1 tvg-id="InterTVAltoLitoral.br" tvg-name="GLOBO INTER TV ALTO LITORAL FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/22/Logotipo_da_InterTV.png" group-title="✅ GLOBO",GLOBO INTER TV ALTO LITORAL FHD
http://lexus.hubns.top:80/castor777/125020917/1256944.m3u8
#EXTINF:-1 tvg-id="TVVerdesMares.br" tvg-name="GLOBO TV VERDES MARES FORTALEZA¹" tvg-logo="https://cdn.mitvstatic.com/channels/br_tv-verdes-mares-hd_m.png" group-title="✅ GLOBO",GLOBO TV VERDES MARES FORTALEZA¹
http://lexus.hubns.top:80/castor777/125020917/1256857.m3u8
#EXTINF:-1 tvg-id="TVVerdesMares.br" tvg-name="GLOBO TV VERDES MARES FORTALEZA FHD¹" tvg-logo="https://cdn.mitvstatic.com/channels/br_tv-verdes-mares-hd_m.png" group-title="✅ GLOBO",GLOBO TV VERDES MARES FORTALEZA FHD¹
http://lexus.hubns.top:80/castor777/125020917/1256856.m3u8
#EXTINF:-1 tvg-id="TVVerdesMares.br" tvg-name="GLOBO TV VERDES MARES FORTALEZA FHD H265" tvg-logo="https://cdn.mitvstatic.com/channels/br_tv-verdes-mares-hd_m.png" group-title="✅ GLOBO",GLOBO TV VERDES MARES FORTALEZA FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256855.m3u8
#EXTINF:-1 tvg-id="TVVerdesMares.br" tvg-name="GLOBO TV VERDES MARES FORTALEZA" tvg-logo="https://cdn.mitvstatic.com/channels/br_tv-verdes-mares-hd_m.png" group-title="✅ GLOBO",GLOBO TV VERDES MARES FORTALEZA
http://lexus.hubns.top:80/castor777/125020917/1256854.m3u8
#EXTINF:-1 tvg-id="TVVerdesMares.br" tvg-name="GLOBO TV VERDE MARES SD" tvg-logo="https://cdn.mitvstatic.com/channels/br_tv-verdes-mares-hd_m.png" group-title="✅ GLOBO",GLOBO TV VERDE MARES SD
http://lexus.hubns.top:80/castor777/125020917/1256852.m3u8
#EXTINF:-1 tvg-id="TVVerdesMares.br" tvg-name="GLOBO TV VERDE MARES HD" tvg-logo="https://cdn.mitvstatic.com/channels/br_tv-verdes-mares-hd_m.png" group-title="✅ GLOBO",GLOBO TV VERDE MARES HD
http://lexus.hubns.top:80/castor777/125020917/1256851.m3u8
#EXTINF:-1 tvg-id="TVVerdesMares.br" tvg-name="GLOBO TV VERDE MARES FORTALEZA SD" tvg-logo="https://cdn.mitvstatic.com/channels/br_tv-verdes-mares-hd_m.png" group-title="✅ GLOBO",GLOBO TV VERDE MARES FORTALEZA SD
http://lexus.hubns.top:80/castor777/125020917/1256850.m3u8
#EXTINF:-1 tvg-id="TVVerdesMares.br" tvg-name="GLOBO TV VERDE MARES FHD" tvg-logo="https://cdn.mitvstatic.com/channels/br_tv-verdes-mares-hd_m.png" group-title="✅ GLOBO",GLOBO TV VERDE MARES FHD
http://lexus.hubns.top:80/castor777/125020917/1256848.m3u8
#EXTINF:-1 tvg-id="TVVerdesMares.br" tvg-name="GLOBO TV VERDE MARES FHD" tvg-logo="https://cdn.mitvstatic.com/channels/br_tv-verdes-mares-hd_m.png" group-title="✅ GLOBO",GLOBO TV VERDE MARES FHD
http://lexus.hubns.top:80/castor777/125020917/1256847.m3u8
#EXTINF:-1 tvg-id="br#tv-verdes-mares-hd" tvg-name="GLOBO TV VERDE MARES CARIRI SD" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/3/31/TV_Verdes_Mares_Cariri.png/revision/latest?cb=20150123142813" group-title="✅ GLOBO",GLOBO TV VERDE MARES CARIRI SD
http://lexus.hubns.top:80/castor777/125020917/1256845.m3u8
#EXTINF:-1 tvg-id="br#globo-sp" tvg-name="GLOBO TV VANGUARDA SÃO JOSÉ DOS CAMPOS" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6D8MAGkYdFG78G5VbY6ZZlCJKCKyj7YQMQL43zE0dCMt2hFC89XZE9147_1JdzBPKKmA&usqp=CAU" group-title="✅ GLOBO",GLOBO TV VANGUARDA SÃO JOSÉ DOS CAMPOS
http://lexus.hubns.top:80/castor777/125020917/1256843.m3u8
#EXTINF:-1 tvg-id="br#globo-sp" tvg-name="GLOBO TV VANGUARDA SJ DOS CAMPOS SD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6D8MAGkYdFG78G5VbY6ZZlCJKCKyj7YQMQL43zE0dCMt2hFC89XZE9147_1JdzBPKKmA&usqp=CAU" group-title="✅ GLOBO",GLOBO TV VANGUARDA SJ DOS CAMPOS SD
http://lexus.hubns.top:80/castor777/125020917/1256842.m3u8
#EXTINF:-1 tvg-id="br#globo-sp" tvg-name="GLOBO TV VANGUARDA SJ DOS CAMPOS FHD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6D8MAGkYdFG78G5VbY6ZZlCJKCKyj7YQMQL43zE0dCMt2hFC89XZE9147_1JdzBPKKmA&usqp=CAU" group-title="✅ GLOBO",GLOBO TV VANGUARDA SJ DOS CAMPOS FHD
http://lexus.hubns.top:80/castor777/125020917/1256841.m3u8
#EXTINF:-1 tvg-id="br#tv-tribuna-hd" tvg-name="GLOBO TV TRIBUNA SANTOS SD" tvg-logo="https://atribuna.tec.br/toc/wp-content/uploads/2021/10/tv-tribuna-cor.png" group-title="✅ GLOBO",GLOBO TV TRIBUNA SANTOS SD
http://lexus.hubns.top:80/castor777/125020917/1256840.m3u8
#EXTINF:-1 tvg-id="br#globo-tv-tribuna" tvg-name="GLOBO TV TRIBUNA SANTOS FHD" tvg-logo="https://atribuna.tec.br/toc/wp-content/uploads/2021/10/tv-tribuna-cor.png" group-title="✅ GLOBO",GLOBO TV TRIBUNA SANTOS FHD
http://lexus.hubns.top:80/castor777/125020917/1256839.m3u8
#EXTINF:-1 tvg-id="br#tv-tribuna-hd" tvg-name="GLOBO TV TRIBUNA SANTOS" tvg-logo="https://atribuna.tec.br/toc/wp-content/uploads/2021/10/tv-tribuna-cor.png" group-title="✅ GLOBO",GLOBO TV TRIBUNA SANTOS
http://lexus.hubns.top:80/castor777/125020917/1256838.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV TEM TAUBATÉ SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/5/51/Logotipo_da_TV_TEM.png" group-title="✅ GLOBO",GLOBO TV TEM TAUBATÉ SD
http://lexus.hubns.top:80/castor777/125020917/1256837.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV TEM TAUBATÉ 2" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/0/09/Logotipo_da_Rede_Vanguarda.png/200px-Logotipo_da_Rede_Vanguarda.png" group-title="✅ GLOBO",GLOBO TV TEM TAUBATÉ 2
http://lexus.hubns.top:80/castor777/125020917/1256836.m3u8
#EXTINF:-1 tvg-id="br#tv-sorocaba" tvg-name="GLOBO TV TEM SOROCABA SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/5/51/Logotipo_da_TV_TEM.png" group-title="✅ GLOBO",GLOBO TV TEM SOROCABA SD
http://lexus.hubns.top:80/castor777/125020917/1256834.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV TEM SOROCABA FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/5/51/Logotipo_da_TV_TEM.png" group-title="✅ GLOBO",GLOBO TV TEM SOROCABA FHD
http://lexus.hubns.top:80/castor777/125020917/1256833.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV TEM SAO JOSE DO RIO PRETO SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/5/51/Logotipo_da_TV_TEM.png" group-title="✅ GLOBO",GLOBO TV TEM SAO JOSE DO RIO PRETO SD
http://lexus.hubns.top:80/castor777/125020917/1256832.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV TEM SAO JOSE DO RIO PRETO FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/5/51/Logotipo_da_TV_TEM.png" group-title="✅ GLOBO",GLOBO TV TEM SAO JOSE DO RIO PRETO FHD
http://lexus.hubns.top:80/castor777/125020917/1256831.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV TEM ITAPETINGA SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/5/51/Logotipo_da_TV_TEM.png" group-title="✅ GLOBO",GLOBO TV TEM ITAPETINGA SD
http://lexus.hubns.top:80/castor777/125020917/1256830.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV TEM ITAPETINGA FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/5/51/Logotipo_da_TV_TEM.png" group-title="✅ GLOBO",GLOBO TV TEM ITAPETINGA FHD
http://lexus.hubns.top:80/castor777/125020917/1256829.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV TEM BAURU SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/5/51/Logotipo_da_TV_TEM.png" group-title="✅ GLOBO",GLOBO TV TEM BAURU SD
http://lexus.hubns.top:80/castor777/125020917/1256827.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV TEM BAURU FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/5/51/Logotipo_da_TV_TEM.png" group-title="✅ GLOBO",GLOBO TV TEM BAURU FHD
http://lexus.hubns.top:80/castor777/125020917/1256824.m3u8
#EXTINF:-1 tvg-id="br#tv-sudoeste" tvg-name="GLOBO TV SUDOESTE FHD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimVy3X1q9FtRo00_fETLKqtlO6C7Db_RYU1qP80XstdWEx4Xs1nYQlbipWvHEz2Lc9kg&usqp=CAU" group-title="✅ GLOBO",GLOBO TV SUDOESTE FHD
http://lexus.hubns.top:80/castor777/125020917/1256822.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV SUBAE FHD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStkd0dztctL0JySYbpzmIPyQgSSL1pzc3IbA&usqp=CAU" group-title="✅ GLOBO",GLOBO TV SUBAE FHD
http://lexus.hubns.top:80/castor777/125020917/1256820.m3u8
#EXTINF:-1 tvg-id="TVSergipe.br" tvg-name="GLOBO TV SERGIPE HD" tvg-logo="https://media.licdn.com/dms/image/C4E0BAQFJy7ifepw_MQ/company-logo_200_200/0/1630652924005/tv_sergipe_logo?e=2147483647&v=beta&t=NB7yGlow-wkvl6tPDeMrt4S-oXPMTfLjifgojoSG0CY" group-title="✅ GLOBO",GLOBO TV SERGIPE HD
http://lexus.hubns.top:80/castor777/125020917/1256819.m3u8
#EXTINF:-1 tvg-id="TVSergipe.br" tvg-name="GLOBO TV SERGIPE FHD" tvg-logo="https://media.licdn.com/dms/image/C4E0BAQFJy7ifepw_MQ/company-logo_200_200/0/1630652924005/tv_sergipe_logo?e=2147483647&v=beta&t=NB7yGlow-wkvl6tPDeMrt4S-oXPMTfLjifgojoSG0CY" group-title="✅ GLOBO",GLOBO TV SERGIPE FHD
http://lexus.hubns.top:80/castor777/125020917/1256818.m3u8
#EXTINF:-1 tvg-id="TVSantaCruz.br" tvg-name="GLOBO TV SANTA CRUZ FHD H265" tvg-logo="https://www.redebahia.com.br/wp-content/uploads/2020/10/tvsantacruz-1.svg" group-title="✅ GLOBO",GLOBO TV SANTA CRUZ FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256816.m3u8
#EXTINF:-1 tvg-id="br#globo-rio-hd" tvg-name="GLOBO TV RJ INTERIOR HD" tvg-logo="https://i.pinimg.com/originals/cb/76/80/cb768057ae5472d7b1f1f17ce60737ed.png" group-title="✅ GLOBO",GLOBO TV RJ INTERIOR HD
http://lexus.hubns.top:80/castor777/125020917/1256814.m3u8
#EXTINF:-1 tvg-id="br#globo-rio-hd" tvg-name="GLOBO TV RJ INTERIOR FHD" tvg-logo="https://i.pinimg.com/originals/cb/76/80/cb768057ae5472d7b1f1f17ce60737ed.png" group-title="✅ GLOBO",GLOBO TV RJ INTERIOR FHD
http://lexus.hubns.top:80/castor777/125020917/1256813.m3u8
#EXTINF:-1 tvg-id="TVRioSul.br" tvg-name="GLOBO TV RIO SUL HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/0/04/TV_Rio_Sul.png" group-title="✅ GLOBO",GLOBO TV RIO SUL HD
http://lexus.hubns.top:80/castor777/125020917/1256811.m3u8
#EXTINF:-1 tvg-id="TVRioSul.br" tvg-name="GLOBO TV RIO SUL FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/0/04/TV_Rio_Sul.png" group-title="✅ GLOBO",GLOBO TV RIO SUL FHD
http://lexus.hubns.top:80/castor777/125020917/1256810.m3u8
#EXTINF:-1 tvg-id="br#globo-recife" tvg-name="GLOBO TV RECIFE HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/9/9e/Logotipo_da_TV_Globo.png" group-title="✅ GLOBO",GLOBO TV RECIFE HD
http://lexus.hubns.top:80/castor777/125020917/1256808.m3u8
#EXTINF:-1 tvg-id="br#tv-morena" tvg-name="GLOBO TV MORENA SD" tvg-logo="https://cdn1.pmna.ms.gov.br//uploads/rails_admin_content_builder/content_builder_image/image/18592/left_or_right_WhatsApp_Image_2022-08-17_at_14.03.10.jpeg" group-title="✅ GLOBO",GLOBO TV MORENA SD
http://lexus.hubns.top:80/castor777/125020917/1256806.m3u8
#EXTINF:-1 tvg-id="br#tv-morena" tvg-name="GLOBO TV MORENA FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/5/5b/Logotipo_da_TV_Morena.png" group-title="✅ GLOBO",GLOBO TV MORENA FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256804.m3u8
#EXTINF:-1 tvg-id="br#tv-morena" tvg-name="GLOBO TV MORENA FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/5/5b/Logotipo_da_TV_Morena.png" group-title="✅ GLOBO",GLOBO TV MORENA FHD
http://lexus.hubns.top:80/castor777/125020917/1256803.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV MIRANTE IMPERATRIZ HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/7e/TV_Mirante.png" group-title="✅ GLOBO",GLOBO TV MIRANTE IMPERATRIZ HD
http://lexus.hubns.top:80/castor777/125020917/1256802.m3u8
#EXTINF:-1 tvg-id="br#tv-mirante-s-o-luis" tvg-name="GLOBO TV MIRANTE FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/7e/TV_Mirante.png" group-title="✅ GLOBO",GLOBO TV MIRANTE FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256800.m3u8
#EXTINF:-1 tvg-id="br#tv-mirante-s-o-luis" tvg-name="GLOBO TV MIRANTE" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/7e/TV_Mirante.png" group-title="✅ GLOBO",GLOBO TV MIRANTE
http://lexus.hubns.top:80/castor777/125020917/1256797.m3u8
#EXTINF:-1 tvg-id="TVLiberal.br" tvg-name="GLOBO TV LIBERAL HD [LOCAIS]" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/b/b8/Logotipo_da_Rede_Liberal.png" group-title="✅ GLOBO",GLOBO TV LIBERAL HD [LOCAIS]
http://lexus.hubns.top:80/castor777/125020917/1256796.m3u8
#EXTINF:-1 tvg-id="br#globo-belo-horizonte-hd" tvg-name="GLOBO TV INTEGRAÇAO JUIZ DE FORA SD" tvg-logo="https://static.wikia.nocookie.net/tvpediabrasil/images/c/c4/Tvintegra1.png/revision/latest?cb=20210814202117&path-prefix=pt-br" group-title="✅ GLOBO",GLOBO TV INTEGRAÇAO JUIZ DE FORA SD
http://lexus.hubns.top:80/castor777/125020917/1256792.m3u8
#EXTINF:-1 tvg-id="br#globo-belo-horizonte-hd" tvg-name="GLOBO TV INTEGRAÇAO JUIZ DE FORA" tvg-logo="https://static.wikia.nocookie.net/tvpediabrasil/images/c/c4/Tvintegra1.png/revision/latest?cb=20210814202117&path-prefix=pt-br" group-title="✅ GLOBO",GLOBO TV INTEGRAÇAO JUIZ DE FORA
http://lexus.hubns.top:80/castor777/125020917/1256791.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV INTEGRACAO UBERABA FHD" tvg-logo="https://static.wikia.nocookie.net/tvpediabrasil/images/c/c4/Tvintegra1.png/revision/latest?cb=20210814202117&path-prefix=pt-br" group-title="✅ GLOBO",GLOBO TV INTEGRACAO UBERABA FHD
http://lexus.hubns.top:80/castor777/125020917/1256789.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV INTEGRACAO ARAXA HD" tvg-logo="https://static.wikia.nocookie.net/tvpediabrasil/images/c/c4/Tvintegra1.png/revision/latest?cb=20210814202117&path-prefix=pt-br" group-title="✅ GLOBO",GLOBO TV INTEGRACAO ARAXA HD
http://lexus.hubns.top:80/castor777/125020917/1256788.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV INTEGRACAO ARAXA FHD" tvg-logo="https://static.wikia.nocookie.net/tvpediabrasil/images/c/c4/Tvintegra1.png/revision/latest?cb=20210814202117&path-prefix=pt-br" group-title="✅ GLOBO",GLOBO TV INTEGRACAO ARAXA FHD
http://lexus.hubns.top:80/castor777/125020917/1256787.m3u8
#EXTINF:-1 tvg-id="TVGloboRiodeJaneiro.br" tvg-name="GLOBO TV GRANDE RIO FHD H264" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/7/7a/TV_GRANDE_RIO.PNG/revision/latest/scale-to-width-down/250?cb=20220130133752" group-title="✅ GLOBO",GLOBO TV GRANDE RIO FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256786.m3u8
#EXTINF:-1 tvg-id="br#tv-gazeta-alagoas-hd" tvg-name="GLOBO TV GAZETA VITORIA SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/d/de/Logotipo_da_TV_Gazeta_%28Alagoas%29.png" group-title="✅ GLOBO",GLOBO TV GAZETA VITORIA SD
http://lexus.hubns.top:80/castor777/125020917/1256785.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV GAZETA VITORIA FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/d/de/Logotipo_da_TV_Gazeta_%28Alagoas%29.png" group-title="✅ GLOBO",GLOBO TV GAZETA VITORIA FHD
http://lexus.hubns.top:80/castor777/125020917/1256784.m3u8
#EXTINF:-1 tvg-id="br#tv-gazeta-sul" tvg-name="GLOBO TV GAZETA SUL HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/d/de/Logotipo_da_TV_Gazeta_%28Alagoas%29.png" group-title="✅ GLOBO",GLOBO TV GAZETA SUL HD
http://lexus.hubns.top:80/castor777/125020917/1256782.m3u8
#EXTINF:-1 tvg-id="br#tv-gazeta-sul" tvg-name="GLOBO TV GAZETA SUL FHD [LOCAIS]" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/d/de/Logotipo_da_TV_Gazeta_%28Alagoas%29.png" group-title="✅ GLOBO",GLOBO TV GAZETA SUL FHD [LOCAIS]
http://lexus.hubns.top:80/castor777/125020917/1256781.m3u8
#EXTINF:-1 tvg-id="br#tv-gazeta-sul" tvg-name="GLOBO TV GAZETA SUL FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/d/de/Logotipo_da_TV_Gazeta_%28Alagoas%29.png" group-title="✅ GLOBO",GLOBO TV GAZETA SUL FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256780.m3u8
#EXTINF:-1 tvg-id="br#tv-gazeta-alagoas-hd" tvg-name="GLOBO TV GAZETA FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/d/de/Logotipo_da_TV_Gazeta_%28Alagoas%29.png" group-title="✅ GLOBO",GLOBO TV GAZETA FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256778.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV GAZETA DE ALAGOAS HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/d/de/Logotipo_da_TV_Gazeta_%28Alagoas%29.png" group-title="✅ GLOBO",GLOBO TV GAZETA DE ALAGOAS HD
http://lexus.hubns.top:80/castor777/125020917/1256777.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV GAZETA ALAGOAS FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/d/de/Logotipo_da_TV_Gazeta_%28Alagoas%29.png" group-title="✅ GLOBO",GLOBO TV GAZETA ALAGOAS FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256776.m3u8
#EXTINF:-1 tvg-id="TVCentroAmericaCuiaba.br" tvg-name="GLOBO TV CENTRO AMÉRICA CUIABÁ FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/77/Logotipo_da_TV_Centro_Am%C3%A9rica.png" group-title="✅ GLOBO",GLOBO TV CENTRO AMÉRICA CUIABÁ FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256775.m3u8
#EXTINF:-1 tvg-id="TVCaboBranco.br" tvg-name="GLOBO TV CABO BRANCO FHD H265²" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/2a/TV_Cabo_Branco.jpg" group-title="✅ GLOBO",GLOBO TV CABO BRANCO FHD H265²
http://lexus.hubns.top:80/castor777/125020917/1256774.m3u8
#EXTINF:-1 tvg-id="TVCaboBranco.br" tvg-name="GLOBO TV CABO BRANCO" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/2a/TV_Cabo_Branco.jpg" group-title="✅ GLOBO",GLOBO TV CABO BRANCO
http://lexus.hubns.top:80/castor777/125020917/1256773.m3u8
#EXTINF:-1 tvg-id="br#tv-brasilia" tvg-name="GLOBO TV BRASILIA HD [LOCAIS]" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/f/f3/Logo_da_Globo_BSB.png/revision/latest/scale-to-width-down/300?cb=20211129224520" group-title="✅ GLOBO",GLOBO TV BRASILIA HD [LOCAIS]
http://lexus.hubns.top:80/castor777/125020917/1256772.m3u8
#EXTINF:-1 tvg-id="br#globo-belo-horizonte-hd" tvg-name="GLOBO TV BH HD" tvg-logo="https://observatoriodatv.uol.com.br/wp-content/uploads/2017/09/logo-globo-minas.jpg" group-title="✅ GLOBO",GLOBO TV BH HD
http://lexus.hubns.top:80/castor777/125020917/1256770.m3u8
#EXTINF:-1 tvg-id="br#globo-belo-horizonte-hd" tvg-name="GLOBO TV BH FHD" tvg-logo="https://observatoriodatv.uol.com.br/wp-content/uploads/2017/09/logo-globo-minas.jpg" group-title="✅ GLOBO",GLOBO TV BH FHD
http://lexus.hubns.top:80/castor777/125020917/1256769.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV BAHIA HD" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/9/92/TV_Bahia_Logo_%281985%29.png/revision/latest?cb=20210329140155" group-title="✅ GLOBO",GLOBO TV BAHIA HD
http://lexus.hubns.top:80/castor777/125020917/1256766.m3u8
#EXTINF:-1 tvg-id="br#globo-rio-hd" tvg-name="GLOBO TV BAHIA FHD H265" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/9/92/TV_Bahia_Logo_%281985%29.png/revision/latest?cb=20210329140155" group-title="✅ GLOBO",GLOBO TV BAHIA FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256765.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV BAHIA" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/9/92/TV_Bahia_Logo_%281985%29.png/revision/latest?cb=20210329140155" group-title="✅ GLOBO",GLOBO TV BAHIA
http://lexus.hubns.top:80/castor777/125020917/1256764.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO TV ASA BRANCA FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/1e/Logotipo_da_TV_Asa_Branca.png" group-title="✅ GLOBO",GLOBO TV ASA BRANCA FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256763.m3u8
#EXTINF:-1 tvg-id="br#globo-anhanguera" tvg-name="GLOBO TV ANHANGUERA GOIANIA FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a0/Logo_TV_Anhanguera_2019.png" group-title="✅ GLOBO",GLOBO TV ANHANGUERA GOIANIA FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256762.m3u8
#EXTINF:-1 tvg-id="TVAnhangueraGoiania.br" tvg-name="GLOBO TV ANHANGUERA GOIANIA FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a0/Logo_TV_Anhanguera_2019.png" group-title="✅ GLOBO",GLOBO TV ANHANGUERA GOIANIA FHD
http://lexus.hubns.top:80/castor777/125020917/1256761.m3u8
#EXTINF:-1 tvg-id="TVGloboNordeste.br" tvg-name="GLOBO SALVADOR SD" tvg-logo="https://pbs.twimg.com/profile_images/914546721/BOLATVSF_400x400.png" group-title="✅ GLOBO",GLOBO SALVADOR SD
http://lexus.hubns.top:80/castor777/125020917/1256759.m3u8
#EXTINF:-1 tvg-id="br#globo-s-o-paulo-hd" tvg-name="GLOBO SALVADOR HD" tvg-logo="https://pbs.twimg.com/profile_images/914546721/BOLATVSF_400x400.png" group-title="✅ GLOBO",GLOBO SALVADOR HD
http://lexus.hubns.top:80/castor777/125020917/1256758.m3u8
#EXTINF:-1 tvg-id="RPCTVCuritiba.br" tvg-name="GLOBO RPC TV CURITIBA" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC TV CURITIBA
http://lexus.hubns.top:80/castor777/125020917/1256757.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO RPC PARANAENSE FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC PARANAENSE FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256756.m3u8
#EXTINF:-1 tvg-id="RPCTVMaringa.br" tvg-name="GLOBO RPC MARINGÁ FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC MARINGÁ FHD
http://lexus.hubns.top:80/castor777/125020917/1256755.m3u8
#EXTINF:-1 tvg-id="RPCTVMaringa.br" tvg-name="GLOBO RPC MARINGÁ" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC MARINGÁ
http://lexus.hubns.top:80/castor777/125020917/1256754.m3u8
#EXTINF:-1 tvg-id="RPCTVMaringa.br" tvg-name="GLOBO RPC MARINGA FHD H265²" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC MARINGA FHD H265²
http://lexus.hubns.top:80/castor777/125020917/1256753.m3u8
#EXTINF:-1 tvg-id="RPCTVFozdoIguacu.br" tvg-name="GLOBO RPC FOZ FHD H265²" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC FOZ FHD H265²
http://lexus.hubns.top:80/castor777/125020917/1256751.m3u8
#EXTINF:-1 tvg-id="RPCTVCuritiba.br" tvg-name="GLOBO RPC CURITIBA FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/76/Logotipo_da_RPC.png" group-title="✅ GLOBO",GLOBO RPC CURITIBA FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256750.m3u8
#EXTINF:-1 tvg-id="br#rede-amazonica-rio-branco" tvg-name="GLOBO REDE AMAZONICA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/26/Logotipo_da_Rede_Amaz%C3%B4nica.png" group-title="✅ GLOBO",GLOBO REDE AMAZONICA HD
http://lexus.hubns.top:80/castor777/125020917/1256749.m3u8
#EXTINF:-1 tvg-id="RedeAmazonica.br" tvg-name="GLOBO REDE AMAZONICA" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/26/Logotipo_da_Rede_Amaz%C3%B4nica.png" group-title="✅ GLOBO",GLOBO REDE AMAZONICA
http://lexus.hubns.top:80/castor777/125020917/1256748.m3u8
#EXTINF:-1 tvg-id="br#globo-recife" tvg-name="GLOBO RECIFE FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/9/9e/Logotipo_da_TV_Globo.png" group-title="✅ GLOBO",GLOBO RECIFE FHD
http://lexus.hubns.top:80/castor777/125020917/1256746.m3u8
#EXTINF:-1 tvg-id="br#globo-recife" tvg-name="GLOBO RECIFE" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/9/9e/Logotipo_da_TV_Globo.png" group-title="✅ GLOBO",GLOBO RECIFE
http://lexus.hubns.top:80/castor777/125020917/1256744.m3u8
#EXTINF:-1 tvg-id="RBSTVRS.br" tvg-name="GLOBO RBS TV POÁ FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/RBS_TV.png/200px-RBS_TV.png" group-title="✅ GLOBO",GLOBO RBS TV POÁ FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256741.m3u8
#EXTINF:-1 tvg-id="RBSTVPortoAlegre.br" tvg-name="GLOBO RBS TV PORTO ALEGRE" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/RBS_TV.png/200px-RBS_TV.png" group-title="✅ GLOBO",GLOBO RBS TV PORTO ALEGRE
http://lexus.hubns.top:80/castor777/125020917/1256740.m3u8
#EXTINF:-1 tvg-id="RBSTVPortoAlegre.br" tvg-name="GLOBO RBS PORTO ALEGRE TV FHD H265²" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/RBS_TV.png/200px-RBS_TV.png" group-title="✅ GLOBO",GLOBO RBS PORTO ALEGRE TV FHD H265²
http://lexus.hubns.top:80/castor777/125020917/1256738.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO PORTO VELHO HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/26/Logotipo_da_Rede_Amaz%C3%B4nica.png" group-title="✅ GLOBO",GLOBO PORTO VELHO HD
http://lexus.hubns.top:80/castor777/125020917/1256736.m3u8
#EXTINF:-1 tvg-id="NSCTVFlorianopolis.br" tvg-name="GLOBO NSC TV FLORIANOPOLIS FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NSC_TV_logo.png/220px-NSC_TV_logo.png" group-title="✅ GLOBO",GLOBO NSC TV FLORIANOPOLIS FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256734.m3u8
#EXTINF:-1 tvg-id="NSCTVBlumenau.br" tvg-name="GLOBO NSC TV BLUMENAU FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NSC_TV_logo.png/220px-NSC_TV_logo.png" group-title="✅ GLOBO",GLOBO NSC TV BLUMENAU FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256733.m3u8
#EXTINF:-1 tvg-id="NSCTVJoinville.br" tvg-name="GLOBO NSC JOINVILLE FHD H265²" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NSC_TV_logo.png/220px-NSC_TV_logo.png" group-title="✅ GLOBO",GLOBO NSC JOINVILLE FHD H265²
http://lexus.hubns.top:80/castor777/125020917/1256731.m3u8
#EXTINF:-1 tvg-id="TVGloboNordeste.br" tvg-name="GLOBO NORDESTE HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/9/9e/Logotipo_da_TV_Globo.png" group-title="✅ GLOBO",GLOBO NORDESTE HD
http://lexus.hubns.top:80/castor777/125020917/1256725.m3u8
#EXTINF:-1 tvg-id="TVGloboNordeste.br" tvg-name="GLOBO NORDESTE HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/9/9e/Logotipo_da_TV_Globo.png" group-title="✅ GLOBO",GLOBO NORDESTE HD
http://lexus.hubns.top:80/castor777/125020917/1256724.m3u8
#EXTINF:-1 tvg-id="TVGloboNordeste.br" tvg-name="GLOBO NORDESTE FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/9/9e/Logotipo_da_TV_Globo.png" group-title="✅ GLOBO",GLOBO NORDESTE FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256722.m3u8
#EXTINF:-1 tvg-id="TVGloboNordeste.br" tvg-name="GLOBO NORDESTE" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/9/9e/Logotipo_da_TV_Globo.png" group-title="✅ GLOBO",GLOBO NORDESTE
http://lexus.hubns.top:80/castor777/125020917/1256721.m3u8
#EXTINF:-1 tvg-id="TVGloboNordeste.br" tvg-name="GLOBO NORDESTE" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/9/9e/Logotipo_da_TV_Globo.png" group-title="✅ GLOBO",GLOBO NORDESTE
http://lexus.hubns.top:80/castor777/125020917/1256720.m3u8
#EXTINF:-1 tvg-id="br#globo-belo-horizonte-hd" tvg-name="GLOBO MINAS SD" tvg-logo="https://static.wikia.nocookie.net/tvpediabrasil/images/8/8b/TV_Globo_Minas_2021.png/revision/latest?cb=20220916172141&path-prefix=pt-br" group-title="✅ GLOBO",GLOBO MINAS SD
http://lexus.hubns.top:80/castor777/125020917/1256712.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO MINAS HD" tvg-logo="https://static.wikia.nocookie.net/tvpediabrasil/images/8/8b/TV_Globo_Minas_2021.png/revision/latest?cb=20220916172141&path-prefix=pt-br" group-title="✅ GLOBO",GLOBO MINAS HD
http://lexus.hubns.top:80/castor777/125020917/1256711.m3u8
#EXTINF:-1 tvg-id="br#globo-belo-horizonte-hd" tvg-name="GLOBO MINAS FHD" tvg-logo="https://static.wikia.nocookie.net/tvpediabrasil/images/8/8b/TV_Globo_Minas_2021.png/revision/latest?cb=20220916172141&path-prefix=pt-br" group-title="✅ GLOBO",GLOBO MINAS FHD
http://lexus.hubns.top:80/castor777/125020917/1256710.m3u8
#EXTINF:-1 tvg-id="InterTVGrandeMinas.br" tvg-name="GLOBO INTER TV GRANDE MINAS FHD H265" tvg-logo="https://s2.glbimg.com/FfDSGtP6CgEUrqKm9B4CqIDDGco=/s.glbimg.com/og/rg/f/original/2015/10/23/logo.png" group-title="✅ GLOBO",GLOBO INTER TV GRANDE MINAS FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256709.m3u8
#EXTINF:-1 tvg-id="InterTVGrandeMinas.br" tvg-name="GLOBO INTER TV GRANDE MINAS" tvg-logo="https://s2.glbimg.com/FfDSGtP6CgEUrqKm9B4CqIDDGco=/s.glbimg.com/og/rg/f/original/2015/10/23/logo.png" group-title="✅ GLOBO",GLOBO INTER TV GRANDE MINAS
http://lexus.hubns.top:80/castor777/125020917/1256708.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO INTER TV DOS VALES FHD H265" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/5/5f/InterTVdosVales_2016.png/revision/latest/scale-to-width-down/250?cb=20200106042606" group-title="✅ GLOBO",GLOBO INTER TV DOS VALES FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256707.m3u8
#EXTINF:-1 tvg-id="NSCTVFlorianopolis.br" tvg-name="GLOBO FLORIANOPOLIS FHD ALT" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/8/8f/NSC_TV_logo.png" group-title="✅ GLOBO",GLOBO FLORIANOPOLIS FHD ALT
http://lexus.hubns.top:80/castor777/125020917/1256705.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO FLORIANOPOLIS HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/8/8f/NSC_TV_logo.png" group-title="✅ GLOBO",GLOBO FLORIANOPOLIS HD
http://lexus.hubns.top:80/castor777/125020917/1256704.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="Globo EPTV São Carlos" tvg-logo="https://institucional.eptv.com.br/recursoshumanos/programadeestagio/img/logo_2019.png" group-title="✅ GLOBO",Globo EPTV São Carlos
http://lexus.hubns.top:80/castor777/125020917/1256702.m3u8
#EXTINF:-1 tvg-id="EPTVSuldeMinas.br" tvg-name="GLOBO EPTV SUL DE MINAS" tvg-logo="https://institucional.eptv.com.br/recursoshumanos/programadeestagio/img/logo_2019.png" group-title="✅ GLOBO",GLOBO EPTV SUL DE MINAS
http://lexus.hubns.top:80/castor777/125020917/1256700.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="Globo EPTV Sao Carlos HD" tvg-logo="https://institucional.eptv.com.br/recursoshumanos/programadeestagio/img/logo_2019.png" group-title="✅ GLOBO",Globo EPTV Sao Carlos HD
http://lexus.hubns.top:80/castor777/125020917/1256699.m3u8
#EXTINF:-1 tvg-id="br#eptv-sul-de-minas-hd" tvg-name="GLOBO EPTV RIBEIRÃO PRETO SD" tvg-logo="https://institucional.eptv.com.br/recursoshumanos/programadeestagio/img/logo_2019.png" group-title="✅ GLOBO",GLOBO EPTV RIBEIRÃO PRETO SD
http://lexus.hubns.top:80/castor777/125020917/1256698.m3u8
#EXTINF:-1 tvg-id="br#eptv-sul-de-minas-hd" tvg-name="GLOBO EPTV RIBEIRÃO PRETO" tvg-logo="https://institucional.eptv.com.br/recursoshumanos/programadeestagio/img/logo_2019.png" group-title="✅ GLOBO",GLOBO EPTV RIBEIRÃO PRETO
http://lexus.hubns.top:80/castor777/125020917/1256697.m3u8
#EXTINF:-1 tvg-id="br#globo-s-o-paulo-hd" tvg-name="GLOBO EPTV CAMPINAS SD" tvg-logo="https://i.imgur.com/Pxklhtd.png" group-title="✅ GLOBO",GLOBO EPTV CAMPINAS SD
http://lexus.hubns.top:80/castor777/125020917/1256696.m3u8
#EXTINF:-1 tvg-id="br#globo-s-o-paulo-hd" tvg-name="GLOBO EPTV CAMPINAS HD" tvg-logo="https://institucional.eptv.com.br/recursoshumanos/programadeestagio/img/logo_2019.png" group-title="✅ GLOBO",GLOBO EPTV CAMPINAS HD
http://lexus.hubns.top:80/castor777/125020917/1256695.m3u8
#EXTINF:-1 tvg-id="RPCTVCuritiba.br" tvg-name="GLOBO CURITIBA SD" tvg-logo="https://i.imgur.com/Pxklhtd.png" group-title="✅ GLOBO",GLOBO CURITIBA SD
http://lexus.hubns.top:80/castor777/125020917/1256694.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO CURITIBA HD" tvg-logo="https://especiais-bichodopr-wp.s3.amazonaws.com/wp-content/themes/bichodoparana/images/rpclogo.png" group-title="✅ GLOBO",GLOBO CURITIBA HD
http://lexus.hubns.top:80/castor777/125020917/1256693.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO CUIABÁ HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/7/77/Logotipo_da_TV_Centro_Am%C3%A9rica.png" group-title="✅ GLOBO",GLOBO CUIABÁ HD
http://lexus.hubns.top:80/castor777/125020917/1256692.m3u8
#EXTINF:-1 tvg-id="TVCaboBranco.br" tvg-name="GLOBO CABO BRANCO SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/2a/TV_Cabo_Branco.jpg" group-title="✅ GLOBO",GLOBO CABO BRANCO SD
http://lexus.hubns.top:80/castor777/125020917/1256691.m3u8
#EXTINF:-1 tvg-id="TVCaboBranco.br" tvg-name="GLOBO CABO BRANCO" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/2/2a/TV_Cabo_Branco.jpg" group-title="✅ GLOBO",GLOBO CABO BRANCO
http://lexus.hubns.top:80/castor777/125020917/1256690.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO BRASÍLIA FHD H265²" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/f/f3/Logo_da_Globo_BSB.png/revision/latest/scale-to-width-down/300?cb=20211129224520" group-title="✅ GLOBO",GLOBO BRASÍLIA FHD H265²
http://lexus.hubns.top:80/castor777/125020917/1256689.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO BRASILIA SD" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/f/f3/Logo_da_Globo_BSB.png/revision/latest/scale-to-width-down/300?cb=20211129224520" group-title="✅ GLOBO",GLOBO BRASILIA SD
http://lexus.hubns.top:80/castor777/125020917/1256687.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO BRASILIA HD" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/f/f3/Logo_da_Globo_BSB.png/revision/latest/scale-to-width-down/300?cb=20211129224520" group-title="✅ GLOBO",GLOBO BRASILIA HD
http://lexus.hubns.top:80/castor777/125020917/1256686.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO BRASILIA FHD H265" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/f/f3/Logo_da_Globo_BSB.png/revision/latest/scale-to-width-down/300?cb=20211129224520" group-title="✅ GLOBO",GLOBO BRASILIA FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256685.m3u8
#EXTINF:-1 tvg-id="EPTVSuldeMinas.br" tvg-name="GLOBO EPTV SUL DE MINAS HD" tvg-logo="https://institucional.eptv.com.br/recursoshumanos/programadeestagio/img/logo_2019.png" group-title="✅ GLOBO",GLOBO EPTV SUL DE MINAS HD
http://lexus.hubns.top:80/castor777/125020917/1256629.m3u8
#EXTINF:-1 tvg-id="EPTVSuldeMinas.br" tvg-name="GLOBO EPTV SUL DE MINAS FHD" tvg-logo="https://institucional.eptv.com.br/recursoshumanos/programadeestagio/img/logo_2019.png" group-title="✅ GLOBO",GLOBO EPTV SUL DE MINAS FHD
http://lexus.hubns.top:80/castor777/125020917/1256628.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO EPTV CENTRAL FHD" tvg-logo="https://institucional.eptv.com.br/recursoshumanos/programadeestagio/img/logo_2019.png" group-title="✅ GLOBO",GLOBO EPTV CENTRAL FHD
http://lexus.hubns.top:80/castor777/125020917/1256626.m3u8
#EXTINF:-1 tvg-id="TVGloboBrasilia.br" tvg-name="GLOBO EPTV CAMPINAS FHD H264" tvg-logo="https://institucional.eptv.com.br/recursoshumanos/programadeestagio/img/logo_2019.png" group-title="✅ GLOBO",GLOBO EPTV CAMPINAS FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256625.m3u8
#EXTINF:-1 tvg-id="br#globo-s-o-paulo-hd" tvg-name="GLOBO SP²" tvg-logo="https://i.pinimg.com/originals/a4/ed/cc/a4edcce9c057e6f6941dc5a590299390.png" group-title="✅ GLOBO",GLOBO SP²
http://lexus.hubns.top:80/castor777/125020917/1256409.m3u8
#EXTINF:-1 tvg-id="br#globo-s-o-paulo-hd" tvg-name="GLOBO SP" tvg-logo="https://i.pinimg.com/originals/a4/ed/cc/a4edcce9c057e6f6941dc5a590299390.png" group-title="✅ GLOBO",GLOBO SP
http://lexus.hubns.top:80/castor777/125020917/1256408.m3u8
#EXTINF:-1 tvg-id="br#globo-s-o-paulo-hd" tvg-name="GLOBO SP HD ALT" tvg-logo="https://i.pinimg.com/originals/a4/ed/cc/a4edcce9c057e6f6941dc5a590299390.png" group-title="✅ GLOBO",GLOBO SP HD ALT
http://lexus.hubns.top:80/castor777/125020917/1256407.m3u8
#EXTINF:-1 tvg-id="br#globo-s-o-paulo-hd" tvg-name="GLOBO SP HD" tvg-logo="https://i.pinimg.com/originals/a4/ed/cc/a4edcce9c057e6f6941dc5a590299390.png" group-title="✅ GLOBO",GLOBO SP HD
http://lexus.hubns.top:80/castor777/125020917/1256406.m3u8
#EXTINF:-1 tvg-id="br#globo-s-o-paulo-hd" tvg-name="GLOBO SP FHD H265" tvg-logo="https://i.pinimg.com/originals/a4/ed/cc/a4edcce9c057e6f6941dc5a590299390.png" group-title="✅ GLOBO",GLOBO SP FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256405.m3u8
#EXTINF:-1 tvg-id="br#globo-s-o-paulo-hd" tvg-name="GLOBO SP FHD DUAL" tvg-logo="https://i.pinimg.com/originals/a4/ed/cc/a4edcce9c057e6f6941dc5a590299390.png" group-title="✅ GLOBO",GLOBO SP FHD DUAL
http://lexus.hubns.top:80/castor777/125020917/1256404.m3u8
#EXTINF:-1 tvg-id="br#globo-s-o-paulo-hd" tvg-name="GLOBO SP FHD" tvg-logo="https://i.pinimg.com/originals/a4/ed/cc/a4edcce9c057e6f6941dc5a590299390.png" group-title="✅ GLOBO",GLOBO SP FHD
http://lexus.hubns.top:80/castor777/125020917/1256403.m3u8
#EXTINF:-1 tvg-id="br#globo-rio-hd" tvg-name="GLOBO RJ SD" tvg-logo="https://i.pinimg.com/originals/cb/76/80/cb768057ae5472d7b1f1f17ce60737ed.png" group-title="✅ GLOBO",GLOBO RJ SD
http://lexus.hubns.top:80/castor777/125020917/1256401.m3u8
#EXTINF:-1 tvg-id="br#globo-rio-hd" tvg-name="GLOBO RJ HD" tvg-logo="https://i.pinimg.com/originals/cb/76/80/cb768057ae5472d7b1f1f17ce60737ed.png" group-title="✅ GLOBO",GLOBO RJ HD
http://lexus.hubns.top:80/castor777/125020917/1256399.m3u8
#EXTINF:-1 tvg-id="br#globo-rio-hd" tvg-name="GLOBO RJ FHD H265²" tvg-logo="https://i.pinimg.com/originals/cb/76/80/cb768057ae5472d7b1f1f17ce60737ed.png" group-title="✅ GLOBO",GLOBO RJ FHD H265²
http://lexus.hubns.top:80/castor777/125020917/1256398.m3u8
#EXTINF:-1 tvg-id="br#globo-rio-hd" tvg-name="GLOBO RJ FHD H265" tvg-logo="https://i.pinimg.com/originals/cb/76/80/cb768057ae5472d7b1f1f17ce60737ed.png" group-title="✅ GLOBO",GLOBO RJ FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256397.m3u8
#EXTINF:-1 tvg-id="br#band-minas" tvg-name="BAND MINAS FHD" tvg-logo="https://pbs.twimg.com/profile_images/3319896543/1782bac77d6faafa9b66c4df0a151bd4_400x400.jpeg" group-title="✅ BAND",BAND MINAS FHD
http://lexus.hubns.top:80/castor777/125020917/1257499.m3u8
#EXTINF:-1 tvg-id="br#tv-manaira" tvg-name="TV MANAIRA BAND [1080 PB]" tvg-logo="https://cdn.mitvstatic.com/channels/br_tv-manaira_m.png" group-title="✅ BAND",TV MANAIRA BAND [1080 PB]
http://lexus.hubns.top:80/castor777/125020917/1257380.m3u8
#EXTINF:-1 tvg-id="BandSaoPaulo.br" tvg-name="BAND²" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND²
http://lexus.hubns.top:80/castor777/125020917/1256505.m3u8
#EXTINF:-1 tvg-id="BandSaoPaulo.br" tvg-name="BAND SP SD" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND SP SD
http://lexus.hubns.top:80/castor777/125020917/1256500.m3u8
#EXTINF:-1 tvg-id="BandSaoPaulo.br" tvg-name="BAND RECIFE TV TRIBUNA FHD H264" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND RECIFE TV TRIBUNA FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256499.m3u8
#EXTINF:-1 tvg-id="br#band" tvg-name="BAND CAMPINAS HD" tvg-logo="https://painel.solidweb.com.br/uploads/113/113_2020-08-19_15-08-40_4_89120446.png" group-title="✅ BAND",BAND CAMPINAS HD
http://lexus.hubns.top:80/castor777/125020917/1256498.m3u8
#EXTINF:-1 tvg-id="BandNews.br" tvg-name="BAND NEWS²" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/a/a2/BandNews_2019_Logo_silver.png/revision/latest?cb=20190321005416" group-title="✅ NOTICIAS",BAND NEWS²
http://lexus.hubns.top:80/castor777/125020917/1256497.m3u8
#EXTINF:-1 tvg-id="BandNews.br" tvg-name="BAND NEWS FHD H265" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/a/a2/BandNews_2019_Logo_silver.png/revision/latest?cb=20190321005416" group-title="✅ NOTICIAS",BAND NEWS FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256495.m3u8
#EXTINF:-1 tvg-id="br#bandnews-hd" tvg-name="BAND NEWS FHD" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/a/a2/BandNews_2019_Logo_silver.png/revision/latest?cb=20190321005416" group-title="✅ NOTICIAS",BAND NEWS FHD
http://lexus.hubns.top:80/castor777/125020917/1256494.m3u8
#EXTINF:-1 tvg-id="BandNews.br" tvg-name="BAND NEWS FHD" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/a/a2/BandNews_2019_Logo_silver.png/revision/latest?cb=20190321005416" group-title="✅ NOTICIAS",BAND NEWS FHD
http://lexus.hubns.top:80/castor777/125020917/1256493.m3u8
#EXTINF:-1 tvg-id="BandSaoPaulo.br" tvg-name="BAND HD¹" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND HD¹
http://lexus.hubns.top:80/castor777/125020917/1256492.m3u8
#EXTINF:-1 tvg-id="BandSaoPaulo.br" tvg-name="BAND HD [LOCAL RN]" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND HD [LOCAL RN]
http://lexus.hubns.top:80/castor777/125020917/1256491.m3u8
#EXTINF:-1 tvg-id="BandSaoPaulo.br" tvg-name="BAND HD" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND HD
http://lexus.hubns.top:80/castor777/125020917/1256490.m3u8
#EXTINF:-1 tvg-id="BandSaoPaulo.br" tvg-name="BAND FHD H265" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256489.m3u8
#EXTINF:-1 tvg-id="BandSaoPaulo.br" tvg-name="BAND FHD" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND FHD
http://lexus.hubns.top:80/castor777/125020917/1256488.m3u8
#EXTINF:-1 tvg-id="BandSaoPaulo.br" tvg-name="BAND" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND
http://lexus.hubns.top:80/castor777/125020917/1256487.m3u8
#EXTINF:-1 tvg-id="BandNews.br" tvg-name="BAND NEWS" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/a/a2/BandNews_2019_Logo_silver.png/revision/latest?cb=20190321005416" group-title="✅ NOTICIAS",BAND NEWS
http://lexus.hubns.top:80/castor777/125020917/1256451.m3u8
#EXTINF:-1 tvg-id="br#rede-tv-sp" tvg-name="REDETV FHD" tvg-logo="https://static.poder360.com.br/2021/03/redetv.png" group-title="✅ REDE TV",REDETV FHD
http://lexus.hubns.top:80/castor777/125020917/1257558.m3u8
#EXTINF:-1 tvg-id="br#rede-tv-sp" tvg-name="REDETV HD" tvg-logo="https://static.poder360.com.br/2021/03/redetv.png" group-title="✅ REDE TV",REDETV HD
http://lexus.hubns.top:80/castor777/125020917/1257165.m3u8
#EXTINF:-1 tvg-id="br#rede-tv-sp" tvg-name="REDETV FHD H265" tvg-logo="https://static.poder360.com.br/2021/03/redetv.png" group-title="✅ REDE TV",REDETV FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257164.m3u8
#EXTINF:-1 tvg-id="br#rede-tv-sp" tvg-name="REDETV" tvg-logo="https://static.poder360.com.br/2021/03/redetv.png" group-title="✅ REDE TV",REDETV
http://lexus.hubns.top:80/castor777/125020917/1257163.m3u8
#EXTINF:-1 tvg-id="RecordTVSaoPaulo.br" tvg-name="RECORD BAURU HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD BAURU HD
http://lexus.hubns.top:80/castor777/125020917/1257808.m3u8
#EXTINF:-1 tvg-id="RecordTVSaoPaulo.br" tvg-name="RECORD RIO PRETO HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD RIO PRETO HD
http://lexus.hubns.top:80/castor777/125020917/1257807.m3u8
#EXTINF:-1 tvg-id="RecordTVSaoPaulo.br" tvg-name="RECORD RIBEIRÃO PRETO HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD RIBEIRÃO PRETO HD
http://lexus.hubns.top:80/castor777/125020917/1257806.m3u8
#EXTINF:-1 tvg-id="RecordTVRio.br" tvg-name="RECORD CAMPOS DOS GOYTACAZES HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD CAMPOS DOS GOYTACAZES HD
http://lexus.hubns.top:80/castor777/125020917/1257805.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD SERGIPE HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD SERGIPE HD
http://lexus.hubns.top:80/castor777/125020917/1257546.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD CAMPINAS HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD CAMPINAS HD
http://lexus.hubns.top:80/castor777/125020917/1257545.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD SJRP HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD SJRP HD
http://lexus.hubns.top:80/castor777/125020917/1257544.m3u8
#EXTINF:-1 tvg-id="br#recordtv-cuiaba" tvg-name="RECORD CUIABA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD CUIABA HD
http://lexus.hubns.top:80/castor777/125020917/1257543.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD RONDONIA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD RONDONIA HD
http://lexus.hubns.top:80/castor777/125020917/1257542.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD PARNAIBA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD PARNAIBA HD
http://lexus.hubns.top:80/castor777/125020917/1257541.m3u8
#EXTINF:-1 tvg-id="RecordTVSaoPaulo.br" tvg-name="RECORD INTERIOR SP HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD INTERIOR SP HD
http://lexus.hubns.top:80/castor777/125020917/1257540.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD CEARA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD CEARA HD
http://lexus.hubns.top:80/castor777/125020917/1257539.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD JUARA MT HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD JUARA MT HD
http://lexus.hubns.top:80/castor777/125020917/1257538.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD SANTOS HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD SANTOS HD
http://lexus.hubns.top:80/castor777/125020917/1257537.m3u8
#EXTINF:-1 tvg-id="RecordTVItapoan.br" tvg-name="RECORD ITAPOAN HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD ITAPOAN HD
http://lexus.hubns.top:80/castor777/125020917/1257536.m3u8
#EXTINF:-1 tvg-id="br#record" tvg-name="RECORD CABRALIA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD CABRALIA HD
http://lexus.hubns.top:80/castor777/125020917/1257535.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD RECIFE HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD RECIFE HD
http://lexus.hubns.top:80/castor777/125020917/1257534.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD JUINA MT HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD JUINA MT HD
http://lexus.hubns.top:80/castor777/125020917/1257533.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD PIAUI HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD PIAUI HD
http://lexus.hubns.top:80/castor777/125020917/1257532.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD CRICIUMA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD CRICIUMA HD
http://lexus.hubns.top:80/castor777/125020917/1257510.m3u8
#EXTINF:-1 tvg-id="br#record-florianopolis" tvg-name="RECORD FLORIPA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD FLORIPA HD
http://lexus.hubns.top:80/castor777/125020917/1257509.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="TV TROPICAL (RECORD TV) HD [LOCAL RN]" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",TV TROPICAL (RECORD TV) HD [LOCAL RN]
http://lexus.hubns.top:80/castor777/125020917/1257408.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RICTV MARINGA RECORD TV FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RICTV MARINGA RECORD TV FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257166.m3u8
#EXTINF:-1 tvg-id="br#record-tv-rs" tvg-name="RECORD RS HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD RS HD
http://lexus.hubns.top:80/castor777/125020917/1257138.m3u8
#EXTINF:-1 tvg-id="br#record-tv-rs" tvg-name="RECORD RS" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD RS
http://lexus.hubns.top:80/castor777/125020917/1257137.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD RN TV TROPICAL FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD RN TV TROPICAL FHD
http://lexus.hubns.top:80/castor777/125020917/1257136.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD PARANA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD PARANA HD
http://lexus.hubns.top:80/castor777/125020917/1257135.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD PARANA FHD" tvg-logo="https://gkpb.com.br/wp-content/uploads/2023/11/novo-logo-record-png.png" group-title="✅ RECORD",RECORD PARANA FHD
http://lexus.hubns.top:80/castor777/125020917/1257134.m3u8
#EXTINF:-1 tvg-id="RecordTVMinas.br" tvg-name="RECORD MINAS HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD MINAS HD
http://lexus.hubns.top:80/castor777/125020917/1257128.m3u8
#EXTINF:-1 tvg-id="br#record-minas" tvg-name="RECORD MINAS" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD MINAS
http://lexus.hubns.top:80/castor777/125020917/1257127.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD MANAUS SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD MANAUS SD
http://lexus.hubns.top:80/castor777/125020917/1257126.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD MANAUS HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD MANAUS HD
http://lexus.hubns.top:80/castor777/125020917/1257125.m3u8
#EXTINF:-1 tvg-id="br#record-goias" tvg-name="RECORD GOIAS HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD GOIAS HD
http://lexus.hubns.top:80/castor777/125020917/1257124.m3u8
#EXTINF:-1 tvg-id="RecordTVGoias.br" tvg-name="RECORD GOIAS" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD GOIAS
http://lexus.hubns.top:80/castor777/125020917/1257123.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257122.m3u8
#EXTINF:-1 tvg-id="br#record-brasilia" tvg-name="RECORD BRASILIA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD BRASILIA HD
http://lexus.hubns.top:80/castor777/125020917/1257121.m3u8
#EXTINF:-1 tvg-id="br#record-brasilia" tvg-name="RECORD BRASILIA" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD BRASILIA
http://lexus.hubns.top:80/castor777/125020917/1257120.m3u8
#EXTINF:-1 tvg-id="RecordTVBelem.br" tvg-name="RECORD BELEM HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD BELEM HD
http://lexus.hubns.top:80/castor777/125020917/1257119.m3u8
#EXTINF:-1 tvg-id="RecordTVBelem.br" tvg-name="RECORD BELEM" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD BELEM
http://lexus.hubns.top:80/castor777/125020917/1257118.m3u8
#EXTINF:-1 tvg-id="br#record-bahia" tvg-name="RECORD BAHIA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD BAHIA HD
http://lexus.hubns.top:80/castor777/125020917/1257117.m3u8
#EXTINF:-1 tvg-id="br#record-bahia" tvg-name="RECORD BAHIA" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD BAHIA
http://lexus.hubns.top:80/castor777/125020917/1257116.m3u8
#EXTINF:-1 tvg-id="RecordTVRio.br" tvg-name="RECORD RIO" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD RIO
http://lexus.hubns.top:80/castor777/125020917/1257115.m3u8
#EXTINF:-1 tvg-id="RecordTVRio.br" tvg-name="RECORD RIO HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD RIO HD
http://lexus.hubns.top:80/castor777/125020917/1257114.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD
http://lexus.hubns.top:80/castor777/125020917/1257113.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD SD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD SD
http://lexus.hubns.top:80/castor777/125020917/1257112.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD HD
http://lexus.hubns.top:80/castor777/125020917/1257111.m3u8
#EXTINF:-1 tvg-id="RecordTVSaoPaulo.br" tvg-name="RECORD SP FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD SP FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257110.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/1/10/Logotipo_da_Record.png" group-title="✅ RECORD",RECORD FHD
http://lexus.hubns.top:80/castor777/125020917/1256411.m3u8
#EXTINF:-1 tvg-id="SBTNacional.br" tvg-name="SBT PARANA HD" tvg-logo="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2ea69af-b90c-45dc-ae27-611649bd6b6b/df65goy-883622c1-c120-430c-b7e3-27837dae3128.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyZWE2OWFmLWI5MGMtNDVkYy1hZTI3LTYxMTY0OWJkNmI2YlwvZGY2NWdveS04ODM2MjJjMS1jMTIwLTQzMGMtYjdlMy0yNzgzN2RhZTMxMjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.A3tvO9QZ8n7mRjpMvD0ZaGPnC-FrBw3TPpkDUbbFnBI" group-title="✅ SBT",SBT PARANA HD
http://lexus.hubns.top:80/castor777/125020917/1257593.m3u8
#EXTINF:-1 tvg-id="SBTNacional.br" tvg-name="SBT PARANA FHD" tvg-logo="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2ea69af-b90c-45dc-ae27-611649bd6b6b/df65goy-883622c1-c120-430c-b7e3-27837dae3128.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyZWE2OWFmLWI5MGMtNDVkYy1hZTI3LTYxMTY0OWJkNmI2YlwvZGY2NWdveS04ODM2MjJjMS1jMTIwLTQzMGMtYjdlMy0yNzgzN2RhZTMxMjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.A3tvO9QZ8n7mRjpMvD0ZaGPnC-FrBw3TPpkDUbbFnBI" group-title="✅ SBT",SBT PARANA FHD
http://lexus.hubns.top:80/castor777/125020917/1257592.m3u8
#EXTINF:-1 tvg-id="SBTNacional.br" tvg-name="SBT MINAS FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/1024px-Logotipo_do_SBT.svg.png" group-title="✅ SBT",SBT MINAS FHD
http://lexus.hubns.top:80/castor777/125020917/1257512.m3u8
#EXTINF:-1 tvg-id="SBTNacional.br" tvg-name="TV TAMBAU SBT [1080 PB]" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/8/86/Logotipo_da_TV_Tamba%C3%BA.jpg" group-title="✅ SBT",TV TAMBAU SBT [1080 PB]
http://lexus.hubns.top:80/castor777/125020917/1257404.m3u8
#EXTINF:-1 tvg-id="SBTNacional.br" tvg-name="SBT TV TAMBAU FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/8/86/Logotipo_da_TV_Tamba%C3%BA.jpg" group-title="✅ SBT",SBT TV TAMBAU FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257193.m3u8
#EXTINF:-1 tvg-id="SBTNacional.br" tvg-name="SBT TV JANGADEIRO CEARÁ FHD H264" tvg-logo="https://www.cxtv.com.br/img/Tvs/Logo/webp-l/dffe68ccd34327b849583770cd368d0c.webp" group-title="✅ SBT",SBT TV JANGADEIRO CEARÁ FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257192.m3u8
#EXTINF:-1 tvg-id="br#sbt-tv-ponta-verde-hd" tvg-name="SBT TV CIDADE VERDE FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/c/cf/Logotipo_TV_Cidade_Verde.png" group-title="✅ SBT",SBT TV CIDADE VERDE FHD
http://lexus.hubns.top:80/castor777/125020917/1257191.m3u8
#EXTINF:-1 tvg-id="br#sbt-s-o-paulo" tvg-name="SBT SP FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/1024px-Logotipo_do_SBT.svg.png" group-title="✅ SBT",SBT SP FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257190.m3u8
#EXTINF:-1 tvg-id="SBTNacional.br" tvg-name="SBT HD [LOCAL RN]" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/1024px-Logotipo_do_SBT.svg.png" group-title="✅ SBT",SBT HD [LOCAL RN]
http://lexus.hubns.top:80/castor777/125020917/1257187.m3u8
#EXTINF:-1 tvg-id="SBTNacional.br" tvg-name="SBT HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/1024px-Logotipo_do_SBT.svg.png" group-title="✅ SBT",SBT HD
http://lexus.hubns.top:80/castor777/125020917/1257186.m3u8
#EXTINF:-1 tvg-id="br#sbt-goiania-tv-serra-dourada" tvg-name="SBT GOIANIA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/1024px-Logotipo_do_SBT.svg.png" group-title="✅ SBT",SBT GOIANIA HD
http://lexus.hubns.top:80/castor777/125020917/1257185.m3u8
#EXTINF:-1 tvg-id="SBTRio.br" tvg-name="SBT RJ FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/1024px-Logotipo_do_SBT.svg.png" group-title="✅ SBT",SBT RJ FHD
http://lexus.hubns.top:80/castor777/125020917/1257184.m3u8
#EXTINF:-1 tvg-id="SBTNacional.br" tvg-name="SBT FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/1024px-Logotipo_do_SBT.svg.png" group-title="✅ SBT",SBT FHD
http://lexus.hubns.top:80/castor777/125020917/1257183.m3u8
#EXTINF:-1 tvg-id="SBTNacional.br" tvg-name="SBT" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/1024px-Logotipo_do_SBT.svg.png" group-title="✅ SBT",SBT
http://lexus.hubns.top:80/castor777/125020917/1257182.m3u8
#EXTINF:-1 tvg-id="" tvg-name="A&E FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/ae.png" group-title="✅ FONTE ALTERNATIVA",A&E FHD
http://lexus.hubns.top:80/castor777/125020917/2687104.m3u8
#EXTINF:-1 tvg-id="" tvg-name="A&E HD" tvg-logo="http://www.fontedecanais.app/logos/canais/ae.png" group-title="✅ FONTE ALTERNATIVA",A&E HD
http://lexus.hubns.top:80/castor777/125020917/2687105.m3u8
#EXTINF:-1 tvg-id="" tvg-name="A&E SD" tvg-logo="http://www.fontedecanais.app/logos/canais/ae.png" group-title="✅ FONTE ALTERNATIVA",A&E SD
http://lexus.hubns.top:80/castor777/125020917/2687106.m3u8
#EXTINF:-1 tvg-id="" tvg-name="BIS FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/bis.png" group-title="✅ FONTE ALTERNATIVA",BIS FHD
http://lexus.hubns.top:80/castor777/125020917/2687107.m3u8
#EXTINF:-1 tvg-id="" tvg-name="BIS HD" tvg-logo="http://www.fontedecanais.app/logos/canais/bis.png" group-title="✅ FONTE ALTERNATIVA",BIS HD
http://lexus.hubns.top:80/castor777/125020917/2687108.m3u8
#EXTINF:-1 tvg-id="" tvg-name="BIS SD" tvg-logo="http://www.fontedecanais.app/logos/canais/bis.png" group-title="✅ FONTE ALTERNATIVA",BIS SD
http://lexus.hubns.top:80/castor777/125020917/2687109.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cine Canal FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/cinecanal.png" group-title="✅ FONTE ALTERNATIVA",Cine Canal FHD
http://lexus.hubns.top:80/castor777/125020917/2687110.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cine Canal HD" tvg-logo="http://www.fontedecanais.app/logos/canais/cinecanal.png" group-title="✅ FONTE ALTERNATIVA",Cine Canal HD
http://lexus.hubns.top:80/castor777/125020917/2687111.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cine Canal SD" tvg-logo="http://www.fontedecanais.app/logos/canais/cinecanal.png" group-title="✅ FONTE ALTERNATIVA",Cine Canal SD
http://lexus.hubns.top:80/castor777/125020917/2687112.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Comedy Central FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/comedycentral.png" group-title="✅ FONTE ALTERNATIVA",Comedy Central FHD
http://lexus.hubns.top:80/castor777/125020917/2687113.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Comedy Central HD" tvg-logo="http://www.fontedecanais.app/logos/canais/comedycentral.png" group-title="✅ FONTE ALTERNATIVA",Comedy Central HD
http://lexus.hubns.top:80/castor777/125020917/2687114.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Comedy Central SD" tvg-logo="http://www.fontedecanais.app/logos/canais/comedycentral.png" group-title="✅ FONTE ALTERNATIVA",Comedy Central SD
http://lexus.hubns.top:80/castor777/125020917/2687115.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery H&H FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoveryhh.png" group-title="✅ FONTE ALTERNATIVA",Discovery H&H FHD
http://lexus.hubns.top:80/castor777/125020917/2687116.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery H&H HD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoveryhh.png" group-title="✅ FONTE ALTERNATIVA",Discovery H&H HD
http://lexus.hubns.top:80/castor777/125020917/2687117.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery H&H SD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoveryhh.png" group-title="✅ FONTE ALTERNATIVA",Discovery H&H SD
http://lexus.hubns.top:80/castor777/125020917/2687118.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Turbo FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoveryturbo.png" group-title="✅ FONTE ALTERNATIVA",Discovery Turbo FHD
http://lexus.hubns.top:80/castor777/125020917/2687119.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Turbo HD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoveryturbo.png" group-title="✅ FONTE ALTERNATIVA",Discovery Turbo HD
http://lexus.hubns.top:80/castor777/125020917/2687120.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Turbo SD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoveryturbo.png" group-title="✅ FONTE ALTERNATIVA",Discovery Turbo SD
http://lexus.hubns.top:80/castor777/125020917/2687121.m3u8
#EXTINF:-1 tvg-id="" tvg-name="E! FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/e.png" group-title="✅ FONTE ALTERNATIVA",E! FHD
http://lexus.hubns.top:80/castor777/125020917/2687122.m3u8
#EXTINF:-1 tvg-id="" tvg-name="E! HD" tvg-logo="http://www.fontedecanais.app/logos/canais/e.png" group-title="✅ FONTE ALTERNATIVA",E! HD
http://lexus.hubns.top:80/castor777/125020917/2687123.m3u8
#EXTINF:-1 tvg-id="" tvg-name="E! SD" tvg-logo="http://www.fontedecanais.app/logos/canais/e.png" group-title="✅ FONTE ALTERNATIVA",E! SD
http://lexus.hubns.top:80/castor777/125020917/2687124.m3u8
#EXTINF:-1 tvg-id="" tvg-name="FishTV FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/fishtv.png" group-title="✅ FONTE ALTERNATIVA",FishTV FHD
http://lexus.hubns.top:80/castor777/125020917/2687125.m3u8
#EXTINF:-1 tvg-id="" tvg-name="FishTV HD" tvg-logo="http://www.fontedecanais.app/logos/canais/fishtv.png" group-title="✅ FONTE ALTERNATIVA",FishTV HD
http://lexus.hubns.top:80/castor777/125020917/2687126.m3u8
#EXTINF:-1 tvg-id="" tvg-name="FishTV SD" tvg-logo="http://www.fontedecanais.app/logos/canais/fishtv.png" group-title="✅ FONTE ALTERNATIVA",FishTV SD
http://lexus.hubns.top:80/castor777/125020917/2687127.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Food Network FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/foodnetwork.png" group-title="✅ FONTE ALTERNATIVA",Food Network FHD
http://lexus.hubns.top:80/castor777/125020917/2687128.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Food Network HD" tvg-logo="http://www.fontedecanais.app/logos/canais/foodnetwork.png" group-title="✅ FONTE ALTERNATIVA",Food Network HD
http://lexus.hubns.top:80/castor777/125020917/2687129.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Food Network SD" tvg-logo="http://www.fontedecanais.app/logos/canais/foodnetwork.png" group-title="✅ FONTE ALTERNATIVA",Food Network SD
http://lexus.hubns.top:80/castor777/125020917/2687130.m3u8
#EXTINF:-1 tvg-id="" tvg-name="GNT FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/gnt.png" group-title="✅ FONTE ALTERNATIVA",GNT FHD
http://lexus.hubns.top:80/castor777/125020917/2687131.m3u8
#EXTINF:-1 tvg-id="" tvg-name="GNT HD" tvg-logo="http://www.fontedecanais.app/logos/canais/gnt.png" group-title="✅ FONTE ALTERNATIVA",GNT HD
http://lexus.hubns.top:80/castor777/125020917/2687132.m3u8
#EXTINF:-1 tvg-id="" tvg-name="GNT SD" tvg-logo="http://www.fontedecanais.app/logos/canais/gnt.png" group-title="✅ FONTE ALTERNATIVA",GNT SD
http://lexus.hubns.top:80/castor777/125020917/2687133.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Lifetime FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/lifetime.png" group-title="✅ FONTE ALTERNATIVA",Lifetime FHD
http://lexus.hubns.top:80/castor777/125020917/2687134.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Lifetime HD" tvg-logo="http://www.fontedecanais.app/logos/canais/lifetime.png" group-title="✅ FONTE ALTERNATIVA",Lifetime HD
http://lexus.hubns.top:80/castor777/125020917/2687135.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Lifetime SD" tvg-logo="http://www.fontedecanais.app/logos/canais/lifetime.png" group-title="✅ FONTE ALTERNATIVA",Lifetime SD
http://lexus.hubns.top:80/castor777/125020917/2687136.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Modo Viagem FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/modoviagem.png" group-title="✅ FONTE ALTERNATIVA",Modo Viagem FHD
http://lexus.hubns.top:80/castor777/125020917/2687137.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Modo Viagem HD" tvg-logo="http://www.fontedecanais.app/logos/canais/modoviagem.png" group-title="✅ FONTE ALTERNATIVA",Modo Viagem HD
http://lexus.hubns.top:80/castor777/125020917/2687138.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Modo Viagem SD" tvg-logo="http://www.fontedecanais.app/logos/canais/modoviagem.png" group-title="✅ FONTE ALTERNATIVA",Modo Viagem SD
http://lexus.hubns.top:80/castor777/125020917/2687139.m3u8
#EXTINF:-1 tvg-id="" tvg-name="MTV FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/mtv.png" group-title="✅ FONTE ALTERNATIVA",MTV FHD
http://lexus.hubns.top:80/castor777/125020917/2687140.m3u8
#EXTINF:-1 tvg-id="" tvg-name="MTV HD" tvg-logo="http://www.fontedecanais.app/logos/canais/mtv.png" group-title="✅ FONTE ALTERNATIVA",MTV HD
http://lexus.hubns.top:80/castor777/125020917/2687141.m3u8
#EXTINF:-1 tvg-id="" tvg-name="MTV SD" tvg-logo="http://www.fontedecanais.app/logos/canais/mtv.png" group-title="✅ FONTE ALTERNATIVA",MTV SD
http://lexus.hubns.top:80/castor777/125020917/2687142.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Trace Brasil FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/tracebrasil.png" group-title="✅ FONTE ALTERNATIVA",Trace Brasil FHD
http://lexus.hubns.top:80/castor777/125020917/2687143.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Trace Brasil HD" tvg-logo="http://www.fontedecanais.app/logos/canais/tracebrasil.png" group-title="✅ FONTE ALTERNATIVA",Trace Brasil HD
http://lexus.hubns.top:80/castor777/125020917/2687144.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Trace Brasil SD" tvg-logo="http://www.fontedecanais.app/logos/canais/tracebrasil.png" group-title="✅ FONTE ALTERNATIVA",Trace Brasil SD
http://lexus.hubns.top:80/castor777/125020917/2687145.m3u8
#EXTINF:-1 tvg-id="" tvg-name="MTV Live FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/mtvlive.png" group-title="✅ FONTE ALTERNATIVA",MTV Live FHD
http://lexus.hubns.top:80/castor777/125020917/2687146.m3u8
#EXTINF:-1 tvg-id="" tvg-name="MTV Live HD" tvg-logo="http://www.fontedecanais.app/logos/canais/mtvlive.png" group-title="✅ FONTE ALTERNATIVA",MTV Live HD
http://lexus.hubns.top:80/castor777/125020917/2687147.m3u8
#EXTINF:-1 tvg-id="" tvg-name="MTV Live SD" tvg-logo="http://www.fontedecanais.app/logos/canais/mtvlive.png" group-title="✅ FONTE ALTERNATIVA",MTV Live SD
http://lexus.hubns.top:80/castor777/125020917/2687148.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Multishow FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/multishow.png" group-title="✅ FONTE ALTERNATIVA",Multishow FHD
http://lexus.hubns.top:80/castor777/125020917/2687149.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Multishow HD" tvg-logo="http://www.fontedecanais.app/logos/canais/multishow.png" group-title="✅ FONTE ALTERNATIVA",Multishow HD
http://lexus.hubns.top:80/castor777/125020917/2687150.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Multishow SD" tvg-logo="http://www.fontedecanais.app/logos/canais/multishow.png" group-title="✅ FONTE ALTERNATIVA",Multishow SD
http://lexus.hubns.top:80/castor777/125020917/2687151.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Off FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/off.png" group-title="✅ FONTE ALTERNATIVA",Off FHD
http://lexus.hubns.top:80/castor777/125020917/2687152.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Off HD" tvg-logo="http://www.fontedecanais.app/logos/canais/off.png" group-title="✅ FONTE ALTERNATIVA",Off HD
http://lexus.hubns.top:80/castor777/125020917/2687153.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Off SD" tvg-logo="http://www.fontedecanais.app/logos/canais/off.png" group-title="✅ FONTE ALTERNATIVA",Off SD
http://lexus.hubns.top:80/castor777/125020917/2687154.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TLC FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/tlc.png" group-title="✅ FONTE ALTERNATIVA",TLC FHD
http://lexus.hubns.top:80/castor777/125020917/2687155.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TLC HD" tvg-logo="http://www.fontedecanais.app/logos/canais/tlc.png" group-title="✅ FONTE ALTERNATIVA",TLC HD
http://lexus.hubns.top:80/castor777/125020917/2687156.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TLC SD" tvg-logo="http://www.fontedecanais.app/logos/canais/tlc.png" group-title="✅ FONTE ALTERNATIVA",TLC SD
http://lexus.hubns.top:80/castor777/125020917/2687157.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Travel Box Brazil FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/travelboxbrazil.png" group-title="✅ FONTE ALTERNATIVA",Travel Box Brazil FHD
http://lexus.hubns.top:80/castor777/125020917/2687158.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Travel Box Brazil HD" tvg-logo="http://www.fontedecanais.app/logos/canais/travelboxbrazil.png" group-title="✅ FONTE ALTERNATIVA",Travel Box Brazil HD
http://lexus.hubns.top:80/castor777/125020917/2687159.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Travel Box Brazil SD" tvg-logo="http://www.fontedecanais.app/logos/canais/travelboxbrazil.png" group-title="✅ FONTE ALTERNATIVA",Travel Box Brazil SD
http://lexus.hubns.top:80/castor777/125020917/2687160.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Adult Swim FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/adultswim.png" group-title="✅ FONTE ALTERNATIVA",Adult Swim FHD
http://lexus.hubns.top:80/castor777/125020917/2687161.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Adult Swim HD" tvg-logo="http://www.fontedecanais.app/logos/canais/adultswim.png" group-title="✅ FONTE ALTERNATIVA",Adult Swim HD
http://lexus.hubns.top:80/castor777/125020917/2687162.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Adult Swim SD" tvg-logo="http://www.fontedecanais.app/logos/canais/adultswim.png" group-title="✅ FONTE ALTERNATIVA",Adult Swim SD
http://lexus.hubns.top:80/castor777/125020917/2687163.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Viva FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/viva.png" group-title="✅ FONTE ALTERNATIVA",Viva FHD
http://lexus.hubns.top:80/castor777/125020917/2687164.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Viva HD" tvg-logo="http://www.fontedecanais.app/logos/canais/viva.png" group-title="✅ FONTE ALTERNATIVA",Viva HD
http://lexus.hubns.top:80/castor777/125020917/2687165.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Viva SD" tvg-logo="http://www.fontedecanais.app/logos/canais/viva.png" group-title="✅ FONTE ALTERNATIVA",Viva SD
http://lexus.hubns.top:80/castor777/125020917/2687166.m3u8
#EXTINF:-1 tvg-id="" tvg-name="WooHoo FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/woohoo.png" group-title="✅ FONTE ALTERNATIVA",WooHoo FHD
http://lexus.hubns.top:80/castor777/125020917/2687167.m3u8
#EXTINF:-1 tvg-id="" tvg-name="WooHoo HD" tvg-logo="http://www.fontedecanais.app/logos/canais/woohoo.png" group-title="✅ FONTE ALTERNATIVA",WooHoo HD
http://lexus.hubns.top:80/castor777/125020917/2687168.m3u8
#EXTINF:-1 tvg-id="" tvg-name="WooHoo SD" tvg-logo="http://www.fontedecanais.app/logos/canais/woohoo.png" group-title="✅ FONTE ALTERNATIVA",WooHoo SD
http://lexus.hubns.top:80/castor777/125020917/2687169.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ChefTV FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/cheftv.png" group-title="✅ FONTE ALTERNATIVA",ChefTV FHD
http://lexus.hubns.top:80/castor777/125020917/2687170.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ChefTV HD" tvg-logo="http://www.fontedecanais.app/logos/canais/cheftv.png" group-title="✅ FONTE ALTERNATIVA",ChefTV HD
http://lexus.hubns.top:80/castor777/125020917/2687171.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ChefTV SD" tvg-logo="http://www.fontedecanais.app/logos/canais/cheftv.png" group-title="✅ FONTE ALTERNATIVA",ChefTV SD
http://lexus.hubns.top:80/castor777/125020917/2687172.m3u8
#EXTINF:-1 tvg-id="" tvg-name="AMC FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/amc.png" group-title="✅ FONTE ALTERNATIVA",AMC FHD
http://lexus.hubns.top:80/castor777/125020917/2687173.m3u8
#EXTINF:-1 tvg-id="" tvg-name="AMC HD" tvg-logo="http://www.fontedecanais.app/logos/canais/amc.png" group-title="✅ FONTE ALTERNATIVA",AMC HD
http://lexus.hubns.top:80/castor777/125020917/2687174.m3u8
#EXTINF:-1 tvg-id="" tvg-name="AMC SD" tvg-logo="http://www.fontedecanais.app/logos/canais/amc.png" group-title="✅ FONTE ALTERNATIVA",AMC SD
http://lexus.hubns.top:80/castor777/125020917/2687175.m3u8
#EXTINF:-1 tvg-id="" tvg-name="AXN FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/axn.png" group-title="✅ FONTE ALTERNATIVA",AXN FHD
http://lexus.hubns.top:80/castor777/125020917/2687176.m3u8
#EXTINF:-1 tvg-id="" tvg-name="AXN HD" tvg-logo="http://www.fontedecanais.app/logos/canais/axn.png" group-title="✅ FONTE ALTERNATIVA",AXN HD
http://lexus.hubns.top:80/castor777/125020917/2687177.m3u8
#EXTINF:-1 tvg-id="" tvg-name="AXN SD" tvg-logo="http://www.fontedecanais.app/logos/canais/axn.png" group-title="✅ FONTE ALTERNATIVA",AXN SD
http://lexus.hubns.top:80/castor777/125020917/2687178.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Canal Brasil FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/canalbrasil.png" group-title="✅ FONTE ALTERNATIVA",Canal Brasil FHD
http://lexus.hubns.top:80/castor777/125020917/2687179.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Canal Brasil HD" tvg-logo="http://www.fontedecanais.app/logos/canais/canalbrasil.png" group-title="✅ FONTE ALTERNATIVA",Canal Brasil HD
http://lexus.hubns.top:80/castor777/125020917/2687180.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Canal Brasil SD" tvg-logo="http://www.fontedecanais.app/logos/canais/canalbrasil.png" group-title="✅ FONTE ALTERNATIVA",Canal Brasil SD
http://lexus.hubns.top:80/castor777/125020917/2687181.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cinemax FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/cinemax.png" group-title="✅ FONTE ALTERNATIVA",Cinemax FHD
http://lexus.hubns.top:80/castor777/125020917/2687182.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cinemax HD" tvg-logo="http://www.fontedecanais.app/logos/canais/cinemax.png" group-title="✅ FONTE ALTERNATIVA",Cinemax HD
http://lexus.hubns.top:80/castor777/125020917/2687183.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cinemax SD" tvg-logo="http://www.fontedecanais.app/logos/canais/cinemax.png" group-title="✅ FONTE ALTERNATIVA",Cinemax SD
http://lexus.hubns.top:80/castor777/125020917/2687184.m3u8
#EXTINF:-1 tvg-id="" tvg-name="FX FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/fx.png" group-title="✅ FONTE ALTERNATIVA",FX FHD
http://lexus.hubns.top:80/castor777/125020917/2687185.m3u8
#EXTINF:-1 tvg-id="" tvg-name="FX HD" tvg-logo="http://www.fontedecanais.app/logos/canais/fx.png" group-title="✅ FONTE ALTERNATIVA",FX HD
http://lexus.hubns.top:80/castor777/125020917/2687186.m3u8
#EXTINF:-1 tvg-id="" tvg-name="FX SD" tvg-logo="http://www.fontedecanais.app/logos/canais/fx.png" group-title="✅ FONTE ALTERNATIVA",FX SD
http://lexus.hubns.top:80/castor777/125020917/2687187.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Megapix FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/megapix.png" group-title="✅ FONTE ALTERNATIVA",Megapix FHD
http://lexus.hubns.top:80/castor777/125020917/2687188.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Megapix HD" tvg-logo="http://www.fontedecanais.app/logos/canais/megapix.png" group-title="✅ FONTE ALTERNATIVA",Megapix HD
http://lexus.hubns.top:80/castor777/125020917/2687189.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Megapix SD" tvg-logo="http://www.fontedecanais.app/logos/canais/megapix.png" group-title="✅ FONTE ALTERNATIVA",Megapix SD
http://lexus.hubns.top:80/castor777/125020917/2687190.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Paramount Network FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/paramountchannel.png" group-title="✅ FONTE ALTERNATIVA",Paramount Network FHD
http://lexus.hubns.top:80/castor777/125020917/2687191.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Paramount Network HD" tvg-logo="http://www.fontedecanais.app/logos/canais/paramountchannel.png" group-title="✅ FONTE ALTERNATIVA",Paramount Network HD
http://lexus.hubns.top:80/castor777/125020917/2687192.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Paramount Network SD" tvg-logo="http://www.fontedecanais.app/logos/canais/paramountchannel.png" group-title="✅ FONTE ALTERNATIVA",Paramount Network SD
http://lexus.hubns.top:80/castor777/125020917/2687193.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Sony Channel FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/sonychannel.png" group-title="✅ FONTE ALTERNATIVA",Sony Channel FHD
http://lexus.hubns.top:80/castor777/125020917/2687194.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Sony Channel HD" tvg-logo="http://www.fontedecanais.app/logos/canais/sonychannel.png" group-title="✅ FONTE ALTERNATIVA",Sony Channel HD
http://lexus.hubns.top:80/castor777/125020917/2687195.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Sony Channel SD" tvg-logo="http://www.fontedecanais.app/logos/canais/sonychannel.png" group-title="✅ FONTE ALTERNATIVA",Sony Channel SD
http://lexus.hubns.top:80/castor777/125020917/2687196.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Sony Movies FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/sonymovies.png" group-title="✅ FONTE ALTERNATIVA",Sony Movies FHD
http://lexus.hubns.top:80/castor777/125020917/2687197.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Sony Movies HD" tvg-logo="http://www.fontedecanais.app/logos/canais/sonymovies.png" group-title="✅ FONTE ALTERNATIVA",Sony Movies HD
http://lexus.hubns.top:80/castor777/125020917/2687198.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Sony Movies SD" tvg-logo="http://www.fontedecanais.app/logos/canais/sonymovies.png" group-title="✅ FONTE ALTERNATIVA",Sony Movies SD
http://lexus.hubns.top:80/castor777/125020917/2687199.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Space FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/space.png" group-title="✅ FONTE ALTERNATIVA",Space FHD
http://lexus.hubns.top:80/castor777/125020917/2687200.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Space HD" tvg-logo="http://www.fontedecanais.app/logos/canais/space.png" group-title="✅ FONTE ALTERNATIVA",Space HD
http://lexus.hubns.top:80/castor777/125020917/2687201.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Space SD" tvg-logo="http://www.fontedecanais.app/logos/canais/space.png" group-title="✅ FONTE ALTERNATIVA",Space SD
http://lexus.hubns.top:80/castor777/125020917/2687202.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Star Channel FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/starchannel.png" group-title="✅ FONTE ALTERNATIVA",Star Channel FHD
http://lexus.hubns.top:80/castor777/125020917/2687203.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Star Channel HD" tvg-logo="http://www.fontedecanais.app/logos/canais/starchannel.png" group-title="✅ FONTE ALTERNATIVA",Star Channel HD
http://lexus.hubns.top:80/castor777/125020917/2687204.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Star Channel SD" tvg-logo="http://www.fontedecanais.app/logos/canais/starchannel.png" group-title="✅ FONTE ALTERNATIVA",Star Channel SD
http://lexus.hubns.top:80/castor777/125020917/2687205.m3u8
#EXTINF:-1 tvg-id="" tvg-name="USA FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/usa.png" group-title="✅ FONTE ALTERNATIVA",USA FHD
http://lexus.hubns.top:80/castor777/125020917/2687206.m3u8
#EXTINF:-1 tvg-id="" tvg-name="USA HD" tvg-logo="http://www.fontedecanais.app/logos/canais/usa.png" group-title="✅ FONTE ALTERNATIVA",USA HD
http://lexus.hubns.top:80/castor777/125020917/2687207.m3u8
#EXTINF:-1 tvg-id="" tvg-name="USA SD" tvg-logo="http://www.fontedecanais.app/logos/canais/usa.png" group-title="✅ FONTE ALTERNATIVA",USA SD
http://lexus.hubns.top:80/castor777/125020917/2687208.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TNT Novelas FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/tntnovelas.png" group-title="✅ FONTE ALTERNATIVA",TNT Novelas FHD
http://lexus.hubns.top:80/castor777/125020917/2687209.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TNT Novelas HD" tvg-logo="http://www.fontedecanais.app/logos/canais/tntnovelas.png" group-title="✅ FONTE ALTERNATIVA",TNT Novelas HD
http://lexus.hubns.top:80/castor777/125020917/2687210.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TNT Novelas SD" tvg-logo="http://www.fontedecanais.app/logos/canais/tntnovelas.png" group-title="✅ FONTE ALTERNATIVA",TNT Novelas SD
http://lexus.hubns.top:80/castor777/125020917/2687211.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TNT FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/tnt.png" group-title="✅ FONTE ALTERNATIVA",TNT FHD
http://lexus.hubns.top:80/castor777/125020917/2687212.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TNT HD" tvg-logo="http://www.fontedecanais.app/logos/canais/tnt.png" group-title="✅ FONTE ALTERNATIVA",TNT HD
http://lexus.hubns.top:80/castor777/125020917/2687213.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TNT SD" tvg-logo="http://www.fontedecanais.app/logos/canais/tnt.png" group-title="✅ FONTE ALTERNATIVA",TNT SD
http://lexus.hubns.top:80/castor777/125020917/2687214.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TNT Séries FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/tntseries.png" group-title="✅ FONTE ALTERNATIVA",TNT Séries FHD
http://lexus.hubns.top:80/castor777/125020917/2687215.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TNT Séries HD" tvg-logo="http://www.fontedecanais.app/logos/canais/tntseries.png" group-title="✅ FONTE ALTERNATIVA",TNT Séries HD
http://lexus.hubns.top:80/castor777/125020917/2687216.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TNT Séries SD" tvg-logo="http://www.fontedecanais.app/logos/canais/tntseries.png" group-title="✅ FONTE ALTERNATIVA",TNT Séries SD
http://lexus.hubns.top:80/castor777/125020917/2687217.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Universal TV FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/universaltv.png" group-title="✅ FONTE ALTERNATIVA",Universal TV FHD
http://lexus.hubns.top:80/castor777/125020917/2687218.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Universal TV HD" tvg-logo="http://www.fontedecanais.app/logos/canais/universaltv.png" group-title="✅ FONTE ALTERNATIVA",Universal TV HD
http://lexus.hubns.top:80/castor777/125020917/2687219.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Universal TV SD" tvg-logo="http://www.fontedecanais.app/logos/canais/universaltv.png" group-title="✅ FONTE ALTERNATIVA",Universal TV SD
http://lexus.hubns.top:80/castor777/125020917/2687220.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Studio Universal FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/studiouniversal.png" group-title="✅ FONTE ALTERNATIVA",Studio Universal FHD
http://lexus.hubns.top:80/castor777/125020917/2687221.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Studio Universal HD" tvg-logo="http://www.fontedecanais.app/logos/canais/studiouniversal.png" group-title="✅ FONTE ALTERNATIVA",Studio Universal HD
http://lexus.hubns.top:80/castor777/125020917/2687222.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Studio Universal SD" tvg-logo="http://www.fontedecanais.app/logos/canais/studiouniversal.png" group-title="✅ FONTE ALTERNATIVA",Studio Universal SD
http://lexus.hubns.top:80/castor777/125020917/2687223.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Warner Channel FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/warnerchannel.png" group-title="✅ FONTE ALTERNATIVA",Warner Channel FHD
http://lexus.hubns.top:80/castor777/125020917/2687224.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Warner Channel HD" tvg-logo="http://www.fontedecanais.app/logos/canais/warnerchannel.png" group-title="✅ FONTE ALTERNATIVA",Warner Channel HD
http://lexus.hubns.top:80/castor777/125020917/2687225.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Warner Channel SD" tvg-logo="http://www.fontedecanais.app/logos/canais/warnerchannel.png" group-title="✅ FONTE ALTERNATIVA",Warner Channel SD
http://lexus.hubns.top:80/castor777/125020917/2687226.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TCM FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/tcm.png" group-title="✅ FONTE ALTERNATIVA",TCM FHD
http://lexus.hubns.top:80/castor777/125020917/2687227.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TCM HD" tvg-logo="http://www.fontedecanais.app/logos/canais/tcm.png" group-title="✅ FONTE ALTERNATIVA",TCM HD
http://lexus.hubns.top:80/castor777/125020917/2687228.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TCM SD" tvg-logo="http://www.fontedecanais.app/logos/canais/tcm.png" group-title="✅ FONTE ALTERNATIVA",TCM SD
http://lexus.hubns.top:80/castor777/125020917/2687229.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Film & Arts FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/filmarts.png" group-title="✅ FONTE ALTERNATIVA",Film & Arts FHD
http://lexus.hubns.top:80/castor777/125020917/2687230.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Film & Arts HD" tvg-logo="http://www.fontedecanais.app/logos/canais/filmarts.png" group-title="✅ FONTE ALTERNATIVA",Film & Arts HD
http://lexus.hubns.top:80/castor777/125020917/2687231.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Film & Arts SD" tvg-logo="http://www.fontedecanais.app/logos/canais/filmarts.png" group-title="✅ FONTE ALTERNATIVA",Film & Arts SD
http://lexus.hubns.top:80/castor777/125020917/2687232.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbo.png" group-title="✅ FONTE ALTERNATIVA",HBO FHD
http://lexus.hubns.top:80/castor777/125020917/2687233.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO HD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbo.png" group-title="✅ FONTE ALTERNATIVA",HBO HD
http://lexus.hubns.top:80/castor777/125020917/2687234.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO SD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbo.png" group-title="✅ FONTE ALTERNATIVA",HBO SD
http://lexus.hubns.top:80/castor777/125020917/2687235.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO 2 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbo2.png" group-title="✅ FONTE ALTERNATIVA",HBO 2 FHD
http://lexus.hubns.top:80/castor777/125020917/2687236.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO 2 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbo2.png" group-title="✅ FONTE ALTERNATIVA",HBO 2 HD
http://lexus.hubns.top:80/castor777/125020917/2687237.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO 2 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbo2.png" group-title="✅ FONTE ALTERNATIVA",HBO 2 SD
http://lexus.hubns.top:80/castor777/125020917/2687238.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Family FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbofamily.png" group-title="✅ FONTE ALTERNATIVA",HBO Family FHD
http://lexus.hubns.top:80/castor777/125020917/2687239.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Family HD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbofamily.png" group-title="✅ FONTE ALTERNATIVA",HBO Family HD
http://lexus.hubns.top:80/castor777/125020917/2687240.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Family SD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbofamily.png" group-title="✅ FONTE ALTERNATIVA",HBO Family SD
http://lexus.hubns.top:80/castor777/125020917/2687241.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Mundi FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbomundi.png" group-title="✅ FONTE ALTERNATIVA",HBO Mundi FHD
http://lexus.hubns.top:80/castor777/125020917/2687242.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Mundi HD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbomundi.png" group-title="✅ FONTE ALTERNATIVA",HBO Mundi HD
http://lexus.hubns.top:80/castor777/125020917/2687243.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Mundi SD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbomundi.png" group-title="✅ FONTE ALTERNATIVA",HBO Mundi SD
http://lexus.hubns.top:80/castor777/125020917/2687244.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Plus FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/hboplus.png" group-title="✅ FONTE ALTERNATIVA",HBO Plus FHD
http://lexus.hubns.top:80/castor777/125020917/2687245.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Plus HD" tvg-logo="http://www.fontedecanais.app/logos/canais/hboplus.png" group-title="✅ FONTE ALTERNATIVA",HBO Plus HD
http://lexus.hubns.top:80/castor777/125020917/2687246.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Plus SD" tvg-logo="http://www.fontedecanais.app/logos/canais/hboplus.png" group-title="✅ FONTE ALTERNATIVA",HBO Plus SD
http://lexus.hubns.top:80/castor777/125020917/2687247.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Pop FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbopop.png" group-title="✅ FONTE ALTERNATIVA",HBO Pop FHD
http://lexus.hubns.top:80/castor777/125020917/2687248.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Pop HD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbopop.png" group-title="✅ FONTE ALTERNATIVA",HBO Pop HD
http://lexus.hubns.top:80/castor777/125020917/2687249.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Pop SD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbopop.png" group-title="✅ FONTE ALTERNATIVA",HBO Pop SD
http://lexus.hubns.top:80/castor777/125020917/2687250.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Signature FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbosignature.png" group-title="✅ FONTE ALTERNATIVA",HBO Signature FHD
http://lexus.hubns.top:80/castor777/125020917/2687251.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Signature HD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbosignature.png" group-title="✅ FONTE ALTERNATIVA",HBO Signature HD
http://lexus.hubns.top:80/castor777/125020917/2687252.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Signature SD" tvg-logo="http://www.fontedecanais.app/logos/canais/hbosignature.png" group-title="✅ FONTE ALTERNATIVA",HBO Signature SD
http://lexus.hubns.top:80/castor777/125020917/2687253.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Xtreme FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/hboxtreme.png" group-title="✅ FONTE ALTERNATIVA",HBO Xtreme FHD
http://lexus.hubns.top:80/castor777/125020917/2687254.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Xtreme HD" tvg-logo="http://www.fontedecanais.app/logos/canais/hboxtreme.png" group-title="✅ FONTE ALTERNATIVA",HBO Xtreme HD
http://lexus.hubns.top:80/castor777/125020917/2687255.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO Xtreme SD" tvg-logo="http://www.fontedecanais.app/logos/canais/hboxtreme.png" group-title="✅ FONTE ALTERNATIVA",HBO Xtreme SD
http://lexus.hubns.top:80/castor777/125020917/2687256.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Action FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecineaction.png" group-title="✅ FONTE ALTERNATIVA",Telecine Action FHD
http://lexus.hubns.top:80/castor777/125020917/2687257.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Action HD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecineaction.png" group-title="✅ FONTE ALTERNATIVA",Telecine Action HD
http://lexus.hubns.top:80/castor777/125020917/2687258.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Action SD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecineaction.png" group-title="✅ FONTE ALTERNATIVA",Telecine Action SD
http://lexus.hubns.top:80/castor777/125020917/2687259.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Cult FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinecult.png" group-title="✅ FONTE ALTERNATIVA",Telecine Cult FHD
http://lexus.hubns.top:80/castor777/125020917/2687260.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Cult HD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinecult.png" group-title="✅ FONTE ALTERNATIVA",Telecine Cult HD
http://lexus.hubns.top:80/castor777/125020917/2687261.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Cult SD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinecult.png" group-title="✅ FONTE ALTERNATIVA",Telecine Cult SD
http://lexus.hubns.top:80/castor777/125020917/2687262.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Fun FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinefun.png" group-title="✅ FONTE ALTERNATIVA",Telecine Fun FHD
http://lexus.hubns.top:80/castor777/125020917/2687263.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Fun HD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinefun.png" group-title="✅ FONTE ALTERNATIVA",Telecine Fun HD
http://lexus.hubns.top:80/castor777/125020917/2687264.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Fun SD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinefun.png" group-title="✅ FONTE ALTERNATIVA",Telecine Fun SD
http://lexus.hubns.top:80/castor777/125020917/2687265.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Pipoca FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinepipoca.png" group-title="✅ FONTE ALTERNATIVA",Telecine Pipoca FHD
http://lexus.hubns.top:80/castor777/125020917/2687266.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Pipoca HD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinepipoca.png" group-title="✅ FONTE ALTERNATIVA",Telecine Pipoca HD
http://lexus.hubns.top:80/castor777/125020917/2687267.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Pipoca SD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinepipoca.png" group-title="✅ FONTE ALTERNATIVA",Telecine Pipoca SD
http://lexus.hubns.top:80/castor777/125020917/2687268.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Premium FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinepremium.png" group-title="✅ FONTE ALTERNATIVA",Telecine Premium FHD
http://lexus.hubns.top:80/castor777/125020917/2687269.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Premium HD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinepremium.png" group-title="✅ FONTE ALTERNATIVA",Telecine Premium HD
http://lexus.hubns.top:80/castor777/125020917/2687270.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Premium SD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinepremium.png" group-title="✅ FONTE ALTERNATIVA",Telecine Premium SD
http://lexus.hubns.top:80/castor777/125020917/2687271.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Touch FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinetouch.png" group-title="✅ FONTE ALTERNATIVA",Telecine Touch FHD
http://lexus.hubns.top:80/castor777/125020917/2687272.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Touch HD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinetouch.png" group-title="✅ FONTE ALTERNATIVA",Telecine Touch HD
http://lexus.hubns.top:80/castor777/125020917/2687273.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Telecine Touch SD" tvg-logo="http://www.fontedecanais.app/logos/canais/telecinetouch.png" group-title="✅ FONTE ALTERNATIVA",Telecine Touch SD
http://lexus.hubns.top:80/castor777/125020917/2687274.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cine SKY 01" tvg-logo="http://www.fontedecanais.app/logos/canais/cinesky.png" group-title="✅ FONTE ALTERNATIVA",Cine SKY 01
http://lexus.hubns.top:80/castor777/125020917/2687275.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cine SKY 02" tvg-logo="http://www.fontedecanais.app/logos/canais/cinesky.png" group-title="✅ FONTE ALTERNATIVA",Cine SKY 02
http://lexus.hubns.top:80/castor777/125020917/2687276.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cine SKY 03" tvg-logo="http://www.fontedecanais.app/logos/canais/cinesky.png" group-title="✅ FONTE ALTERNATIVA",Cine SKY 03
http://lexus.hubns.top:80/castor777/125020917/2687277.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cine SKY 04" tvg-logo="http://www.fontedecanais.app/logos/canais/cinesky.png" group-title="✅ FONTE ALTERNATIVA",Cine SKY 04
http://lexus.hubns.top:80/castor777/125020917/2687278.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cine SKY 05" tvg-logo="http://www.fontedecanais.app/logos/canais/cinesky.png" group-title="✅ FONTE ALTERNATIVA",Cine SKY 05
http://lexus.hubns.top:80/castor777/125020917/2687279.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cine SKY 06" tvg-logo="http://www.fontedecanais.app/logos/canais/cinesky.png" group-title="✅ FONTE ALTERNATIVA",Cine SKY 06
http://lexus.hubns.top:80/castor777/125020917/2687280.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cine SKY 07" tvg-logo="http://www.fontedecanais.app/logos/canais/cinesky.png" group-title="✅ FONTE ALTERNATIVA",Cine SKY 07
http://lexus.hubns.top:80/castor777/125020917/2687281.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cine SKY 08" tvg-logo="http://www.fontedecanais.app/logos/canais/cinesky.png" group-title="✅ FONTE ALTERNATIVA",Cine SKY 08
http://lexus.hubns.top:80/castor777/125020917/2687282.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cine SKY 09" tvg-logo="http://www.fontedecanais.app/logos/canais/cinesky.png" group-title="✅ FONTE ALTERNATIVA",Cine SKY 09
http://lexus.hubns.top:80/castor777/125020917/2687283.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cine SKY 10" tvg-logo="http://www.fontedecanais.app/logos/canais/cinesky.png" group-title="✅ FONTE ALTERNATIVA",Cine SKY 10
http://lexus.hubns.top:80/castor777/125020917/2687284.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band SP FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/band.png" group-title="✅ FONTE ALTERNATIVA",Band SP FHD
http://lexus.hubns.top:80/castor777/125020917/2687285.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band SP HD" tvg-logo="http://www.fontedecanais.app/logos/canais/band.png" group-title="✅ FONTE ALTERNATIVA",Band SP HD
http://lexus.hubns.top:80/castor777/125020917/2687286.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band SP SD" tvg-logo="http://www.fontedecanais.app/logos/canais/band.png" group-title="✅ FONTE ALTERNATIVA",Band SP SD
http://lexus.hubns.top:80/castor777/125020917/2687287.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band RJ FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/band.png" group-title="✅ FONTE ALTERNATIVA",Band RJ FHD
http://lexus.hubns.top:80/castor777/125020917/2687288.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band RJ HD" tvg-logo="http://www.fontedecanais.app/logos/canais/band.png" group-title="✅ FONTE ALTERNATIVA",Band RJ HD
http://lexus.hubns.top:80/castor777/125020917/2687289.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band RJ SD" tvg-logo="http://www.fontedecanais.app/logos/canais/band.png" group-title="✅ FONTE ALTERNATIVA",Band RJ SD
http://lexus.hubns.top:80/castor777/125020917/2687290.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band MG FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/band.png" group-title="✅ FONTE ALTERNATIVA",Band MG FHD
http://lexus.hubns.top:80/castor777/125020917/2687291.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band MG HD" tvg-logo="http://www.fontedecanais.app/logos/canais/band.png" group-title="✅ FONTE ALTERNATIVA",Band MG HD
http://lexus.hubns.top:80/castor777/125020917/2687292.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band MG SD" tvg-logo="http://www.fontedecanais.app/logos/canais/band.png" group-title="✅ FONTE ALTERNATIVA",Band MG SD
http://lexus.hubns.top:80/castor777/125020917/2687293.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cultura FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/cultura.png" group-title="✅ FONTE ALTERNATIVA",Cultura FHD
http://lexus.hubns.top:80/castor777/125020917/2687294.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cultura HD" tvg-logo="http://www.fontedecanais.app/logos/canais/cultura.png" group-title="✅ FONTE ALTERNATIVA",Cultura HD
http://lexus.hubns.top:80/castor777/125020917/2687295.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cultura SD" tvg-logo="http://www.fontedecanais.app/logos/canais/cultura.png" group-title="✅ FONTE ALTERNATIVA",Cultura SD
http://lexus.hubns.top:80/castor777/125020917/2687296.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Futura FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/futura.png" group-title="✅ FONTE ALTERNATIVA",Futura FHD
http://lexus.hubns.top:80/castor777/125020917/2687297.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Futura HD" tvg-logo="http://www.fontedecanais.app/logos/canais/futura.png" group-title="✅ FONTE ALTERNATIVA",Futura HD
http://lexus.hubns.top:80/castor777/125020917/2687298.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Futura SD" tvg-logo="http://www.fontedecanais.app/logos/canais/futura.png" group-title="✅ FONTE ALTERNATIVA",Futura SD
http://lexus.hubns.top:80/castor777/125020917/2687299.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV SP FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV SP FHD
http://lexus.hubns.top:80/castor777/125020917/2687300.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV SP HD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV SP HD
http://lexus.hubns.top:80/castor777/125020917/2687301.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV SP SD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV SP SD
http://lexus.hubns.top:80/castor777/125020917/2687302.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Rio FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Rio FHD
http://lexus.hubns.top:80/castor777/125020917/2687303.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Rio HD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Rio HD
http://lexus.hubns.top:80/castor777/125020917/2687304.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Rio SD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Rio SD
http://lexus.hubns.top:80/castor777/125020917/2687305.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Minas FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Minas FHD
http://lexus.hubns.top:80/castor777/125020917/2687306.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Minas HD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Minas HD
http://lexus.hubns.top:80/castor777/125020917/2687307.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Minas SD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Minas SD
http://lexus.hubns.top:80/castor777/125020917/2687308.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV RS FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV RS FHD
http://lexus.hubns.top:80/castor777/125020917/2687309.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV RS HD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV RS HD
http://lexus.hubns.top:80/castor777/125020917/2687310.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV RS SD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV RS SD
http://lexus.hubns.top:80/castor777/125020917/2687311.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Bahia FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Bahia FHD
http://lexus.hubns.top:80/castor777/125020917/2687312.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Bahia HD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Bahia HD
http://lexus.hubns.top:80/castor777/125020917/2687313.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Bahia SD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Bahia SD
http://lexus.hubns.top:80/castor777/125020917/2687314.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Brasília FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Brasília FHD
http://lexus.hubns.top:80/castor777/125020917/2687315.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Brasília HD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Brasília HD
http://lexus.hubns.top:80/castor777/125020917/2687316.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Brasília SD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Brasília SD
http://lexus.hubns.top:80/castor777/125020917/2687317.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV GO FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV GO FHD
http://lexus.hubns.top:80/castor777/125020917/2687318.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV GO HD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV GO HD
http://lexus.hubns.top:80/castor777/125020917/2687319.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV GO SD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV GO SD
http://lexus.hubns.top:80/castor777/125020917/2687320.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV BE FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV BE FHD
http://lexus.hubns.top:80/castor777/125020917/2687321.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV BE HD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV BE HD
http://lexus.hubns.top:80/castor777/125020917/2687322.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV BE SD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV BE SD
http://lexus.hubns.top:80/castor777/125020917/2687323.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Manaus FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Manaus FHD
http://lexus.hubns.top:80/castor777/125020917/2687324.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Manaus HD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Manaus HD
http://lexus.hubns.top:80/castor777/125020917/2687325.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record TV Manaus SD" tvg-logo="http://www.fontedecanais.app/logos/canais/record.png" group-title="✅ FONTE ALTERNATIVA",Record TV Manaus SD
http://lexus.hubns.top:80/castor777/125020917/2687326.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RedeTV! FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/redetv.png" group-title="✅ FONTE ALTERNATIVA",RedeTV! FHD
http://lexus.hubns.top:80/castor777/125020917/2687327.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RedeTV! HD" tvg-logo="http://www.fontedecanais.app/logos/canais/redetv.png" group-title="✅ FONTE ALTERNATIVA",RedeTV! HD
http://lexus.hubns.top:80/castor777/125020917/2687328.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RedeTV! SD" tvg-logo="http://www.fontedecanais.app/logos/canais/redetv.png" group-title="✅ FONTE ALTERNATIVA",RedeTV! SD
http://lexus.hubns.top:80/castor777/125020917/2687329.m3u8
#EXTINF:-1 tvg-id="" tvg-name="SBT FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/sbt.png" group-title="✅ FONTE ALTERNATIVA",SBT FHD
http://lexus.hubns.top:80/castor777/125020917/2687330.m3u8
#EXTINF:-1 tvg-id="" tvg-name="SBT HD" tvg-logo="http://www.fontedecanais.app/logos/canais/sbt.png" group-title="✅ FONTE ALTERNATIVA",SBT HD
http://lexus.hubns.top:80/castor777/125020917/2687331.m3u8
#EXTINF:-1 tvg-id="" tvg-name="SBT SD" tvg-logo="http://www.fontedecanais.app/logos/canais/sbt.png" group-title="✅ FONTE ALTERNATIVA",SBT SD
http://lexus.hubns.top:80/castor777/125020917/2687332.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Canal do Boi" tvg-logo="https://www.fontedecanais.app/logos/canais/canaldoboi.png" group-title="✅ FONTE ALTERNATIVA",Canal do Boi
http://lexus.hubns.top:80/castor777/125020917/2687333.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Canal Rural" tvg-logo="https://www.fontedecanais.app/logos/canais/canalrural.png" group-title="✅ FONTE ALTERNATIVA",Canal Rural
http://lexus.hubns.top:80/castor777/125020917/2687334.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Brasil" tvg-logo="https://www.fontedecanais.app/logos/canais/tvbrasil.png" group-title="✅ FONTE ALTERNATIVA",TV Brasil
http://lexus.hubns.top:80/castor777/125020917/2687335.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Camara" tvg-logo="https://www.fontedecanais.app/logos/canais/tvcamara.png" group-title="✅ FONTE ALTERNATIVA",TV Camara
http://lexus.hubns.top:80/castor777/125020917/2687336.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Justica e Radio Justica" tvg-logo="https://www.fontedecanais.app/logos/canais/tvjustica.png" group-title="✅ FONTE ALTERNATIVA",TV Justica e Radio Justica
http://lexus.hubns.top:80/castor777/125020917/2687337.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Senado" tvg-logo="https://www.fontedecanais.app/logos/canais/tvsenado.png" group-title="✅ FONTE ALTERNATIVA",TV Senado
http://lexus.hubns.top:80/castor777/125020917/2687338.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Agro+" tvg-logo="http://www.fontedecanais.app/logos/canais/agromais.png" group-title="✅ FONTE ALTERNATIVA",Agro+
http://lexus.hubns.top:80/castor777/125020917/2687339.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Terra Viva" tvg-logo="https://i.imgur.com/0idNHMj.png" group-title="✅ FONTE ALTERNATIVA",Terra Viva
http://lexus.hubns.top:80/castor777/125020917/2687340.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TVE Bahia" tvg-logo="http://i.imgur.com/IWGyp65.jpeg" group-title="✅ FONTE ALTERNATIVA",TVE Bahia
http://lexus.hubns.top:80/castor777/125020917/2687341.m3u8
#EXTINF:-1 tvg-id="br#tv-a-critica-hd" tvg-name="TV A Crítica" tvg-logo="https://i.imgur.com/LXvCAY1.png" group-title="✅ VARIEDADES & MUSICAS",TV A Crítica
http://lexus.hubns.top:80/castor777/125020917/2687342.m3u8
#EXTINF:-1 tvg-id="" tvg-name="EPTV Campinas FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",EPTV Campinas FHD
http://lexus.hubns.top:80/castor777/125020917/2687343.m3u8
#EXTINF:-1 tvg-id="" tvg-name="EPTV Campinas HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",EPTV Campinas HD
http://lexus.hubns.top:80/castor777/125020917/2687344.m3u8
#EXTINF:-1 tvg-id="" tvg-name="EPTV Campinas SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",EPTV Campinas SD
http://lexus.hubns.top:80/castor777/125020917/2687345.m3u8
#EXTINF:-1 tvg-id="" tvg-name="EPTV Central FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",EPTV Central FHD
http://lexus.hubns.top:80/castor777/125020917/2687346.m3u8
#EXTINF:-1 tvg-id="" tvg-name="EPTV Central HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",EPTV Central HD
http://lexus.hubns.top:80/castor777/125020917/2687347.m3u8
#EXTINF:-1 tvg-id="" tvg-name="EPTV Central SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",EPTV Central SD
http://lexus.hubns.top:80/castor777/125020917/2687348.m3u8
#EXTINF:-1 tvg-id="" tvg-name="EPTV Ribeirão FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",EPTV Ribeirão FHD
http://lexus.hubns.top:80/castor777/125020917/2687349.m3u8
#EXTINF:-1 tvg-id="" tvg-name="EPTV Ribeirão HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",EPTV Ribeirão HD
http://lexus.hubns.top:80/castor777/125020917/2687350.m3u8
#EXTINF:-1 tvg-id="" tvg-name="EPTV Ribeirão SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",EPTV Ribeirão SD
http://lexus.hubns.top:80/castor777/125020917/2687351.m3u8
#EXTINF:-1 tvg-id="" tvg-name="EPTV Sul de Minas FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",EPTV Sul de Minas FHD
http://lexus.hubns.top:80/castor777/125020917/2687352.m3u8
#EXTINF:-1 tvg-id="" tvg-name="EPTV Sul de Minas HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",EPTV Sul de Minas HD
http://lexus.hubns.top:80/castor777/125020917/2687353.m3u8
#EXTINF:-1 tvg-id="" tvg-name="EPTV Sul de Minas SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",EPTV Sul de Minas SD
http://lexus.hubns.top:80/castor777/125020917/2687354.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo Brasília FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo Brasília FHD
http://lexus.hubns.top:80/castor777/125020917/2687355.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo Brasília HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo Brasília HD
http://lexus.hubns.top:80/castor777/125020917/2687356.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo Brasília SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo Brasília SD
http://lexus.hubns.top:80/castor777/125020917/2687357.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo Minas FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo Minas FHD
http://lexus.hubns.top:80/castor777/125020917/2687358.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo Minas HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo Minas HD
http://lexus.hubns.top:80/castor777/125020917/2687359.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo Minas SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo Minas SD
http://lexus.hubns.top:80/castor777/125020917/2687360.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo Nordeste FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo Nordeste FHD
http://lexus.hubns.top:80/castor777/125020917/2687361.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo Nordeste HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo Nordeste HD
http://lexus.hubns.top:80/castor777/125020917/2687362.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo Nordeste SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo Nordeste SD
http://lexus.hubns.top:80/castor777/125020917/2687363.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo Rio FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo Rio FHD
http://lexus.hubns.top:80/castor777/125020917/2687364.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo Rio HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo Rio HD
http://lexus.hubns.top:80/castor777/125020917/2687365.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo Rio SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo Rio SD
http://lexus.hubns.top:80/castor777/125020917/2687366.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo São Paulo FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo São Paulo FHD
http://lexus.hubns.top:80/castor777/125020917/2687367.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo São Paulo HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo São Paulo HD
http://lexus.hubns.top:80/castor777/125020917/2687368.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo São Paulo SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Globo São Paulo SD
http://lexus.hubns.top:80/castor777/125020917/2687369.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Alto Litoral FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Alto Litoral FHD
http://lexus.hubns.top:80/castor777/125020917/2687370.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Alto Litoral HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Alto Litoral HD
http://lexus.hubns.top:80/castor777/125020917/2687371.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Alto Litoral SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Alto Litoral SD
http://lexus.hubns.top:80/castor777/125020917/2687372.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Cabugi FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Cabugi FHD
http://lexus.hubns.top:80/castor777/125020917/2687373.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Cabugi HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Cabugi HD
http://lexus.hubns.top:80/castor777/125020917/2687374.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Cabugi SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Cabugi SD
http://lexus.hubns.top:80/castor777/125020917/2687375.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Costa Branca FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Costa Branca FHD
http://lexus.hubns.top:80/castor777/125020917/2687376.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Costa Branca HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Costa Branca HD
http://lexus.hubns.top:80/castor777/125020917/2687377.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Costa Branca SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Costa Branca SD
http://lexus.hubns.top:80/castor777/125020917/2687378.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV dos Vales FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV dos Vales FHD
http://lexus.hubns.top:80/castor777/125020917/2687379.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV dos Vales HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV dos Vales HD
http://lexus.hubns.top:80/castor777/125020917/2687380.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV dos Vales SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV dos Vales SD
http://lexus.hubns.top:80/castor777/125020917/2687381.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Grande Minas FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Grande Minas FHD
http://lexus.hubns.top:80/castor777/125020917/2687382.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Grande Minas HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Grande Minas HD
http://lexus.hubns.top:80/castor777/125020917/2687383.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Grande Minas SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Grande Minas SD
http://lexus.hubns.top:80/castor777/125020917/2687384.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Planície FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Planície FHD
http://lexus.hubns.top:80/castor777/125020917/2687385.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Planície HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Planície HD
http://lexus.hubns.top:80/castor777/125020917/2687386.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Planície SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Planície SD
http://lexus.hubns.top:80/castor777/125020917/2687387.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Serra Mar FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Serra Mar FHD
http://lexus.hubns.top:80/castor777/125020917/2687388.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Serra Mar HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Serra Mar HD
http://lexus.hubns.top:80/castor777/125020917/2687389.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Inter TV Serra Mar SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Inter TV Serra Mar SD
http://lexus.hubns.top:80/castor777/125020917/2687390.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Caxias do Sul FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Caxias do Sul FHD
http://lexus.hubns.top:80/castor777/125020917/2687391.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Caxias do Sul HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Caxias do Sul HD
http://lexus.hubns.top:80/castor777/125020917/2687392.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Caxias do Sul SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Caxias do Sul SD
http://lexus.hubns.top:80/castor777/125020917/2687393.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Centro-Oeste FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Centro-Oeste FHD
http://lexus.hubns.top:80/castor777/125020917/2687394.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Centro-Oeste HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Centro-Oeste HD
http://lexus.hubns.top:80/castor777/125020917/2687395.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Centro-Oeste SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Centro-Oeste SD
http://lexus.hubns.top:80/castor777/125020917/2687396.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Chapecó FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Chapecó FHD
http://lexus.hubns.top:80/castor777/125020917/2687397.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Chapecó HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Chapecó HD
http://lexus.hubns.top:80/castor777/125020917/2687398.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Chapecó SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Chapecó SD
http://lexus.hubns.top:80/castor777/125020917/2687399.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Criciúma FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Criciúma FHD
http://lexus.hubns.top:80/castor777/125020917/2687400.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Criciúma HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Criciúma HD
http://lexus.hubns.top:80/castor777/125020917/2687401.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Criciúma SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Criciúma SD
http://lexus.hubns.top:80/castor777/125020917/2687402.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Florianópolis FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Florianópolis FHD
http://lexus.hubns.top:80/castor777/125020917/2687403.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Florianópolis HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Florianópolis HD
http://lexus.hubns.top:80/castor777/125020917/2687404.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Florianópolis SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Florianópolis SD
http://lexus.hubns.top:80/castor777/125020917/2687405.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Joinville FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Joinville FHD
http://lexus.hubns.top:80/castor777/125020917/2687406.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Joinville HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Joinville HD
http://lexus.hubns.top:80/castor777/125020917/2687407.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Joinville SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Joinville SD
http://lexus.hubns.top:80/castor777/125020917/2687408.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Porto Alegre FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Porto Alegre FHD
http://lexus.hubns.top:80/castor777/125020917/2687409.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Porto Alegre HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Porto Alegre HD
http://lexus.hubns.top:80/castor777/125020917/2687410.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Porto Alegre SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Porto Alegre SD
http://lexus.hubns.top:80/castor777/125020917/2687411.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Macapá FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Macapá FHD
http://lexus.hubns.top:80/castor777/125020917/2687412.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Macapá HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Macapá HD
http://lexus.hubns.top:80/castor777/125020917/2687413.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Macapá SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Macapá SD
http://lexus.hubns.top:80/castor777/125020917/2687414.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Manaus FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Manaus FHD
http://lexus.hubns.top:80/castor777/125020917/2687415.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Manaus HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Manaus HD
http://lexus.hubns.top:80/castor777/125020917/2687416.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Manaus SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Manaus SD
http://lexus.hubns.top:80/castor777/125020917/2687417.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Parintins FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Parintins FHD
http://lexus.hubns.top:80/castor777/125020917/2687418.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Parintins HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Parintins HD
http://lexus.hubns.top:80/castor777/125020917/2687419.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Parintins SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Parintins SD
http://lexus.hubns.top:80/castor777/125020917/2687420.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Porto Velho FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Porto Velho FHD
http://lexus.hubns.top:80/castor777/125020917/2687421.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Porto Velho HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Porto Velho HD
http://lexus.hubns.top:80/castor777/125020917/2687422.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Porto Velho SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Porto Velho SD
http://lexus.hubns.top:80/castor777/125020917/2687423.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Boa Vista FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Boa Vista FHD
http://lexus.hubns.top:80/castor777/125020917/2687424.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Boa Vista HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Boa Vista HD
http://lexus.hubns.top:80/castor777/125020917/2687425.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Boa Vista SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Boa Vista SD
http://lexus.hubns.top:80/castor777/125020917/2687426.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Rio Branco FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Rio Branco FHD
http://lexus.hubns.top:80/castor777/125020917/2687427.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Rio Branco HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Rio Branco HD
http://lexus.hubns.top:80/castor777/125020917/2687428.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Amazônica Rio Branco SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Rede Amazônica Rio Branco SD
http://lexus.hubns.top:80/castor777/125020917/2687429.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Cascavel FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Cascavel FHD
http://lexus.hubns.top:80/castor777/125020917/2687430.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Cascavel HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Cascavel HD
http://lexus.hubns.top:80/castor777/125020917/2687431.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Cascavel SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Cascavel SD
http://lexus.hubns.top:80/castor777/125020917/2687432.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Curitiba FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Curitiba FHD
http://lexus.hubns.top:80/castor777/125020917/2687433.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Curitiba HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Curitiba HD
http://lexus.hubns.top:80/castor777/125020917/2687434.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Curitiba SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Curitiba SD
http://lexus.hubns.top:80/castor777/125020917/2687435.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Foz do Iguaçu FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Foz do Iguaçu FHD
http://lexus.hubns.top:80/castor777/125020917/2687436.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Foz do Iguaçu HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Foz do Iguaçu HD
http://lexus.hubns.top:80/castor777/125020917/2687437.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Foz do Iguaçu SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Foz do Iguaçu SD
http://lexus.hubns.top:80/castor777/125020917/2687438.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Guarapuava FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Guarapuava FHD
http://lexus.hubns.top:80/castor777/125020917/2687439.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Guarapuava HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Guarapuava HD
http://lexus.hubns.top:80/castor777/125020917/2687440.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Guarapuava SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Guarapuava SD
http://lexus.hubns.top:80/castor777/125020917/2687441.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Londrina FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Londrina FHD
http://lexus.hubns.top:80/castor777/125020917/2687442.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Londrina HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Londrina HD
http://lexus.hubns.top:80/castor777/125020917/2687443.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Londrina SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Londrina SD
http://lexus.hubns.top:80/castor777/125020917/2687444.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Maringá FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Maringá FHD
http://lexus.hubns.top:80/castor777/125020917/2687445.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Maringá HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Maringá HD
http://lexus.hubns.top:80/castor777/125020917/2687446.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Maringá SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Maringá SD
http://lexus.hubns.top:80/castor777/125020917/2687447.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Paranavaí FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Paranavaí FHD
http://lexus.hubns.top:80/castor777/125020917/2687448.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Paranavaí HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Paranavaí HD
http://lexus.hubns.top:80/castor777/125020917/2687449.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Paranavaí SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Paranavaí SD
http://lexus.hubns.top:80/castor777/125020917/2687450.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Ponta Grossa FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Ponta Grossa FHD
http://lexus.hubns.top:80/castor777/125020917/2687451.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Ponta Grossa HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Ponta Grossa HD
http://lexus.hubns.top:80/castor777/125020917/2687452.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RPC Ponta Grossa SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RPC Ponta Grossa SD
http://lexus.hubns.top:80/castor777/125020917/2687453.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Alvorada do Sul FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Alvorada do Sul FHD
http://lexus.hubns.top:80/castor777/125020917/2687454.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Alvorada do Sul HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Alvorada do Sul HD
http://lexus.hubns.top:80/castor777/125020917/2687455.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Alvorada do Sul SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Alvorada do Sul SD
http://lexus.hubns.top:80/castor777/125020917/2687456.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Anhanguera Goiânia FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Anhanguera Goiânia FHD
http://lexus.hubns.top:80/castor777/125020917/2687457.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Anhanguera Goiânia HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Anhanguera Goiânia HD
http://lexus.hubns.top:80/castor777/125020917/2687458.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Anhanguera Goiânia SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Anhanguera Goiânia SD
http://lexus.hubns.top:80/castor777/125020917/2687459.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Asa Branca FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Asa Branca FHD
http://lexus.hubns.top:80/castor777/125020917/2687460.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Asa Branca HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Asa Branca HD
http://lexus.hubns.top:80/castor777/125020917/2687461.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Asa Branca SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Asa Branca SD
http://lexus.hubns.top:80/castor777/125020917/2687462.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Bahia FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Bahia FHD
http://lexus.hubns.top:80/castor777/125020917/2687463.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Bahia HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Bahia HD
http://lexus.hubns.top:80/castor777/125020917/2687464.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Bahia SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Bahia SD
http://lexus.hubns.top:80/castor777/125020917/2687465.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Cabo Branco FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Cabo Branco FHD
http://lexus.hubns.top:80/castor777/125020917/2687466.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Cabo Branco HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Cabo Branco HD
http://lexus.hubns.top:80/castor777/125020917/2687467.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Cabo Branco SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Cabo Branco SD
http://lexus.hubns.top:80/castor777/125020917/2687468.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Centro-américa Cuiabá FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Centro-américa Cuiabá FHD
http://lexus.hubns.top:80/castor777/125020917/2687469.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Centro-américa Cuiabá HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Centro-américa Cuiabá HD
http://lexus.hubns.top:80/castor777/125020917/2687470.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Centro-américa Cuiabá SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Centro-américa Cuiabá SD
http://lexus.hubns.top:80/castor777/125020917/2687471.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Clube FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Clube FHD
http://lexus.hubns.top:80/castor777/125020917/2687472.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Clube HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Clube HD
http://lexus.hubns.top:80/castor777/125020917/2687473.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Clube SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Clube SD
http://lexus.hubns.top:80/castor777/125020917/2687474.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Fronteira FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Fronteira FHD
http://lexus.hubns.top:80/castor777/125020917/2687475.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Fronteira HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Fronteira HD
http://lexus.hubns.top:80/castor777/125020917/2687476.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Fronteira SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Fronteira SD
http://lexus.hubns.top:80/castor777/125020917/2687477.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Gazeta Vitória FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Gazeta Vitória FHD
http://lexus.hubns.top:80/castor777/125020917/2687478.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Gazeta Vitória HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Gazeta Vitória HD
http://lexus.hubns.top:80/castor777/125020917/2687479.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Gazeta Vitória SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Gazeta Vitória SD
http://lexus.hubns.top:80/castor777/125020917/2687480.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Grande Rio FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Grande Rio FHD
http://lexus.hubns.top:80/castor777/125020917/2687481.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Grande Rio HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Grande Rio HD
http://lexus.hubns.top:80/castor777/125020917/2687482.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Grande Rio SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Grande Rio SD
http://lexus.hubns.top:80/castor777/125020917/2687483.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Ituiutaba FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Ituiutaba FHD
http://lexus.hubns.top:80/castor777/125020917/2687484.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Ituiutaba HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Ituiutaba HD
http://lexus.hubns.top:80/castor777/125020917/2687485.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Ituiutaba SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Ituiutaba SD
http://lexus.hubns.top:80/castor777/125020917/2687486.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Uberlândia FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Uberlândia FHD
http://lexus.hubns.top:80/castor777/125020917/2687487.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Uberlândia HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Uberlândia HD
http://lexus.hubns.top:80/castor777/125020917/2687488.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Uberlândia SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Uberlândia SD
http://lexus.hubns.top:80/castor777/125020917/2687489.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Liberal Belém FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Liberal Belém FHD
http://lexus.hubns.top:80/castor777/125020917/2687490.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Liberal Belém HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Liberal Belém HD
http://lexus.hubns.top:80/castor777/125020917/2687491.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Liberal Belém SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Liberal Belém SD
http://lexus.hubns.top:80/castor777/125020917/2687492.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Mirante Balsas FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Mirante Balsas FHD
http://lexus.hubns.top:80/castor777/125020917/2687493.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Mirante Balsas HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Mirante Balsas HD
http://lexus.hubns.top:80/castor777/125020917/2687494.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Mirante Balsas SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Mirante Balsas SD
http://lexus.hubns.top:80/castor777/125020917/2687495.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Mirante Cocais FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Mirante Cocais FHD
http://lexus.hubns.top:80/castor777/125020917/2687496.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Mirante Cocais HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Mirante Cocais HD
http://lexus.hubns.top:80/castor777/125020917/2687497.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Mirante Cocais SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Mirante Cocais SD
http://lexus.hubns.top:80/castor777/125020917/2687498.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Mirante Imperatriz FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Mirante Imperatriz FHD
http://lexus.hubns.top:80/castor777/125020917/2687499.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Mirante Imperatriz HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Mirante Imperatriz HD
http://lexus.hubns.top:80/castor777/125020917/2687500.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Mirante Imperatriz SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Mirante Imperatriz SD
http://lexus.hubns.top:80/castor777/125020917/2687501.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Mirante São Luís FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Mirante São Luís FHD
http://lexus.hubns.top:80/castor777/125020917/2687502.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Mirante São Luís HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Mirante São Luís HD
http://lexus.hubns.top:80/castor777/125020917/2687503.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Mirante São Luís SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Mirante São Luís SD
http://lexus.hubns.top:80/castor777/125020917/2687504.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Morena Campo Grande FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Morena Campo Grande FHD
http://lexus.hubns.top:80/castor777/125020917/2687505.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Morena Campo Grande HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Morena Campo Grande HD
http://lexus.hubns.top:80/castor777/125020917/2687506.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Morena Campo Grande SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Morena Campo Grande SD
http://lexus.hubns.top:80/castor777/125020917/2687507.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Oeste FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Oeste FHD
http://lexus.hubns.top:80/castor777/125020917/2687508.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Oeste HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Oeste HD
http://lexus.hubns.top:80/castor777/125020917/2687509.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Oeste SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Oeste SD
http://lexus.hubns.top:80/castor777/125020917/2687510.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Paraíba FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Paraíba FHD
http://lexus.hubns.top:80/castor777/125020917/2687511.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Paraíba HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Paraíba HD
http://lexus.hubns.top:80/castor777/125020917/2687512.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Paraíba SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Paraíba SD
http://lexus.hubns.top:80/castor777/125020917/2687513.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Rio Sul FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Rio Sul FHD
http://lexus.hubns.top:80/castor777/125020917/2687514.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Rio Sul HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Rio Sul HD
http://lexus.hubns.top:80/castor777/125020917/2687515.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Rio Sul SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Rio Sul SD
http://lexus.hubns.top:80/castor777/125020917/2687516.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Santa Cruz FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Santa Cruz FHD
http://lexus.hubns.top:80/castor777/125020917/2687517.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Santa Cruz HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Santa Cruz HD
http://lexus.hubns.top:80/castor777/125020917/2687518.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Santa Cruz SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Santa Cruz SD
http://lexus.hubns.top:80/castor777/125020917/2687519.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV São Francisco FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV São Francisco FHD
http://lexus.hubns.top:80/castor777/125020917/2687520.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV São Francisco HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV São Francisco HD
http://lexus.hubns.top:80/castor777/125020917/2687521.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV São Francisco SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV São Francisco SD
http://lexus.hubns.top:80/castor777/125020917/2687522.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Sergipe FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Sergipe FHD
http://lexus.hubns.top:80/castor777/125020917/2687523.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Sergipe HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Sergipe HD
http://lexus.hubns.top:80/castor777/125020917/2687524.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Sergipe SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Sergipe SD
http://lexus.hubns.top:80/castor777/125020917/2687525.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Subaé FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Subaé FHD
http://lexus.hubns.top:80/castor777/125020917/2687526.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Subaé HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Subaé HD
http://lexus.hubns.top:80/castor777/125020917/2687527.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Subaé SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Subaé SD
http://lexus.hubns.top:80/castor777/125020917/2687528.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Sudoeste FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Sudoeste FHD
http://lexus.hubns.top:80/castor777/125020917/2687529.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Sudoeste HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Sudoeste HD
http://lexus.hubns.top:80/castor777/125020917/2687530.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Sudoeste SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Sudoeste SD
http://lexus.hubns.top:80/castor777/125020917/2687531.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV TEM Bauru FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV TEM Bauru FHD
http://lexus.hubns.top:80/castor777/125020917/2687532.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV TEM Bauru HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV TEM Bauru HD
http://lexus.hubns.top:80/castor777/125020917/2687533.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV TEM Bauru SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV TEM Bauru SD
http://lexus.hubns.top:80/castor777/125020917/2687534.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV TEM Itapetininga FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV TEM Itapetininga FHD
http://lexus.hubns.top:80/castor777/125020917/2687535.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV TEM Itapetininga HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV TEM Itapetininga HD
http://lexus.hubns.top:80/castor777/125020917/2687536.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV TEM Itapetininga SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV TEM Itapetininga SD
http://lexus.hubns.top:80/castor777/125020917/2687537.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV TEM São José do Rio Preto FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV TEM São José do Rio Preto FHD
http://lexus.hubns.top:80/castor777/125020917/2687538.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV TEM São José do Rio Preto HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV TEM São José do Rio Preto HD
http://lexus.hubns.top:80/castor777/125020917/2687539.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV TEM São José do Rio Preto SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV TEM São José do Rio Preto SD
http://lexus.hubns.top:80/castor777/125020917/2687540.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV TEM Sorocaba  FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV TEM Sorocaba  FHD
http://lexus.hubns.top:80/castor777/125020917/2687541.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV TEM Sorocaba  HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV TEM Sorocaba  HD
http://lexus.hubns.top:80/castor777/125020917/2687542.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV TEM Sorocaba  SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV TEM Sorocaba  SD
http://lexus.hubns.top:80/castor777/125020917/2687543.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Tribuna FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Tribuna FHD
http://lexus.hubns.top:80/castor777/125020917/2687544.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Tribuna HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Tribuna HD
http://lexus.hubns.top:80/castor777/125020917/2687545.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Tribuna SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Tribuna SD
http://lexus.hubns.top:80/castor777/125020917/2687546.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Verdes Mares Cariri FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Verdes Mares Cariri FHD
http://lexus.hubns.top:80/castor777/125020917/2687547.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Verdes Mares Cariri HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Verdes Mares Cariri HD
http://lexus.hubns.top:80/castor777/125020917/2687548.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Verdes Mares Cariri SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Verdes Mares Cariri SD
http://lexus.hubns.top:80/castor777/125020917/2687549.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Verdes Mares Fortaleza FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Verdes Mares Fortaleza FHD
http://lexus.hubns.top:80/castor777/125020917/2687550.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Verdes Mares Fortaleza HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Verdes Mares Fortaleza HD
http://lexus.hubns.top:80/castor777/125020917/2687551.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Verdes Mares Fortaleza SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Verdes Mares Fortaleza SD
http://lexus.hubns.top:80/castor777/125020917/2687552.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Vanguarda São José dos Campos FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Vanguarda São José dos Campos FHD
http://lexus.hubns.top:80/castor777/125020917/2687553.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Vanguarda São José dos Campos HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Vanguarda São José dos Campos HD
http://lexus.hubns.top:80/castor777/125020917/2687554.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Vanguarda São José dos Campos SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Vanguarda São José dos Campos SD
http://lexus.hubns.top:80/castor777/125020917/2687555.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Vanguarda Taubaté FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Vanguarda Taubaté FHD
http://lexus.hubns.top:80/castor777/125020917/2687556.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Vanguarda Taubaté HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Vanguarda Taubaté HD
http://lexus.hubns.top:80/castor777/125020917/2687557.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Vanguarda Taubaté SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",Vanguarda Taubaté SD
http://lexus.hubns.top:80/castor777/125020917/2687558.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Passo Fundo FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Passo Fundo FHD
http://lexus.hubns.top:80/castor777/125020917/2687559.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Passo Fundo HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Passo Fundo HD
http://lexus.hubns.top:80/castor777/125020917/2687560.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Passo Fundo HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Passo Fundo HD
http://lexus.hubns.top:80/castor777/125020917/2687561.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Santa Maria FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Santa Maria FHD
http://lexus.hubns.top:80/castor777/125020917/2687562.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Santa Maria HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Santa Maria HD
http://lexus.hubns.top:80/castor777/125020917/2687563.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Santa Maria SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Santa Maria SD
http://lexus.hubns.top:80/castor777/125020917/2687564.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Gazeta de Alagoas FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Gazeta de Alagoas FHD
http://lexus.hubns.top:80/castor777/125020917/2687565.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Gazeta de Alagoas HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Gazeta de Alagoas HD
http://lexus.hubns.top:80/castor777/125020917/2687566.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Gazeta de Alagoas SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Gazeta de Alagoas SD
http://lexus.hubns.top:80/castor777/125020917/2687567.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Centro-América Sinop FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Centro-América Sinop FHD
http://lexus.hubns.top:80/castor777/125020917/2687568.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Centro-América Sinop HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Centro-América Sinop HD
http://lexus.hubns.top:80/castor777/125020917/2687569.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Centro-América Sinop SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Centro-América Sinop SD
http://lexus.hubns.top:80/castor777/125020917/2687570.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Centro-América Rondonópolis FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Centro-América Rondonópolis FHD
http://lexus.hubns.top:80/castor777/125020917/2687571.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Centro-América Rondonópolis HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Centro-América Rondonópolis HD
http://lexus.hubns.top:80/castor777/125020917/2687572.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Centro-América Rondonópolis SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Centro-América Rondonópolis SD
http://lexus.hubns.top:80/castor777/125020917/2687573.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Morena Corumbá FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Morena Corumbá FHD
http://lexus.hubns.top:80/castor777/125020917/2687574.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Morena Corumbá HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Morena Corumbá HD
http://lexus.hubns.top:80/castor777/125020917/2687575.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Morena Corumbá SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Morena Corumbá SD
http://lexus.hubns.top:80/castor777/125020917/2687576.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Morena Ponta Porã FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Morena Ponta Porã FHD
http://lexus.hubns.top:80/castor777/125020917/2687577.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Morena Ponta Porã HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Morena Ponta Porã HD
http://lexus.hubns.top:80/castor777/125020917/2687578.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Morena Ponta Porã SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Morena Ponta Porã SD
http://lexus.hubns.top:80/castor777/125020917/2687579.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Araxá FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Araxá FHD
http://lexus.hubns.top:80/castor777/125020917/2687580.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Araxá HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Araxá HD
http://lexus.hubns.top:80/castor777/125020917/2687581.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Araxá SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Araxá SD
http://lexus.hubns.top:80/castor777/125020917/2687582.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Uberaba FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Uberaba FHD
http://lexus.hubns.top:80/castor777/125020917/2687583.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Uberaba HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Uberaba HD
http://lexus.hubns.top:80/castor777/125020917/2687584.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Uberaba SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Uberaba SD
http://lexus.hubns.top:80/castor777/125020917/2687585.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Juiz de Fora FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Juiz de Fora FHD
http://lexus.hubns.top:80/castor777/125020917/2687586.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Juiz de Fora HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Juiz de Fora HD
http://lexus.hubns.top:80/castor777/125020917/2687587.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Integração Juiz de Fora SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Integração Juiz de Fora SD
http://lexus.hubns.top:80/castor777/125020917/2687588.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Pelotas FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Pelotas FHD
http://lexus.hubns.top:80/castor777/125020917/2687589.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Pelotas HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Pelotas HD
http://lexus.hubns.top:80/castor777/125020917/2687590.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Pelotas SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Pelotas SD
http://lexus.hubns.top:80/castor777/125020917/2687591.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Blumenau FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Blumenau FHD
http://lexus.hubns.top:80/castor777/125020917/2687592.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Blumenau HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Blumenau HD
http://lexus.hubns.top:80/castor777/125020917/2687593.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBS TV Blumenau SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",RBS TV Blumenau SD
http://lexus.hubns.top:80/castor777/125020917/2687594.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Gazeta Sul FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Gazeta Sul FHD
http://lexus.hubns.top:80/castor777/125020917/2687595.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Gazeta Sul HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Gazeta Sul HD
http://lexus.hubns.top:80/castor777/125020917/2687596.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Gazeta Sul SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Gazeta Sul SD
http://lexus.hubns.top:80/castor777/125020917/2687597.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Anhanguera Palmas FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Anhanguera Palmas FHD
http://lexus.hubns.top:80/castor777/125020917/2687598.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Anhanguera Palmas HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Anhanguera Palmas HD
http://lexus.hubns.top:80/castor777/125020917/2687599.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Anhanguera Palmas SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globo.png" group-title="✅ FONTE ALTERNATIVA",TV Anhanguera Palmas SD
http://lexus.hubns.top:80/castor777/125020917/2687600.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band Sports FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/bandsports.png" group-title="✅ FONTE ALTERNATIVA",Band Sports FHD
http://lexus.hubns.top:80/castor777/125020917/2687601.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band Sports HD" tvg-logo="http://www.fontedecanais.app/logos/canais/bandsports.png" group-title="✅ FONTE ALTERNATIVA",Band Sports HD
http://lexus.hubns.top:80/castor777/125020917/2687602.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band Sports SD" tvg-logo="http://www.fontedecanais.app/logos/canais/bandsports.png" group-title="✅ FONTE ALTERNATIVA",Band Sports SD
http://lexus.hubns.top:80/castor777/125020917/2687603.m3u8
#EXTINF:-1 tvg-id="" tvg-name="UFC Fight Pass 1 (reprises)" tvg-logo="http://www.fontedecanais.app/logos/canais/ufcfightpass.png" group-title="✅ FONTE ALTERNATIVA",UFC Fight Pass 1 (reprises)
http://lexus.hubns.top:80/castor777/125020917/2687604.m3u8
#EXTINF:-1 tvg-id="" tvg-name="UFC Fight Pass 2 (ao vivo)" tvg-logo="http://www.fontedecanais.app/logos/canais/ufcfightpass.png" group-title="✅ FONTE ALTERNATIVA",UFC Fight Pass 2 (ao vivo)
http://lexus.hubns.top:80/castor777/125020917/2687605.m3u8
#EXTINF:-1 tvg-id="" tvg-name="UFC Fight Pass 3 (ao vivo)" tvg-logo="http://www.fontedecanais.app/logos/canais/ufcfightpass.png" group-title="✅ FONTE ALTERNATIVA",UFC Fight Pass 3 (ao vivo)
http://lexus.hubns.top:80/castor777/125020917/2687606.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Combate FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/combate.png" group-title="✅ FONTE ALTERNATIVA",Combate FHD
http://lexus.hubns.top:80/castor777/125020917/2687607.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Combate HD" tvg-logo="http://www.fontedecanais.app/logos/canais/combate.png" group-title="✅ FONTE ALTERNATIVA",Combate HD
http://lexus.hubns.top:80/castor777/125020917/2687608.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Combate SD" tvg-logo="http://www.fontedecanais.app/logos/canais/combate.png" group-title="✅ FONTE ALTERNATIVA",Combate SD
http://lexus.hubns.top:80/castor777/125020917/2687609.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Amazon Prime Video 01" tvg-logo="http://www.fontedecanais.app/logos/canais/primevideo.png" group-title="✅ FONTE ALTERNATIVA",Amazon Prime Video 01
http://lexus.hubns.top:80/castor777/125020917/2687610.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Amazon Prime Video 02" tvg-logo="http://www.fontedecanais.app/logos/canais/primevideo.png" group-title="✅ FONTE ALTERNATIVA",Amazon Prime Video 02
http://lexus.hubns.top:80/castor777/125020917/2687611.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Amazon Prime Video 03" tvg-logo="http://www.fontedecanais.app/logos/canais/primevideo.png" group-title="✅ FONTE ALTERNATIVA",Amazon Prime Video 03
http://lexus.hubns.top:80/castor777/125020917/2687612.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Nosso Futebol 01" tvg-logo="http://www.fontedecanais.app/logos/canais/nossofutebol.png" group-title="✅ FONTE ALTERNATIVA",Nosso Futebol 01
http://lexus.hubns.top:80/castor777/125020917/2687613.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Nosso Futebol 02" tvg-logo="http://www.fontedecanais.app/logos/canais/nossofutebol.png" group-title="✅ FONTE ALTERNATIVA",Nosso Futebol 02
http://lexus.hubns.top:80/castor777/125020917/2687614.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Nosso Futebol 03" tvg-logo="http://www.fontedecanais.app/logos/canais/nossofutebol.png" group-title="✅ FONTE ALTERNATIVA",Nosso Futebol 03
http://lexus.hubns.top:80/castor777/125020917/2687615.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DAZN 1 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/dazn.png" group-title="✅ FONTE ALTERNATIVA",DAZN 1 HD
http://lexus.hubns.top:80/castor777/125020917/2687616.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DAZN 2 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/dazn.png" group-title="✅ FONTE ALTERNATIVA",DAZN 2 HD
http://lexus.hubns.top:80/castor777/125020917/2687617.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DAZN 3 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/dazn.png" group-title="✅ FONTE ALTERNATIVA",DAZN 3 HD
http://lexus.hubns.top:80/castor777/125020917/2687618.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO MAX 01 ( FONTE ALTERNATIVA)" tvg-logo="http://www.fontedecanais.app/logos/canais/hbomax.png" group-title="⚽ HBO MAX",HBO MAX 01 ( FONTE ALTERNATIVA)
http://lexus.hubns.top:80/castor777/125020917/2687619.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO MAX 02 ( FONTE ALTERNATIVA)" tvg-logo="http://www.fontedecanais.app/logos/canais/hbomax.png" group-title="⚽ HBO MAX",HBO MAX 02 ( FONTE ALTERNATIVA)
http://lexus.hubns.top:80/castor777/125020917/2687620.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO MAX 03 (FONTE ALTERNATIVA)" tvg-logo="http://www.fontedecanais.app/logos/canais/hbomax.png" group-title="⚽ HBO MAX",HBO MAX 03 (FONTE ALTERNATIVA)
http://lexus.hubns.top:80/castor777/125020917/2687621.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO MAX 04 ( FONTE ALTERNATIVA)" tvg-logo="http://www.fontedecanais.app/logos/canais/hbomax.png" group-title="⚽ HBO MAX",HBO MAX 04 ( FONTE ALTERNATIVA)
http://lexus.hubns.top:80/castor777/125020917/2687622.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO MAX 05  ( FONTE ALTERNATIVA)" tvg-logo="http://www.fontedecanais.app/logos/canais/hbomax.png" group-title="⚽ HBO MAX",HBO MAX 05  ( FONTE ALTERNATIVA)
http://lexus.hubns.top:80/castor777/125020917/2687623.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Paulistão" tvg-logo="http://i.imgur.com/RJ0zvXe.png" group-title="✅ FONTE ALTERNATIVA",Paulistão
http://lexus.hubns.top:80/castor777/125020917/2687624.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Disney+ 1" tvg-logo="http://www.fontedecanais.app/logos/canais/starplus.png" group-title="✅ FONTE ALTERNATIVA",Disney+ 1
http://lexus.hubns.top:80/castor777/125020917/2687625.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Disney+ 2 ALTERNATIVO" tvg-logo="http://www.fontedecanais.app/logos/canais/starplus.png" group-title="✅ FONTE ALTERNATIVA",Disney+ 2 ALTERNATIVO
http://lexus.hubns.top:80/castor777/125020917/2687626.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Disney+ 3" tvg-logo="http://www.fontedecanais.app/logos/canais/starplus.png" group-title="✅ FONTE ALTERNATIVA",Disney+ 3
http://lexus.hubns.top:80/castor777/125020917/2687627.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Furacão TV" tvg-logo="http://www.fontedecanais.app/logos/canais/furacaolive.png" group-title="✅ FONTE ALTERNATIVA",Furacão TV
http://lexus.hubns.top:80/castor777/125020917/2687628.m3u8
#EXTINF:-1 tvg-id="" tvg-name="FORMULA 1 TV" tvg-logo="https://i.imgur.com/wW2FygV.png" group-title="✅ FONTE ALTERNATIVA",FORMULA 1 TV
http://lexus.hubns.top:80/castor777/125020917/2687629.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Zapping Sports" tvg-logo="http://www.fontedecanais.app/logos/canais/zappingsports.png" group-title="✅ FONTE ALTERNATIVA",Zapping Sports
http://lexus.hubns.top:80/castor777/125020917/2687630.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ELEVEN SPORTS 1" tvg-logo="https://i.imgur.com/1DnqGWV.png" group-title="✅ FONTE ALTERNATIVA",ELEVEN SPORTS 1
http://lexus.hubns.top:80/castor777/125020917/2687631.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ELEVEN SPORTS 2" tvg-logo="https://i.imgur.com/1DnqGWV.png" group-title="✅ FONTE ALTERNATIVA",ELEVEN SPORTS 2
http://lexus.hubns.top:80/castor777/125020917/2687632.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ELEVEN SPORTS 3" tvg-logo="https://i.imgur.com/1DnqGWV.png" group-title="✅ FONTE ALTERNATIVA",ELEVEN SPORTS 3
http://lexus.hubns.top:80/castor777/125020917/2687633.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NSports FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/nsports.png" group-title="✅ FONTE ALTERNATIVA",NSports FHD
http://lexus.hubns.top:80/castor777/125020917/2687634.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NSports HD" tvg-logo="http://www.fontedecanais.app/logos/canais/nsports.png" group-title="✅ FONTE ALTERNATIVA",NSports HD
http://lexus.hubns.top:80/castor777/125020917/2687635.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NSports SD" tvg-logo="http://www.fontedecanais.app/logos/canais/nsports.png" group-title="✅ FONTE ALTERNATIVA",NSports SD
http://lexus.hubns.top:80/castor777/125020917/2687636.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CazeTV 01" tvg-logo="http://www.fontedecanais.app/logos/canais/cazetv.png" group-title="✅ FONTE ALTERNATIVA",CazeTV 01
http://lexus.hubns.top:80/castor777/125020917/2687637.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CazeTV 02" tvg-logo="http://www.fontedecanais.app/logos/canais/cazetv.png" group-title="✅ FONTE ALTERNATIVA",CazeTV 02
http://lexus.hubns.top:80/castor777/125020917/2687638.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CazeTV 03" tvg-logo="http://www.fontedecanais.app/logos/canais/cazetv.png" group-title="✅ FONTE ALTERNATIVA",CazeTV 03
http://lexus.hubns.top:80/castor777/125020917/2687639.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Paramount+ 1" tvg-logo="https://www.fontedecanais.app/logos/canais/paramountplus.png" group-title="✅ FONTE ALTERNATIVA",Paramount+ 1
http://lexus.hubns.top:80/castor777/125020917/2687640.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Paramount+ 2" tvg-logo="https://www.fontedecanais.app/logos/canais/paramountplus.png" group-title="✅ FONTE ALTERNATIVA",Paramount+ 2
http://lexus.hubns.top:80/castor777/125020917/2687641.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Paramount+ 3" tvg-logo="https://www.fontedecanais.app/logos/canais/paramountplus.png" group-title="✅ FONTE ALTERNATIVA",Paramount+ 3
http://lexus.hubns.top:80/castor777/125020917/2687642.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Paramount+ 4" tvg-logo="https://www.fontedecanais.app/logos/canais/paramountplus.png" group-title="✅ FONTE ALTERNATIVA",Paramount+ 4
http://lexus.hubns.top:80/castor777/125020917/2687643.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Paramount+ 5" tvg-logo="https://www.fontedecanais.app/logos/canais/paramountplus.png" group-title="✅ FONTE ALTERNATIVA",Paramount+ 5
http://lexus.hubns.top:80/castor777/125020917/2687644.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Paramount+ 6" tvg-logo="https://www.fontedecanais.app/logos/canais/paramountplus.png" group-title="✅ FONTE ALTERNATIVA",Paramount+ 6
http://lexus.hubns.top:80/castor777/125020917/2687645.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Remo TV" tvg-logo="https://i.imgur.com/8xs3GlH.png" group-title="✅ FONTE ALTERNATIVA",Remo TV
http://lexus.hubns.top:80/castor777/125020917/2687646.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PapãoTV" tvg-logo="http://i.imgur.com/DkmiaX7.png" group-title="✅ FONTE ALTERNATIVA",PapãoTV
http://lexus.hubns.top:80/castor777/125020917/2687647.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Canal Goat 01" tvg-logo="http://www.fontedecanais.app/logos/canais/canalgoat.png" group-title="✅ FONTE ALTERNATIVA",Canal Goat 01
http://lexus.hubns.top:80/castor777/125020917/2687648.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Canal Goat 02" tvg-logo="http://www.fontedecanais.app/logos/canais/canalgoat.png" group-title="✅ FONTE ALTERNATIVA",Canal Goat 02
http://lexus.hubns.top:80/castor777/125020917/2687649.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Canal Goat 03" tvg-logo="http://www.fontedecanais.app/logos/canais/canalgoat.png" group-title="✅ FONTE ALTERNATIVA",Canal Goat 03
http://lexus.hubns.top:80/castor777/125020917/2687650.m3u8
#EXTINF:-1 tvg-id="" tvg-name="﻿Premiere 1 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",﻿Premiere 1 FHD
http://lexus.hubns.top:80/castor777/125020917/2687651.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 1 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 1 HD
http://lexus.hubns.top:80/castor777/125020917/2687652.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 1 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 1 SD
http://lexus.hubns.top:80/castor777/125020917/2687653.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 2 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 2 FHD
http://lexus.hubns.top:80/castor777/125020917/2687654.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 2 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 2 HD
http://lexus.hubns.top:80/castor777/125020917/2687655.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 2 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 2 SD
http://lexus.hubns.top:80/castor777/125020917/2687656.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 3 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 3 FHD
http://lexus.hubns.top:80/castor777/125020917/2687657.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 3 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 3 HD
http://lexus.hubns.top:80/castor777/125020917/2687658.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 3 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 3 SD
http://lexus.hubns.top:80/castor777/125020917/2687659.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 4 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 4 FHD
http://lexus.hubns.top:80/castor777/125020917/2687660.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 4 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 4 HD
http://lexus.hubns.top:80/castor777/125020917/2687661.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 4 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 4 SD
http://lexus.hubns.top:80/castor777/125020917/2687662.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 5 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 5 FHD
http://lexus.hubns.top:80/castor777/125020917/2687663.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 5 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 5 HD
http://lexus.hubns.top:80/castor777/125020917/2687664.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 5 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 5 SD
http://lexus.hubns.top:80/castor777/125020917/2687665.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 6 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 6 FHD
http://lexus.hubns.top:80/castor777/125020917/2687666.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 6 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 6 HD
http://lexus.hubns.top:80/castor777/125020917/2687667.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 6 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 6 SD
http://lexus.hubns.top:80/castor777/125020917/2687668.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 7 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 7 FHD
http://lexus.hubns.top:80/castor777/125020917/2687669.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 7 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 7 HD
http://lexus.hubns.top:80/castor777/125020917/2687670.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 7 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 7 SD
http://lexus.hubns.top:80/castor777/125020917/2687671.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 8 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 8 FHD
http://lexus.hubns.top:80/castor777/125020917/2687672.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 8 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 8 HD
http://lexus.hubns.top:80/castor777/125020917/2687673.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Premiere 8 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/premiere.png" group-title="✅ FONTE ALTERNATIVA",Premiere 8 SD
http://lexus.hubns.top:80/castor777/125020917/2687674.m3u8
#EXTINF:-1 tvg-id="" tvg-name="SporTV FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/sportv.png" group-title="✅ FONTE ALTERNATIVA",SporTV FHD
http://lexus.hubns.top:80/castor777/125020917/2687675.m3u8
#EXTINF:-1 tvg-id="" tvg-name="SporTV HD" tvg-logo="http://www.fontedecanais.app/logos/canais/sportv.png" group-title="✅ FONTE ALTERNATIVA",SporTV HD
http://lexus.hubns.top:80/castor777/125020917/2687676.m3u8
#EXTINF:-1 tvg-id="" tvg-name="SporTV SD" tvg-logo="http://www.fontedecanais.app/logos/canais/sportv.png" group-title="✅ FONTE ALTERNATIVA",SporTV SD
http://lexus.hubns.top:80/castor777/125020917/2687677.m3u8
#EXTINF:-1 tvg-id="" tvg-name="SporTV 2 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/sportv2.png" group-title="✅ FONTE ALTERNATIVA",SporTV 2 FHD
http://lexus.hubns.top:80/castor777/125020917/2687678.m3u8
#EXTINF:-1 tvg-id="" tvg-name="SporTV 2 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/sportv2.png" group-title="✅ FONTE ALTERNATIVA",SporTV 2 HD
http://lexus.hubns.top:80/castor777/125020917/2687679.m3u8
#EXTINF:-1 tvg-id="" tvg-name="SporTV 2 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/sportv2.png" group-title="✅ FONTE ALTERNATIVA",SporTV 2 SD
http://lexus.hubns.top:80/castor777/125020917/2687680.m3u8
#EXTINF:-1 tvg-id="" tvg-name="SporTV 3 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/sportv3.png" group-title="✅ FONTE ALTERNATIVA",SporTV 3 FHD
http://lexus.hubns.top:80/castor777/125020917/2687681.m3u8
#EXTINF:-1 tvg-id="" tvg-name="SporTV 3 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/sportv3.png" group-title="✅ FONTE ALTERNATIVA",SporTV 3 HD
http://lexus.hubns.top:80/castor777/125020917/2687682.m3u8
#EXTINF:-1 tvg-id="" tvg-name="SporTV 3 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/sportv3.png" group-title="✅ FONTE ALTERNATIVA",SporTV 3 SD
http://lexus.hubns.top:80/castor777/125020917/2687683.m3u8
#EXTINF:-1 tvg-id="" tvg-name="SporTV 4 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/sportv4.png" group-title="✅ FONTE ALTERNATIVA",SporTV 4 SD
http://lexus.hubns.top:80/castor777/125020917/2687686.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn.png" group-title="✅ FONTE ALTERNATIVA",ESPN FHD
http://lexus.hubns.top:80/castor777/125020917/2687687.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN HD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn.png" group-title="✅ FONTE ALTERNATIVA",ESPN HD
http://lexus.hubns.top:80/castor777/125020917/2687688.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN SD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn.png" group-title="✅ FONTE ALTERNATIVA",ESPN SD
http://lexus.hubns.top:80/castor777/125020917/2687689.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 2 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn2.png" group-title="✅ FONTE ALTERNATIVA",ESPN 2 FHD
http://lexus.hubns.top:80/castor777/125020917/2687690.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 2 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn2.png" group-title="✅ FONTE ALTERNATIVA",ESPN 2 HD
http://lexus.hubns.top:80/castor777/125020917/2687691.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 2 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn2.png" group-title="✅ FONTE ALTERNATIVA",ESPN 2 SD
http://lexus.hubns.top:80/castor777/125020917/2687692.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 3 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn3.png" group-title="✅ FONTE ALTERNATIVA",ESPN 3 FHD
http://lexus.hubns.top:80/castor777/125020917/2687693.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 3 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn3.png" group-title="✅ FONTE ALTERNATIVA",ESPN 3 HD
http://lexus.hubns.top:80/castor777/125020917/2687694.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 3 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn3.png" group-title="✅ FONTE ALTERNATIVA",ESPN 3 SD
http://lexus.hubns.top:80/castor777/125020917/2687695.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 4 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn4.png" group-title="✅ FONTE ALTERNATIVA",ESPN 4 FHD
http://lexus.hubns.top:80/castor777/125020917/2687696.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 4 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn4.png" group-title="✅ FONTE ALTERNATIVA",ESPN 4 HD
http://lexus.hubns.top:80/castor777/125020917/2687697.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 4 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn4.png" group-title="✅ FONTE ALTERNATIVA",ESPN 4 SD
http://lexus.hubns.top:80/castor777/125020917/2687698.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 5 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn5.png" group-title="✅ FONTE ALTERNATIVA",ESPN 5 FHD
http://lexus.hubns.top:80/castor777/125020917/2687699.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 5 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn5.png" group-title="✅ FONTE ALTERNATIVA",ESPN 5 HD
http://lexus.hubns.top:80/castor777/125020917/2687700.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 5 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn5.png" group-title="✅ FONTE ALTERNATIVA",ESPN 5 SD
http://lexus.hubns.top:80/castor777/125020917/2687701.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 6 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn6.png" group-title="✅ FONTE ALTERNATIVA",ESPN 6 FHD
http://lexus.hubns.top:80/castor777/125020917/2687702.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 6 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn6.png" group-title="✅ FONTE ALTERNATIVA",ESPN 6 HD
http://lexus.hubns.top:80/castor777/125020917/2687703.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ESPN 6 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/espn6.png" group-title="✅ FONTE ALTERNATIVA",ESPN 6 SD
http://lexus.hubns.top:80/castor777/125020917/2687704.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Animal Planet FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/animalplanet.png" group-title="✅ FONTE ALTERNATIVA",Animal Planet FHD
http://lexus.hubns.top:80/castor777/125020917/2687705.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Animal Planet HD" tvg-logo="http://www.fontedecanais.app/logos/canais/animalplanet.png" group-title="✅ FONTE ALTERNATIVA",Animal Planet HD
http://lexus.hubns.top:80/castor777/125020917/2687706.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Animal Planet SD" tvg-logo="http://www.fontedecanais.app/logos/canais/animalplanet.png" group-title="✅ FONTE ALTERNATIVA",Animal Planet SD
http://lexus.hubns.top:80/castor777/125020917/2687707.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Arte1 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/arte1.png" group-title="✅ FONTE ALTERNATIVA",Arte1 FHD
http://lexus.hubns.top:80/castor777/125020917/2687708.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Arte1 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/arte1.png" group-title="✅ FONTE ALTERNATIVA",Arte1 HD
http://lexus.hubns.top:80/castor777/125020917/2687709.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Arte1 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/arte1.png" group-title="✅ FONTE ALTERNATIVA",Arte1 SD
http://lexus.hubns.top:80/castor777/125020917/2687710.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Curta! FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/curta.png" group-title="✅ FONTE ALTERNATIVA",Curta! FHD
http://lexus.hubns.top:80/castor777/125020917/2687711.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Curta! HD" tvg-logo="http://www.fontedecanais.app/logos/canais/curta.png" group-title="✅ FONTE ALTERNATIVA",Curta! HD
http://lexus.hubns.top:80/castor777/125020917/2687712.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Curta! SD" tvg-logo="http://www.fontedecanais.app/logos/canais/curta.png" group-title="✅ FONTE ALTERNATIVA",Curta! SD
http://lexus.hubns.top:80/castor777/125020917/2687713.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Channel FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoverychannel.png" group-title="✅ FONTE ALTERNATIVA",Discovery Channel FHD
http://lexus.hubns.top:80/castor777/125020917/2687714.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Channel HD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoverychannel.png" group-title="✅ FONTE ALTERNATIVA",Discovery Channel HD
http://lexus.hubns.top:80/castor777/125020917/2687715.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Channel SD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoverychannel.png" group-title="✅ FONTE ALTERNATIVA",Discovery Channel SD
http://lexus.hubns.top:80/castor777/125020917/2687716.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Science FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoveryscience.png" group-title="✅ FONTE ALTERNATIVA",Discovery Science FHD
http://lexus.hubns.top:80/castor777/125020917/2687717.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Science HD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoveryscience.png" group-title="✅ FONTE ALTERNATIVA",Discovery Science HD
http://lexus.hubns.top:80/castor777/125020917/2687718.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Science SD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoveryscience.png" group-title="✅ FONTE ALTERNATIVA",Discovery Science SD
http://lexus.hubns.top:80/castor777/125020917/2687719.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Theater FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoverytheater.png" group-title="✅ FONTE ALTERNATIVA",Discovery Theater FHD
http://lexus.hubns.top:80/castor777/125020917/2687720.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Theater HD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoverytheater.png" group-title="✅ FONTE ALTERNATIVA",Discovery Theater HD
http://lexus.hubns.top:80/castor777/125020917/2687721.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Theater SD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoverytheater.png" group-title="✅ FONTE ALTERNATIVA",Discovery Theater SD
http://lexus.hubns.top:80/castor777/125020917/2687722.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery World FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoveryworld.png" group-title="✅ FONTE ALTERNATIVA",Discovery World FHD
http://lexus.hubns.top:80/castor777/125020917/2687723.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery World HD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoveryworld.png" group-title="✅ FONTE ALTERNATIVA",Discovery World HD
http://lexus.hubns.top:80/castor777/125020917/2687724.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery World SD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoveryworld.png" group-title="✅ FONTE ALTERNATIVA",Discovery World SD
http://lexus.hubns.top:80/castor777/125020917/2687725.m3u8
#EXTINF:-1 tvg-id="" tvg-name="H2 FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/h2.png" group-title="✅ FONTE ALTERNATIVA",H2 FHD
http://lexus.hubns.top:80/castor777/125020917/2687726.m3u8
#EXTINF:-1 tvg-id="" tvg-name="H2 HD" tvg-logo="http://www.fontedecanais.app/logos/canais/h2.png" group-title="✅ FONTE ALTERNATIVA",H2 HD
http://lexus.hubns.top:80/castor777/125020917/2687727.m3u8
#EXTINF:-1 tvg-id="" tvg-name="H2 SD" tvg-logo="http://www.fontedecanais.app/logos/canais/h2.png" group-title="✅ FONTE ALTERNATIVA",H2 SD
http://lexus.hubns.top:80/castor777/125020917/2687728.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HGTV FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/hgtv.png" group-title="✅ FONTE ALTERNATIVA",HGTV FHD
http://lexus.hubns.top:80/castor777/125020917/2687729.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HGTV HD" tvg-logo="http://www.fontedecanais.app/logos/canais/hgtv.png" group-title="✅ FONTE ALTERNATIVA",HGTV HD
http://lexus.hubns.top:80/castor777/125020917/2687730.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HGTV SD" tvg-logo="http://www.fontedecanais.app/logos/canais/hgtv.png" group-title="✅ FONTE ALTERNATIVA",HGTV SD
http://lexus.hubns.top:80/castor777/125020917/2687731.m3u8
#EXTINF:-1 tvg-id="" tvg-name="History FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/history.png" group-title="✅ FONTE ALTERNATIVA",History FHD
http://lexus.hubns.top:80/castor777/125020917/2687732.m3u8
#EXTINF:-1 tvg-id="" tvg-name="History HD" tvg-logo="http://www.fontedecanais.app/logos/canais/history.png" group-title="✅ FONTE ALTERNATIVA",History HD
http://lexus.hubns.top:80/castor777/125020917/2687733.m3u8
#EXTINF:-1 tvg-id="" tvg-name="History SD" tvg-logo="http://www.fontedecanais.app/logos/canais/history.png" group-title="✅ FONTE ALTERNATIVA",History SD
http://lexus.hubns.top:80/castor777/125020917/2687734.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ID: Investigação Discovery FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/id.png" group-title="✅ FONTE ALTERNATIVA",ID: Investigação Discovery FHD
http://lexus.hubns.top:80/castor777/125020917/2687735.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ID: Investigação Discovery HD" tvg-logo="http://www.fontedecanais.app/logos/canais/id.png" group-title="✅ FONTE ALTERNATIVA",ID: Investigação Discovery HD
http://lexus.hubns.top:80/castor777/125020917/2687736.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ID: Investigação Discovery SD" tvg-logo="http://www.fontedecanais.app/logos/canais/id.png" group-title="✅ FONTE ALTERNATIVA",ID: Investigação Discovery SD
http://lexus.hubns.top:80/castor777/125020917/2687737.m3u8
#EXTINF:-1 tvg-id="" tvg-name="National Geographic FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/nationalgeographic.png" group-title="✅ FONTE ALTERNATIVA",National Geographic FHD
http://lexus.hubns.top:80/castor777/125020917/2687738.m3u8
#EXTINF:-1 tvg-id="" tvg-name="National Geographic HD" tvg-logo="http://www.fontedecanais.app/logos/canais/nationalgeographic.png" group-title="✅ FONTE ALTERNATIVA",National Geographic HD
http://lexus.hubns.top:80/castor777/125020917/2687739.m3u8
#EXTINF:-1 tvg-id="" tvg-name="National Geographic SD" tvg-logo="http://www.fontedecanais.app/logos/canais/nationalgeographic.png" group-title="✅ FONTE ALTERNATIVA",National Geographic SD
http://lexus.hubns.top:80/castor777/125020917/2687740.m3u8
#EXTINF:-1 tvg-id="" tvg-name="BabyTV FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/babytv.png" group-title="✅ FONTE ALTERNATIVA",BabyTV FHD
http://lexus.hubns.top:80/castor777/125020917/2687741.m3u8
#EXTINF:-1 tvg-id="" tvg-name="BabyTV HD" tvg-logo="http://www.fontedecanais.app/logos/canais/babytv.png" group-title="✅ FONTE ALTERNATIVA",BabyTV HD
http://lexus.hubns.top:80/castor777/125020917/2687742.m3u8
#EXTINF:-1 tvg-id="" tvg-name="BabyTV SD" tvg-logo="http://www.fontedecanais.app/logos/canais/babytv.png" group-title="✅ FONTE ALTERNATIVA",BabyTV SD
http://lexus.hubns.top:80/castor777/125020917/2687743.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cartoon Network FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/cartoonnetwork.png" group-title="✅ FONTE ALTERNATIVA",Cartoon Network FHD
http://lexus.hubns.top:80/castor777/125020917/2687744.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cartoon Network HD" tvg-logo="http://www.fontedecanais.app/logos/canais/cartoonnetwork.png" group-title="✅ FONTE ALTERNATIVA",Cartoon Network HD
http://lexus.hubns.top:80/castor777/125020917/2687745.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cartoon Network SD" tvg-logo="http://www.fontedecanais.app/logos/canais/cartoonnetwork.png" group-title="✅ FONTE ALTERNATIVA",Cartoon Network SD
http://lexus.hubns.top:80/castor777/125020917/2687746.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cartoonito FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/cartoonito.png" group-title="✅ FONTE ALTERNATIVA",Cartoonito FHD
http://lexus.hubns.top:80/castor777/125020917/2687747.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cartoonito HD" tvg-logo="http://www.fontedecanais.app/logos/canais/cartoonito.png" group-title="✅ FONTE ALTERNATIVA",Cartoonito HD
http://lexus.hubns.top:80/castor777/125020917/2687748.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Cartoonito SD" tvg-logo="http://www.fontedecanais.app/logos/canais/cartoonito.png" group-title="✅ FONTE ALTERNATIVA",Cartoonito SD
http://lexus.hubns.top:80/castor777/125020917/2687749.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Kids FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoverykids.png" group-title="✅ FONTE ALTERNATIVA",Discovery Kids FHD
http://lexus.hubns.top:80/castor777/125020917/2687750.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Kids HD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoverykids.png" group-title="✅ FONTE ALTERNATIVA",Discovery Kids HD
http://lexus.hubns.top:80/castor777/125020917/2687751.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Discovery Kids SD" tvg-logo="http://www.fontedecanais.app/logos/canais/discoverykids.png" group-title="✅ FONTE ALTERNATIVA",Discovery Kids SD
http://lexus.hubns.top:80/castor777/125020917/2687752.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Gloob FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/gloob.png" group-title="✅ FONTE ALTERNATIVA",Gloob FHD
http://lexus.hubns.top:80/castor777/125020917/2687756.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Gloob HD" tvg-logo="http://www.fontedecanais.app/logos/canais/gloob.png" group-title="✅ FONTE ALTERNATIVA",Gloob HD
http://lexus.hubns.top:80/castor777/125020917/2687757.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Gloob SD" tvg-logo="http://www.fontedecanais.app/logos/canais/gloob.png" group-title="✅ FONTE ALTERNATIVA",Gloob SD
http://lexus.hubns.top:80/castor777/125020917/2687758.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Gloobinho FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/gloobinho.png" group-title="✅ FONTE ALTERNATIVA",Gloobinho FHD
http://lexus.hubns.top:80/castor777/125020917/2687759.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Gloobinho HD" tvg-logo="http://www.fontedecanais.app/logos/canais/gloobinho.png" group-title="✅ FONTE ALTERNATIVA",Gloobinho HD
http://lexus.hubns.top:80/castor777/125020917/2687760.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Gloobinho SD" tvg-logo="http://www.fontedecanais.app/logos/canais/gloobinho.png" group-title="✅ FONTE ALTERNATIVA",Gloobinho SD
http://lexus.hubns.top:80/castor777/125020917/2687761.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Nick Jr FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/nickjr.png" group-title="✅ FONTE ALTERNATIVA",Nick Jr FHD
http://lexus.hubns.top:80/castor777/125020917/2687762.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Nick Jr HD" tvg-logo="http://www.fontedecanais.app/logos/canais/nickjr.png" group-title="✅ FONTE ALTERNATIVA",Nick Jr HD
http://lexus.hubns.top:80/castor777/125020917/2687763.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Nick Jr SD" tvg-logo="http://www.fontedecanais.app/logos/canais/nickjr.png" group-title="✅ FONTE ALTERNATIVA",Nick Jr SD
http://lexus.hubns.top:80/castor777/125020917/2687764.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Nickelodeon FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/nickelodeon.png" group-title="✅ FONTE ALTERNATIVA",Nickelodeon FHD
http://lexus.hubns.top:80/castor777/125020917/2687765.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Nickelodeon HD" tvg-logo="http://www.fontedecanais.app/logos/canais/nickelodeon.png" group-title="✅ FONTE ALTERNATIVA",Nickelodeon HD
http://lexus.hubns.top:80/castor777/125020917/2687766.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Nickelodeon SD" tvg-logo="http://www.fontedecanais.app/logos/canais/nickelodeon.png" group-title="✅ FONTE ALTERNATIVA",Nickelodeon SD
http://lexus.hubns.top:80/castor777/125020917/2687767.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Tooncast FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/tooncast.png" group-title="✅ FONTE ALTERNATIVA",Tooncast FHD
http://lexus.hubns.top:80/castor777/125020917/2687768.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Tooncast HD" tvg-logo="http://www.fontedecanais.app/logos/canais/tooncast.png" group-title="✅ FONTE ALTERNATIVA",Tooncast HD
http://lexus.hubns.top:80/castor777/125020917/2687769.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Tooncast SD" tvg-logo="http://www.fontedecanais.app/logos/canais/tooncast.png" group-title="✅ FONTE ALTERNATIVA",Tooncast SD
http://lexus.hubns.top:80/castor777/125020917/2687770.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ZooMoo FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/zoomoo.png" group-title="✅ FONTE ALTERNATIVA",ZooMoo FHD
http://lexus.hubns.top:80/castor777/125020917/2687771.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ZooMoo HD" tvg-logo="http://www.fontedecanais.app/logos/canais/zoomoo.png" group-title="✅ FONTE ALTERNATIVA",ZooMoo HD
http://lexus.hubns.top:80/castor777/125020917/2687772.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ZooMoo SD" tvg-logo="http://www.fontedecanais.app/logos/canais/zoomoo.png" group-title="✅ FONTE ALTERNATIVA",ZooMoo SD
http://lexus.hubns.top:80/castor777/125020917/2687773.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DreamWorks FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/dreamworks.png" group-title="✅ FONTE ALTERNATIVA",DreamWorks FHD
http://lexus.hubns.top:80/castor777/125020917/2687774.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DreamWorks HD" tvg-logo="http://www.fontedecanais.app/logos/canais/dreamworks.png" group-title="✅ FONTE ALTERNATIVA",DreamWorks HD
http://lexus.hubns.top:80/castor777/125020917/2687775.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DreamWorks SD" tvg-logo="http://www.fontedecanais.app/logos/canais/dreamworks.png" group-title="✅ FONTE ALTERNATIVA",DreamWorks SD
http://lexus.hubns.top:80/castor777/125020917/2687776.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Box Kids FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/boxkids.png" group-title="✅ FONTE ALTERNATIVA",Box Kids FHD
http://lexus.hubns.top:80/castor777/125020917/2687777.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Box Kids HD" tvg-logo="http://www.fontedecanais.app/logos/canais/boxkids.png" group-title="✅ FONTE ALTERNATIVA",Box Kids HD
http://lexus.hubns.top:80/castor777/125020917/2687778.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Box Kids SD" tvg-logo="http://www.fontedecanais.app/logos/canais/boxkids.png" group-title="✅ FONTE ALTERNATIVA",Box Kids SD
http://lexus.hubns.top:80/castor777/125020917/2687779.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Rá Tim Bum FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/tvratimbum.png" group-title="✅ FONTE ALTERNATIVA",TV Rá Tim Bum FHD
http://lexus.hubns.top:80/castor777/125020917/2687780.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Rá Tim Bum HD" tvg-logo="http://www.fontedecanais.app/logos/canais/tvratimbum.png" group-title="✅ FONTE ALTERNATIVA",TV Rá Tim Bum HD
http://lexus.hubns.top:80/castor777/125020917/2687781.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Rá Tim Bum SD" tvg-logo="http://www.fontedecanais.app/logos/canais/tvratimbum.png" group-title="✅ FONTE ALTERNATIVA",TV Rá Tim Bum SD
http://lexus.hubns.top:80/castor777/125020917/2687782.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band News FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/bandnews.png" group-title="✅ FONTE ALTERNATIVA",Band News FHD
http://lexus.hubns.top:80/castor777/125020917/2687783.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band News HD" tvg-logo="http://www.fontedecanais.app/logos/canais/bandnews.png" group-title="✅ FONTE ALTERNATIVA",Band News HD
http://lexus.hubns.top:80/castor777/125020917/2687784.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Band News SD" tvg-logo="http://www.fontedecanais.app/logos/canais/bandnews.png" group-title="✅ FONTE ALTERNATIVA",Band News SD
http://lexus.hubns.top:80/castor777/125020917/2687785.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CNN Brasil FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/cnnbrasil.png" group-title="✅ FONTE ALTERNATIVA",CNN Brasil FHD
http://lexus.hubns.top:80/castor777/125020917/2687786.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CNN Brasil HD" tvg-logo="http://www.fontedecanais.app/logos/canais/cnnbrasil.png" group-title="✅ FONTE ALTERNATIVA",CNN Brasil HD
http://lexus.hubns.top:80/castor777/125020917/2687787.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CNN Brasil SD" tvg-logo="http://www.fontedecanais.app/logos/canais/cnnbrasil.png" group-title="✅ FONTE ALTERNATIVA",CNN Brasil SD
http://lexus.hubns.top:80/castor777/125020917/2687788.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo News FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/globonews.png" group-title="✅ FONTE ALTERNATIVA",Globo News FHD
http://lexus.hubns.top:80/castor777/125020917/2687789.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo News HD" tvg-logo="http://www.fontedecanais.app/logos/canais/globonews.png" group-title="✅ FONTE ALTERNATIVA",Globo News HD
http://lexus.hubns.top:80/castor777/125020917/2687790.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Globo News SD" tvg-logo="http://www.fontedecanais.app/logos/canais/globonews.png" group-title="✅ FONTE ALTERNATIVA",Globo News SD
http://lexus.hubns.top:80/castor777/125020917/2687791.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Jovem Pan News FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/jpnews.png" group-title="✅ FONTE ALTERNATIVA",Jovem Pan News FHD
http://lexus.hubns.top:80/castor777/125020917/2687792.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Jovem Pan News HD" tvg-logo="http://www.fontedecanais.app/logos/canais/jpnews.png" group-title="✅ FONTE ALTERNATIVA",Jovem Pan News HD
http://lexus.hubns.top:80/castor777/125020917/2687793.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Jovem Pan News SD" tvg-logo="http://www.fontedecanais.app/logos/canais/jpnews.png" group-title="✅ FONTE ALTERNATIVA",Jovem Pan News SD
http://lexus.hubns.top:80/castor777/125020917/2687794.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record News FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/recordnews.png" group-title="✅ FONTE ALTERNATIVA",Record News FHD
http://lexus.hubns.top:80/castor777/125020917/2687795.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record News HD" tvg-logo="http://www.fontedecanais.app/logos/canais/recordnews.png" group-title="✅ FONTE ALTERNATIVA",Record News HD
http://lexus.hubns.top:80/castor777/125020917/2687796.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Record News SD" tvg-logo="http://www.fontedecanais.app/logos/canais/recordnews.png" group-title="✅ FONTE ALTERNATIVA",Record News SD
http://lexus.hubns.top:80/castor777/125020917/2687797.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CNN Money FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/cnnmoney.png" group-title="✅ FONTE ALTERNATIVA",CNN Money FHD
http://lexus.hubns.top:80/castor777/125020917/2687798.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CNN Money HD" tvg-logo="http://www.fontedecanais.app/logos/canais/cnnmoney.png" group-title="✅ FONTE ALTERNATIVA",CNN Money HD
http://lexus.hubns.top:80/castor777/125020917/2687799.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CNN Money SD" tvg-logo="http://www.fontedecanais.app/logos/canais/cnnmoney.png" group-title="✅ FONTE ALTERNATIVA",CNN Money SD
http://lexus.hubns.top:80/castor777/125020917/2687800.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Times Brasil (CNBC) FHD" tvg-logo="http://www.fontedecanais.app/logos/canais/timesbrasil.png" group-title="✅ FONTE ALTERNATIVA",Times Brasil (CNBC) FHD
http://lexus.hubns.top:80/castor777/125020917/2687801.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Times Brasil (CNBC) HD" tvg-logo="http://www.fontedecanais.app/logos/canais/timesbrasil.png" group-title="✅ FONTE ALTERNATIVA",Times Brasil (CNBC) HD
http://lexus.hubns.top:80/castor777/125020917/2687802.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Times Brasil (CNBC) SD" tvg-logo="http://www.fontedecanais.app/logos/canais/timesbrasil.png" group-title="✅ FONTE ALTERNATIVA",Times Brasil (CNBC) SD
http://lexus.hubns.top:80/castor777/125020917/2687803.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Canção Nova" tvg-logo="http://www.fontedecanais.app/logos/canais/cancaonova.png" group-title="✅ FONTE ALTERNATIVA",Canção Nova
http://lexus.hubns.top:80/castor777/125020917/2687804.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Novo Tempo" tvg-logo="http://www.fontedecanais.app/logos/canais/novotempo.png" group-title="✅ FONTE ALTERNATIVA",Novo Tempo
http://lexus.hubns.top:80/castor777/125020917/2687805.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Familia" tvg-logo="http://www.fontedecanais.app/logos/canais/redefamilia.png" group-title="✅ FONTE ALTERNATIVA",Rede Familia
http://lexus.hubns.top:80/castor777/125020917/2687806.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Gospel" tvg-logo="http://www.fontedecanais.app/logos/canais/redegospel.png" group-title="✅ FONTE ALTERNATIVA",Rede Gospel
http://lexus.hubns.top:80/castor777/125020917/2687807.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede Vida" tvg-logo="http://www.fontedecanais.app/logos/canais/redevida.png" group-title="✅ FONTE ALTERNATIVA",Rede Vida
http://lexus.hubns.top:80/castor777/125020917/2687808.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Rede CNT" tvg-logo="http://www.fontedecanais.app/logos/canais/cnt.png" group-title="✅ FONTE ALTERNATIVA",Rede CNT
http://lexus.hubns.top:80/castor777/125020917/2687809.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Aparecida" tvg-logo="http://www.fontedecanais.app/logos/canais/tvaparecida.png" group-title="✅ FONTE ALTERNATIVA",TV Aparecida
http://lexus.hubns.top:80/castor777/125020917/2687810.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TV Pai Eterno" tvg-logo="http://www.fontedecanais.app/logos/canais/tvpaieterno.png" group-title="✅ FONTE ALTERNATIVA",TV Pai Eterno
http://lexus.hubns.top:80/castor777/125020917/2687811.m3u8
#EXTINF:-1 tvg-id="" tvg-name="RBI TV" tvg-logo="http://www.fontedecanais.app/logos/canais/rbitv.png" group-title="✅ FONTE ALTERNATIVA",RBI TV
http://lexus.hubns.top:80/castor777/125020917/2687812.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Boa Vontade TV" tvg-logo="http://www.fontedecanais.app/logos/canais/boavontade.png" group-title="✅ FONTE ALTERNATIVA",Boa Vontade TV
http://lexus.hubns.top:80/castor777/125020917/2687813.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Os Simpsons" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Os Simpsons
http://lexus.hubns.top:80/castor777/125020917/2687814.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Chaves" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Chaves
http://lexus.hubns.top:80/castor777/125020917/2687815.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Chapolin Colorado" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Chapolin Colorado
http://lexus.hubns.top:80/castor777/125020917/2687816.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Eu, a Patroa e as Crianças" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Eu, a Patroa e as Crianças
http://lexus.hubns.top:80/castor777/125020917/2687817.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Dois Homens e Meio" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Dois Homens e Meio
http://lexus.hubns.top:80/castor777/125020917/2687818.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Bob Esponja Calça Quadrada" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Bob Esponja Calça Quadrada
http://lexus.hubns.top:80/castor777/125020917/2687819.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Naruto Uzumaki" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Naruto Uzumaki
http://lexus.hubns.top:80/castor777/125020917/2687820.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Naruto Shippuden" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Naruto Shippuden
http://lexus.hubns.top:80/castor777/125020917/2687821.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Um Maluco no Pedaço" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Um Maluco no Pedaço
http://lexus.hubns.top:80/castor777/125020917/2687822.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H iCarly Revival" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H iCarly Revival
http://lexus.hubns.top:80/castor777/125020917/2687823.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H South Park" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H South Park
http://lexus.hubns.top:80/castor777/125020917/2687824.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Steven Universo" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Steven Universo
http://lexus.hubns.top:80/castor777/125020917/2687825.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Truques da Mente" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Truques da Mente
http://lexus.hubns.top:80/castor777/125020917/2687826.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Largados e Pelados" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Largados e Pelados
http://lexus.hubns.top:80/castor777/125020917/2687827.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Todo Mundo Odeia o Chris" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Todo Mundo Odeia o Chris
http://lexus.hubns.top:80/castor777/125020917/2687828.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Dragon Ball Z" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Dragon Ball Z
http://lexus.hubns.top:80/castor777/125020917/2687829.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Digimon Adventure" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Digimon Adventure
http://lexus.hubns.top:80/castor777/125020917/2687830.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Snoopy" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Snoopy
http://lexus.hubns.top:80/castor777/125020917/2687831.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24h Big Bang: A Teoria" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24h Big Bang: A Teoria
http://lexus.hubns.top:80/castor777/125020917/2687832.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24h Boku no Hero Academia" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24h Boku no Hero Academia
http://lexus.hubns.top:80/castor777/125020917/2687833.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Apenas um Show" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Apenas um Show
http://lexus.hubns.top:80/castor777/125020917/2687834.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H BoJack Horseman" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H BoJack Horseman
http://lexus.hubns.top:80/castor777/125020917/2687835.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Galinha Pintadinha" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Galinha Pintadinha
http://lexus.hubns.top:80/castor777/125020917/2687836.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Futurama" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Futurama
http://lexus.hubns.top:80/castor777/125020917/2687837.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H DPA - Detetives do Predio Azul" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H DPA - Detetives do Predio Azul
http://lexus.hubns.top:80/castor777/125020917/2687838.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Familia Dinoussauros" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Familia Dinoussauros
http://lexus.hubns.top:80/castor777/125020917/2687839.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Aeroporto Area Restrita" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Aeroporto Area Restrita
http://lexus.hubns.top:80/castor777/125020917/2687840.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H As Visões da Raven" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H As Visões da Raven
http://lexus.hubns.top:80/castor777/125020917/2687841.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Filmes Ação" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Filmes Ação
http://lexus.hubns.top:80/castor777/125020917/2687842.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Filmes Animação Infantil" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Filmes Animação Infantil
http://lexus.hubns.top:80/castor777/125020917/2687843.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Filmes Comédia" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Filmes Comédia
http://lexus.hubns.top:80/castor777/125020917/2687844.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Filmes Drama" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Filmes Drama
http://lexus.hubns.top:80/castor777/125020917/2687845.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Filmes Romance" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Filmes Romance
http://lexus.hubns.top:80/castor777/125020917/2687846.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Filmes Suspense" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Filmes Suspense
http://lexus.hubns.top:80/castor777/125020917/2687847.m3u8
#EXTINF:-1 tvg-id="" tvg-name="24H Filmes Lancamentos" tvg-logo="http://www.fontedecanais.app/logos/canais/24h.png" group-title="✅ FONTE ALTERNATIVA",24H Filmes Lancamentos
http://lexus.hubns.top:80/castor777/125020917/2687848.m3u8
#EXTINF:-1 tvg-id="BandBahia.br" tvg-name="BAND BAHIA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Rede_Bandeirantes_logo_2018.svg/800px-Rede_Bandeirantes_logo_2018.svg.png" group-title="✅ BAND",BAND BAHIA HD
http://lexus.hubns.top:80/castor777/125020917/2714056.m3u8
#EXTINF:-1 tvg-id="br#band-belem" tvg-name="BAND PARA (RBA TV)" tvg-logo="https://static.wikia.nocookie.net/tvpediabrasil/images/a/a8/Rbatv17.png/revision/latest?cb=20210918204136&path-prefix=pt-br" group-title="✅ BAND",BAND PARA (RBA TV)
http://lexus.hubns.top:80/castor777/125020917/2714668.m3u8
#EXTINF:-1 tvg-id="RecordTVRio.br" tvg-name="Record RJ FHD ( FONTE ALTERNATIVA)" tvg-logo="http://the-img.xyz/images/record.png" group-title="✅ RECORD",Record RJ FHD ( FONTE ALTERNATIVA)
http://lexus.hubns.top:80/castor777/125020917/4262048.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="Record SP HD ( FONTE ALTERNATIVA )" tvg-logo="http://the-img.xyz/images/record.png" group-title="✅ RECORD",Record SP HD ( FONTE ALTERNATIVA )
http://lexus.hubns.top:80/castor777/125020917/4263071.m3u8
#EXTINF:-1 tvg-id="SBTNacional.br" tvg-name="SBT UHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/1024px-Logotipo_do_SBT.svg.png" group-title="✅ CANAIS 4K (UHD)",SBT UHD
http://lexus.hubns.top:80/castor777/125020917/5471314.m3u8
#EXTINF:-1 tvg-id="br#telecine-action-hd" tvg-name="TELECINE ACTION UHD" tvg-logo="https://img.r7.com/images/record-06112023213615769?dimensions=677x369" group-title="✅ CANAIS 4K (UHD)",TELECINE ACTION UHD
http://lexus.hubns.top:80/castor777/125020917/5471313.m3u8
#EXTINF:-1 tvg-id="br#telecine-pipoca-hd" tvg-name="TELECINE PIPOCA UHD" tvg-logo="https://s2-valor.glbimg.com/8xeAepYkXdJXcpqGE-bN6M3T2ow=/0x0:620x349/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/6/0/TqS478RcWAOoyUeV1zPQ/rede-globo-marca-logo-rep.jpg" group-title="✅ CANAIS 4K (UHD)",TELECINE PIPOCA UHD
http://lexus.hubns.top:80/castor777/125020917/5471312.m3u8
#EXTINF:-1 tvg-id="TVGloboNordeste.br" tvg-name="GLOBO CE UHD" tvg-logo="https://s2-valor.glbimg.com/8xeAepYkXdJXcpqGE-bN6M3T2ow=/0x0:620x349/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/6/0/TqS478RcWAOoyUeV1zPQ/rede-globo-marca-logo-rep.jpg" group-title="✅ CANAIS 4K (UHD)",GLOBO CE UHD
http://lexus.hubns.top:80/castor777/125020917/5471311.m3u8
#EXTINF:-1 tvg-id="TVGloboSaoPaulo.br" tvg-name="GLOBO SP UHD" tvg-logo="https://i.pinimg.com/originals/a4/ed/cc/a4edcce9c057e6f6941dc5a590299390.png" group-title="✅ CANAIS 4K (UHD)",GLOBO SP UHD
http://lexus.hubns.top:80/castor777/125020917/5471310.m3u8
#EXTINF:-1 tvg-id="SBTNacional.br" tvg-name="SBT PARANA HD" tvg-logo="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2ea69af-b90c-45dc-ae27-611649bd6b6b/df65goy-883622c1-c120-430c-b7e3-27837dae3128.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyZWE2OWFmLWI5MGMtNDVkYy1hZTI3LTYxMTY0OWJkNmI2YlwvZGY2NWdveS04ODM2MjJjMS1jMTIwLTQzMGMtYjdlMy0yNzgzN2RhZTMxMjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.A3tvO9QZ8n7mRjpMvD0ZaGPnC-FrBw3TPpkDUbbFnBI" group-title="✅ CANAIS 4K (UHD)",SBT PARANA HD
http://lexus.hubns.top:80/castor777/125020917/5471083.m3u8
#EXTINF:-1 tvg-id="br#globo-rio-hd" tvg-name="GLOBO CUIABA UHD" tvg-logo="https://s2-valor.glbimg.com/8xeAepYkXdJXcpqGE-bN6M3T2ow=/0x0:620x349/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/6/0/TqS478RcWAOoyUeV1zPQ/rede-globo-marca-logo-rep.jpg" group-title="✅ CANAIS 4K (UHD)",GLOBO CUIABA UHD
http://lexus.hubns.top:80/castor777/125020917/5471061.m3u8
#EXTINF:-1 tvg-id="br#globo-rio-hd" tvg-name="GLOBO RJ UHD" tvg-logo="https://i.pinimg.com/originals/cb/76/80/cb768057ae5472d7b1f1f17ce60737ed.png" group-title="✅ CANAIS 4K (UHD)",GLOBO RJ UHD
http://lexus.hubns.top:80/castor777/125020917/5471059.m3u8
#EXTINF:-1 tvg-id="br#tnt-hd" tvg-name="TNT UHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/TNT_Logo_2016.svg/1000px-TNT_Logo_2016.svg.png" group-title="✅ CANAIS 4K (UHD)",TNT UHD
http://lexus.hubns.top:80/castor777/125020917/1257496.m3u8
#EXTINF:-1 tvg-id="SBTNacional.br" tvg-name="SBT UHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/1024px-Logotipo_do_SBT.svg.png" group-title="✅ CANAIS 4K (UHD)",SBT UHD
http://lexus.hubns.top:80/castor777/125020917/1257495.m3u8
#EXTINF:-1 tvg-id="br#sportv3-hd" tvg-name="SPORTV 3 UHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/SporTV_3_2017_logo.svg/1280px-SporTV_3_2017_logo.svg.png" group-title="✅ CANAIS 4K (UHD)",SPORTV 3 UHD
http://lexus.hubns.top:80/castor777/125020917/1257494.m3u8
#EXTINF:-1 tvg-id="SporTV2.br" tvg-name="SPORTV 2 UHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/SporTV_2_2017_logo.svg/1280px-SporTV_2_2017_logo.svg.png" group-title="✅ CANAIS 4K (UHD)",SPORTV 2 UHD
http://lexus.hubns.top:80/castor777/125020917/1257493.m3u8
#EXTINF:-1 tvg-id="br#sportv-hd" tvg-name="SPORTV  UHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/SporTV_2017_logo.svg/2560px-SporTV_2017_logo.svg.png" group-title="✅ CANAIS 4K (UHD)",SPORTV  UHD
http://lexus.hubns.top:80/castor777/125020917/1257492.m3u8
#EXTINF:-1 tvg-id="br#record-hd" tvg-name="RECORD MT UHD" tvg-logo="https://img.r7.com/images/record-06112023213615769?dimensions=677x369" group-title="✅ CANAIS 4K (UHD)",RECORD MT UHD
http://lexus.hubns.top:80/castor777/125020917/1257490.m3u8
#EXTINF:-1 tvg-id="br#premiere-2" tvg-name="PREMIERE 2  UHD" tvg-logo="https://podecomparar.com.br/sites/podecomparar.com.br/files/images/canais-tv/premiere-2.jpg" group-title="✅ CANAIS 4K (UHD)",PREMIERE 2  UHD
http://lexus.hubns.top:80/castor777/125020917/1257489.m3u8
#EXTINF:-1 tvg-id="PremiereClubes.br" tvg-name="PREMIERE CLUBES UHD" tvg-logo="https://cdn.mitvstatic.com/channels/br_premiere-clubes_m.png" group-title="✅ CANAIS 4K (UHD)",PREMIERE CLUBES UHD
http://lexus.hubns.top:80/castor777/125020917/1257488.m3u8
#EXTINF:-1 tvg-id="ESPN4.br" tvg-name="ESPN 4 UHD" tvg-logo="https://visionetfibra.com.br/wp-content/uploads/2022/06/ESPN4-1.png" group-title="✅ CANAIS 4K (UHD)",ESPN 4 UHD
http://lexus.hubns.top:80/castor777/125020917/1257482.m3u8
#EXTINF:-1 tvg-id="br#espn-hd" tvg-name="ESPN UHD" tvg-logo="https://spng.pngfind.com/pngs/s/48-489605_home-tv-shows-espn-espn-logo.png" group-title="✅ CANAIS 4K (UHD)",ESPN UHD
http://lexus.hubns.top:80/castor777/125020917/1257481.m3u8
#EXTINF:-1 tvg-id="br#cnn-brasil-1" tvg-name="CNN BRASIL  UHD" tvg-logo="https://1.bp.blogspot.com/-cCo1ZpfUkiE/YHTpyq_DwFI/AAAAAAACETs/yd5ADnn8WSwle5AP47-egqV3mpZwiF6uQCLcBGAsYHQ/s990/CNN%2BBrasil_3.png" group-title="✅ CANAIS 4K (UHD)",CNN BRASIL  UHD
http://lexus.hubns.top:80/castor777/125020917/1257480.m3u8
#EXTINF:-1 tvg-id="br#band-minas" tvg-name="BAND MINAS  UHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Rede_Bandeirantes_logo_2018.svg/800px-Rede_Bandeirantes_logo_2018.svg.png" group-title="✅ CANAIS 4K (UHD)",BAND MINAS  UHD
http://lexus.hubns.top:80/castor777/125020917/1257479.m3u8
#EXTINF:-1 tvg-id="BandSaoPaulo.br" tvg-name="BAND SP  UHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Rede_Bandeirantes_logo_2018.svg/800px-Rede_Bandeirantes_logo_2018.svg.png" group-title="✅ CANAIS 4K (UHD)",BAND SP  UHD
http://lexus.hubns.top:80/castor777/125020917/1257478.m3u8
#EXTINF:-1 tvg-id="br#axn-hd" tvg-name="AXN UHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/AXN_logo.svg/1280px-AXN_logo.svg.png" group-title="✅ CANAIS 4K (UHD)",AXN UHD
http://lexus.hubns.top:80/castor777/125020917/1257477.m3u8
#EXTINF:-1 tvg-id="br#band-minas" tvg-name="BAND MINAS" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND MINAS
http://lexus.hubns.top:80/castor777/125020917/5479667.m3u8
#EXTINF:-1 tvg-id="br#band-minas" tvg-name="BAND MG FHD" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND MG FHD
http://lexus.hubns.top:80/castor777/125020917/5479668.m3u8
#EXTINF:-1 tvg-id="br#band-natal-hd" tvg-name="BAND NATAL HD" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND NATAL HD
http://lexus.hubns.top:80/castor777/125020917/5479671.m3u8
#EXTINF:-1 tvg-id="BandSaoPaulo.br" tvg-name="BAND PA HD" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND PA HD
http://lexus.hubns.top:80/castor777/125020917/5479672.m3u8
#EXTINF:-1 tvg-id="br#band-rj-hd" tvg-name="BAND RJ FHD" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND RJ FHD
http://lexus.hubns.top:80/castor777/125020917/5479673.m3u8
#EXTINF:-1 tvg-id="br#band-rj-hd" tvg-name="BAND RJ HD" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND RJ HD
http://lexus.hubns.top:80/castor777/125020917/5479674.m3u8
#EXTINF:-1 tvg-id="br#band-rio-grande-do-sul-hd" tvg-name="BAND RS HD" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND RS HD
http://lexus.hubns.top:80/castor777/125020917/5479677.m3u8
#EXTINF:-1 tvg-id="BandSaoPaulo.br" tvg-name="BAND SP HD" tvg-logo="https://i.pinimg.com/originals/74/ae/d8/74aed8843f43a46b63737f4451e337f0.png" group-title="✅ BAND",BAND SP HD
http://lexus.hubns.top:80/castor777/125020917/5479679.m3u8
#EXTINF:-1 tvg-id="TVAratu.br" tvg-name="SBT ( TV ARATU )" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/1024px-Logotipo_do_SBT.svg.png" group-title="✅ SBT",SBT ( TV ARATU )
http://lexus.hubns.top:80/castor777/125020917/6487178.m3u8
#EXTINF:-1 tvg-id="br#cnn-brasil-1" tvg-name="CNN BRASIL FHD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4J5l2M4tiAcfVo_UXD8rq7x7HgwdHZqCJYaHxCQ_1Y50lDoLtzrzwswRkEVn5DOtB0U&usqp=CAU" group-title="✅ NOTICIAS",CNN BRASIL FHD
http://lexus.hubns.top:80/castor777/125020917/1256556.m3u8
#EXTINF:-1 tvg-id="br#cnn-brasil-1" tvg-name="CNN BRASIL" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4J5l2M4tiAcfVo_UXD8rq7x7HgwdHZqCJYaHxCQ_1Y50lDoLtzrzwswRkEVn5DOtB0U&usqp=CAU" group-title="✅ NOTICIAS",CNN BRASIL
http://lexus.hubns.top:80/castor777/125020917/1256555.m3u8
#EXTINF:-1 tvg-id="br#cnn-brasil-1" tvg-name="CNN BRASIL FHD" tvg-logo="https://1.bp.blogspot.com/-cCo1ZpfUkiE/YHTpyq_DwFI/AAAAAAACETs/yd5ADnn8WSwle5AP47-egqV3mpZwiF6uQCLcBGAsYHQ/s990/CNN%2BBrasil_3.png" group-title="✅ NOTICIAS",CNN BRASIL FHD
http://lexus.hubns.top:80/castor777/125020917/1256557.m3u8
#EXTINF:-1 tvg-id="br#cnn-brasil-1" tvg-name="CNN BRASIL FHD H265" tvg-logo="https://1.bp.blogspot.com/-cCo1ZpfUkiE/YHTpyq_DwFI/AAAAAAACETs/yd5ADnn8WSwle5AP47-egqV3mpZwiF6uQCLcBGAsYHQ/s990/CNN%2BBrasil_3.png" group-title="✅ NOTICIAS",CNN BRASIL FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256558.m3u8
#EXTINF:-1 tvg-id="br#cnn-brasil-1" tvg-name="CNN Brasil FHD H265 [OPCAO2]" tvg-logo="https://1.bp.blogspot.com/-cCo1ZpfUkiE/YHTpyq_DwFI/AAAAAAACETs/yd5ADnn8WSwle5AP47-egqV3mpZwiF6uQCLcBGAsYHQ/s990/CNN%2BBrasil_3.png" group-title="✅ NOTICIAS",CNN Brasil FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1256559.m3u8
#EXTINF:-1 tvg-id="br#cnn-en-espanol-hd" tvg-name="CNN ESPANHOL" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjve653XdBR12oyBK8Z7uawklLTbQ_mKOb1f-TyC-g9lYAV6qLhiO79Dp1o8BdkbJw2dw&usqp=CAU" group-title="✅ NOTICIAS",CNN ESPANHOL
http://lexus.hubns.top:80/castor777/125020917/1256561.m3u8
#EXTINF:-1 tvg-id="br#cnn-brasil-1" tvg-name="CNN BRASIL HD" tvg-logo="https://1.bp.blogspot.com/-cCo1ZpfUkiE/YHTpyq_DwFI/AAAAAAACETs/yd5ADnn8WSwle5AP47-egqV3mpZwiF6uQCLcBGAsYHQ/s990/CNN%2BBrasil_3.png" group-title="✅ NOTICIAS",CNN BRASIL HD
http://lexus.hubns.top:80/castor777/125020917/1256560.m3u8
#EXTINF:-1 tvg-id="br#cnn-en-espanol-hd" tvg-name="CNN ESPANHOL FHD H265" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjve653XdBR12oyBK8Z7uawklLTbQ_mKOb1f-TyC-g9lYAV6qLhiO79Dp1o8BdkbJw2dw&usqp=CAU" group-title="✅ NOTICIAS",CNN ESPANHOL FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256562.m3u8
#EXTINF:-1 tvg-id="br#cnn-en-espanol-hd" tvg-name="CNN ESPANHOL HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjve653XdBR12oyBK8Z7uawklLTbQ_mKOb1f-TyC-g9lYAV6qLhiO79Dp1o8BdkbJw2dw&usqp=CAU" group-title="✅ NOTICIAS",CNN ESPANHOL HD
http://lexus.hubns.top:80/castor777/125020917/1256563.m3u8
#EXTINF:-1 tvg-id="CNNInternationalAsiaPacific.hk" tvg-name="CNN INTERNACIONAL" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjve653XdBR12oyBK8Z7uawklLTbQ_mKOb1f-TyC-g9lYAV6qLhiO79Dp1o8BdkbJw2dw&usqp=CAU" group-title="✅ NOTICIAS",CNN INTERNACIONAL
http://lexus.hubns.top:80/castor777/125020917/1256564.m3u8
#EXTINF:-1 tvg-id="CNNInternationalAsiaPacific.hk" tvg-name="CNN INTERNACIONAL FHD H265" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjve653XdBR12oyBK8Z7uawklLTbQ_mKOb1f-TyC-g9lYAV6qLhiO79Dp1o8BdkbJw2dw&usqp=CAU" group-title="✅ NOTICIAS",CNN INTERNACIONAL FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256565.m3u8
#EXTINF:-1 tvg-id="CNNInternationalAsiaPacific.hk" tvg-name="CNN INTERNACIONAL HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjve653XdBR12oyBK8Z7uawklLTbQ_mKOb1f-TyC-g9lYAV6qLhiO79Dp1o8BdkbJw2dw&usqp=CAU" group-title="✅ NOTICIAS",CNN INTERNACIONAL HD
http://lexus.hubns.top:80/castor777/125020917/1256566.m3u8
#EXTINF:-1 tvg-id="" tvg-name="JOVEM PAN NEWS FHD" tvg-logo="https://jpimg.com.br/uploads/2021/10/jpnews2-1000x600-1.jpg" group-title="✅ NOTICIAS",JOVEM PAN NEWS FHD
http://lexus.hubns.top:80/castor777/125020917/1257445.m3u8
#EXTINF:-1 tvg-id="" tvg-name="JOVEM PAN NEWS HD" tvg-logo="https://jpimg.com.br/uploads/2021/10/jpnews2-1000x600-1.jpg" group-title="✅ NOTICIAS",JOVEM PAN NEWS HD
http://lexus.hubns.top:80/castor777/125020917/1257446.m3u8
#EXTINF:-1 tvg-id="br#globo-news-hd" tvg-name="GLOBO NEWS²" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4J5l2M4tiAcfVo_UXD8rq7x7HgwdHZqCJYaHxCQ_1Y50lDoLtzrzwswRkEVn5DOtB0U&usqp=CAU" group-title="✅ NOTICIAS",GLOBO NEWS²
http://lexus.hubns.top:80/castor777/125020917/1256719.m3u8
#EXTINF:-1 tvg-id="br#globo-news-hd" tvg-name="GLOBO NEWS HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4J5l2M4tiAcfVo_UXD8rq7x7HgwdHZqCJYaHxCQ_1Y50lDoLtzrzwswRkEVn5DOtB0U&usqp=CAU" group-title="✅ NOTICIAS",GLOBO NEWS HD
http://lexus.hubns.top:80/castor777/125020917/1256718.m3u8
#EXTINF:-1 tvg-id="br#globo-news-hd" tvg-name="Globo News FHD H265 [OPCAO2]" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4J5l2M4tiAcfVo_UXD8rq7x7HgwdHZqCJYaHxCQ_1Y50lDoLtzrzwswRkEVn5DOtB0U&usqp=CAU" group-title="✅ NOTICIAS",Globo News FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1256717.m3u8
#EXTINF:-1 tvg-id="br#globo-news-hd" tvg-name="GLOBO NEWS FHD H265" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4J5l2M4tiAcfVo_UXD8rq7x7HgwdHZqCJYaHxCQ_1Y50lDoLtzrzwswRkEVn5DOtB0U&usqp=CAU" group-title="✅ NOTICIAS",GLOBO NEWS FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256716.m3u8
#EXTINF:-1 tvg-id="GloboNews.br" tvg-name="GLOBO NEWS FHD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4J5l2M4tiAcfVo_UXD8rq7x7HgwdHZqCJYaHxCQ_1Y50lDoLtzrzwswRkEVn5DOtB0U&usqp=CAU" group-title="✅ NOTICIAS",GLOBO NEWS FHD
http://lexus.hubns.top:80/castor777/125020917/1256715.m3u8
#EXTINF:-1 tvg-id="GloboNews.br" tvg-name="GLOBO NEWS FHD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4J5l2M4tiAcfVo_UXD8rq7x7HgwdHZqCJYaHxCQ_1Y50lDoLtzrzwswRkEVn5DOtB0U&usqp=CAU" group-title="✅ NOTICIAS",GLOBO NEWS FHD
http://lexus.hubns.top:80/castor777/125020917/1256714.m3u8
#EXTINF:-1 tvg-id="br#globo-news-hd" tvg-name="GLOBO NEWS" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4J5l2M4tiAcfVo_UXD8rq7x7HgwdHZqCJYaHxCQ_1Y50lDoLtzrzwswRkEVn5DOtB0U&usqp=CAU" group-title="✅ NOTICIAS",GLOBO NEWS
http://lexus.hubns.top:80/castor777/125020917/1256713.m3u8
#EXTINF:-1 tvg-id="RecordNews.br" tvg-name="RECORD NEWS SD" tvg-logo="https://yt3.ggpht.com/a/AATXAJwgi_G-kCOfxu-aDZhBiBPincvf-UJVXYgNhg=s900-c-k-c0xffffffff-no-rj-mo" group-title="✅ NOTICIAS",RECORD NEWS SD
http://lexus.hubns.top:80/castor777/125020917/1257133.m3u8
#EXTINF:-1 tvg-id="RecordNews.br" tvg-name="RECORD NEWS HD [LOCAL RN]" tvg-logo="https://yt3.ggpht.com/a/AATXAJwgi_G-kCOfxu-aDZhBiBPincvf-UJVXYgNhg=s900-c-k-c0xffffffff-no-rj-mo" group-title="✅ NOTICIAS",RECORD NEWS HD [LOCAL RN]
http://lexus.hubns.top:80/castor777/125020917/1257132.m3u8
#EXTINF:-1 tvg-id="RecordNews.br" tvg-name="RECORD NEWS HD [LOCAL RECIFE]" tvg-logo="https://yt3.ggpht.com/a/AATXAJwgi_G-kCOfxu-aDZhBiBPincvf-UJVXYgNhg=s900-c-k-c0xffffffff-no-rj-mo" group-title="✅ NOTICIAS",RECORD NEWS HD [LOCAL RECIFE]
http://lexus.hubns.top:80/castor777/125020917/1257131.m3u8
#EXTINF:-1 tvg-id="RecordNews.br" tvg-name="RECORD NEWS HD" tvg-logo="https://yt3.ggpht.com/a/AATXAJwgi_G-kCOfxu-aDZhBiBPincvf-UJVXYgNhg=s900-c-k-c0xffffffff-no-rj-mo" group-title="✅ NOTICIAS",RECORD NEWS HD
http://lexus.hubns.top:80/castor777/125020917/1257130.m3u8
#EXTINF:-1 tvg-id="RecordNews.br" tvg-name="RECORD NEWS" tvg-logo="https://yt3.ggpht.com/a/AATXAJwgi_G-kCOfxu-aDZhBiBPincvf-UJVXYgNhg=s900-c-k-c0xffffffff-no-rj-mo" group-title="✅ NOTICIAS",RECORD NEWS
http://lexus.hubns.top:80/castor777/125020917/1257129.m3u8
#EXTINF:-1 tvg-id="br#sportv3-hd" tvg-name="SPORTV 3" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/d/d3/SporTV3_2021.png" group-title="⚽ SPORTV",SPORTV 3
http://lexus.hubns.top:80/castor777/125020917/1257218.m3u8
#EXTINF:-1 tvg-id="br#sportv3-hd" tvg-name="SPORTV 3 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/d/d3/SporTV3_2021.png" group-title="⚽ SPORTV",SPORTV 3 HD
http://lexus.hubns.top:80/castor777/125020917/1257217.m3u8
#EXTINF:-1 tvg-id="br#sportv3-hd" tvg-name="SPORTV 3 FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/d/d3/SporTV3_2021.png" group-title="⚽ SPORTV",SPORTV 3 FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257216.m3u8
#EXTINF:-1 tvg-id="br#sportv3-hd" tvg-name="SPORTV 3 FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/d/d3/SporTV3_2021.png" group-title="⚽ SPORTV",SPORTV 3 FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257215.m3u8
#EXTINF:-1 tvg-id="br#sportv2-hd" tvg-name="SPORTV 2" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/0/01/SporTV2_2021.png" group-title="⚽ SPORTV",SPORTV 2
http://lexus.hubns.top:80/castor777/125020917/1257214.m3u8
#EXTINF:-1 tvg-id="br#sportv2-hd" tvg-name="SPORTV 2 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/0/01/SporTV2_2021.png" group-title="⚽ SPORTV",SPORTV 2 HD
http://lexus.hubns.top:80/castor777/125020917/1257213.m3u8
#EXTINF:-1 tvg-id="br#sportv2-hd" tvg-name="SPORTV 2 FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/0/01/SporTV2_2021.png" group-title="⚽ SPORTV",SPORTV 2 FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1257212.m3u8
#EXTINF:-1 tvg-id="SporTV2.br" tvg-name="SPORTV 2 FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/0/01/SporTV2_2021.png" group-title="⚽ SPORTV",SPORTV 2 FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257211.m3u8
#EXTINF:-1 tvg-id="SporTV2.br" tvg-name="SPORTV 2 FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/0/01/SporTV2_2021.png" group-title="⚽ SPORTV",SPORTV 2 FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257210.m3u8
#EXTINF:-1 tvg-id="SporTV.br" tvg-name="SPORTV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/SporTV_2017_logo.svg/2560px-SporTV_2017_logo.svg.png" group-title="⚽ SPORTV",SPORTV
http://lexus.hubns.top:80/castor777/125020917/1257208.m3u8
#EXTINF:-1 tvg-id="br#sportv-hd" tvg-name="SPORTV HD" tvg-logo="https://logodownload.org/wp-content/uploads/2017/07/sportv-logo-8.png" group-title="⚽ SPORTV",SPORTV HD
http://lexus.hubns.top:80/castor777/125020917/1257207.m3u8
#EXTINF:-1 tvg-id="br#sportv-hd" tvg-name="SPORTV FHD H265 [OPCAO2]" tvg-logo="https://logodownload.org/wp-content/uploads/2017/07/sportv-logo-8.png" group-title="⚽ SPORTV",SPORTV FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1257206.m3u8
#EXTINF:-1 tvg-id="br#sportv-hd" tvg-name="SPORTV FHD H265" tvg-logo="https://logodownload.org/wp-content/uploads/2017/07/sportv-logo-8.png" group-title="⚽ SPORTV",SPORTV FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257205.m3u8
#EXTINF:-1 tvg-id="br#sportv-hd" tvg-name="SPORTV FHD H264" tvg-logo="https://logodownload.org/wp-content/uploads/2017/07/sportv-logo-8.png" group-title="⚽ SPORTV",SPORTV FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257204.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO MAX 1 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByadMtqNH8XgNTD5TvvaPkcHlnZ2bBxSATCLCEHXwjI56qNjn_59ViKHH-O1YG_09EPI&usqp=CAU" group-title="⚽ HBO MAX",HBO MAX 1 HD
http://lexus.hubns.top:80/castor777/125020917/1257474.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO MAX 2 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByadMtqNH8XgNTD5TvvaPkcHlnZ2bBxSATCLCEHXwjI56qNjn_59ViKHH-O1YG_09EPI&usqp=CAU" group-title="⚽ HBO MAX",HBO MAX 2 HD
http://lexus.hubns.top:80/castor777/125020917/1257473.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO MAX 3 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByadMtqNH8XgNTD5TvvaPkcHlnZ2bBxSATCLCEHXwjI56qNjn_59ViKHH-O1YG_09EPI&usqp=CAU" group-title="⚽ HBO MAX",HBO MAX 3 HD
http://lexus.hubns.top:80/castor777/125020917/1257472.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO MAX 4 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByadMtqNH8XgNTD5TvvaPkcHlnZ2bBxSATCLCEHXwjI56qNjn_59ViKHH-O1YG_09EPI&usqp=CAU" group-title="⚽ HBO MAX",HBO MAX 4 HD
http://lexus.hubns.top:80/castor777/125020917/1257471.m3u8
#EXTINF:-1 tvg-id="a.e.br" tvg-name="UFC FIGHT PASS 1" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06oUPl9toMCn6nGQyVlmLJ4UiKqeyF6ikaw3IJWqe_IDVHDWj0KmFU7PtI3rUm4qBUt0&usqp=CAU" group-title="⚽ UFC Fight Pass",UFC FIGHT PASS 1
http://lexus.hubns.top:80/castor777/125020917/1257469.m3u8
#EXTINF:-1 tvg-id="" tvg-name="UFC FIGHT PASS 2" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06oUPl9toMCn6nGQyVlmLJ4UiKqeyF6ikaw3IJWqe_IDVHDWj0KmFU7PtI3rUm4qBUt0&usqp=CAU" group-title="⚽ UFC Fight Pass",UFC FIGHT PASS 2
http://lexus.hubns.top:80/castor777/125020917/1257470.m3u8
#EXTINF:-1 tvg-id="ESPN5.br" tvg-name="ESPN 5 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2015_Fox_sports_logo.svg/1200px-2015_Fox_sports_logo.svg.png" group-title="⚽ ESPN",ESPN 5 HD
http://lexus.hubns.top:80/castor777/125020917/1256672.m3u8
#EXTINF:-1 tvg-id="ESPN5.br" tvg-name="ESPN 5 FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2015_Fox_sports_logo.svg/1200px-2015_Fox_sports_logo.svg.png" group-title="⚽ ESPN",ESPN 5 FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256671.m3u8
#EXTINF:-1 tvg-id="ESPN5.br" tvg-name="ESPN 5 FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2015_Fox_sports_logo.svg/1200px-2015_Fox_sports_logo.svg.png" group-title="⚽ ESPN",ESPN 5 FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256670.m3u8
#EXTINF:-1 tvg-id="ESPN5.br" tvg-name="ESPN 5 FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2015_Fox_sports_logo.svg/1200px-2015_Fox_sports_logo.svg.png" group-title="⚽ ESPN",ESPN 5 FHD
http://lexus.hubns.top:80/castor777/125020917/1256669.m3u8
#EXTINF:-1 tvg-id="ESPN5.br" tvg-name="ESPN 5" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2015_Fox_sports_logo.svg/1200px-2015_Fox_sports_logo.svg.png" group-title="⚽ ESPN",ESPN 5
http://lexus.hubns.top:80/castor777/125020917/1256668.m3u8
#EXTINF:-1 tvg-id="ESPN6.br" tvg-name="ESPN 6" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/b/b9/Espn_extra_2015.PNG" group-title="⚽ ESPN",ESPN 6
http://lexus.hubns.top:80/castor777/125020917/1256651.m3u8
#EXTINF:-1 tvg-id="ESPN6.br" tvg-name="ESPN 6 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/b/b9/Espn_extra_2015.PNG" group-title="⚽ ESPN",ESPN 6 HD
http://lexus.hubns.top:80/castor777/125020917/1256650.m3u8
#EXTINF:-1 tvg-id="ESPN6.br" tvg-name="ESPN 6 FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/b/b9/Espn_extra_2015.PNG" group-title="⚽ ESPN",ESPN 6 FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256649.m3u8
#EXTINF:-1 tvg-id="ESPN6.br" tvg-name="ESPN 6 FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/b/b9/Espn_extra_2015.PNG" group-title="⚽ ESPN",ESPN 6 FHD
http://lexus.hubns.top:80/castor777/125020917/1256648.m3u8
#EXTINF:-1 tvg-id="ESPN6.br" tvg-name="ESPN 6 FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/b/b9/Espn_extra_2015.PNG" group-title="⚽ ESPN",ESPN 6 FHD
http://lexus.hubns.top:80/castor777/125020917/1256647.m3u8
#EXTINF:-1 tvg-id="ESPN4.br" tvg-name="ESPN 4" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/ESPN_4_logo.svg/1024px-ESPN_4_logo.svg.png" group-title="⚽ ESPN",ESPN 4
http://lexus.hubns.top:80/castor777/125020917/1256646.m3u8
#EXTINF:-1 tvg-id="ESPN4.br" tvg-name="ESPN 4 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/ESPN_4_logo.svg/1024px-ESPN_4_logo.svg.png" group-title="⚽ ESPN",ESPN 4 HD
http://lexus.hubns.top:80/castor777/125020917/1256645.m3u8
#EXTINF:-1 tvg-id="ESPN4.br" tvg-name="ESPN 4 FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/ESPN_4_logo.svg/1024px-ESPN_4_logo.svg.png" group-title="⚽ ESPN",ESPN 4 FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1256644.m3u8
#EXTINF:-1 tvg-id="ESPN4.br" tvg-name="ESPN 4 FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/ESPN_4_logo.svg/1024px-ESPN_4_logo.svg.png" group-title="⚽ ESPN",ESPN 4 FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256643.m3u8
#EXTINF:-1 tvg-id="ESPN4.br" tvg-name="ESPN 4 FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/ESPN_4_logo.svg/1024px-ESPN_4_logo.svg.png" group-title="⚽ ESPN",ESPN 4 FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256642.m3u8
#EXTINF:-1 tvg-id="ESPN3.br" tvg-name="ESPN 3" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/5/51/ESPN3_Logo.png" group-title="⚽ ESPN",ESPN 3
http://lexus.hubns.top:80/castor777/125020917/1256641.m3u8
#EXTINF:-1 tvg-id="ESPN3.br" tvg-name="ESPN 3 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/5/51/ESPN3_Logo.png" group-title="⚽ ESPN",ESPN 3 HD
http://lexus.hubns.top:80/castor777/125020917/1256640.m3u8
#EXTINF:-1 tvg-id="ESPN3.br" tvg-name="ESPN 3 FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/5/51/ESPN3_Logo.png" group-title="⚽ ESPN",ESPN 3 FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256639.m3u8
#EXTINF:-1 tvg-id="ESPN3.br" tvg-name="ESPN 3 FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/5/51/ESPN3_Logo.png" group-title="⚽ ESPN",ESPN 3 FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256638.m3u8
#EXTINF:-1 tvg-id="ESPN2.br" tvg-name="ESPN 2" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kyNqsv9Ir1yJ6Z81RL4QPk0oK63A8m-RXa59z2U7GT8EOaqKimgNl5b16jzUwPoDLyM&usqp=CAU" group-title="⚽ ESPN",ESPN 2
http://lexus.hubns.top:80/castor777/125020917/1256637.m3u8
#EXTINF:-1 tvg-id="ESPN2.br" tvg-name="ESPN 2 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kyNqsv9Ir1yJ6Z81RL4QPk0oK63A8m-RXa59z2U7GT8EOaqKimgNl5b16jzUwPoDLyM&usqp=CAU" group-title="⚽ ESPN",ESPN 2 HD
http://lexus.hubns.top:80/castor777/125020917/1256636.m3u8
#EXTINF:-1 tvg-id="ESPN2.br" tvg-name="ESPN 2 FHD H265" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kyNqsv9Ir1yJ6Z81RL4QPk0oK63A8m-RXa59z2U7GT8EOaqKimgNl5b16jzUwPoDLyM&usqp=CAU" group-title="⚽ ESPN",ESPN 2 FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256635.m3u8
#EXTINF:-1 tvg-id="ESPN2.br" tvg-name="ESPN 2 FHD H264" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kyNqsv9Ir1yJ6Z81RL4QPk0oK63A8m-RXa59z2U7GT8EOaqKimgNl5b16jzUwPoDLyM&usqp=CAU" group-title="⚽ ESPN",ESPN 2 FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256634.m3u8
#EXTINF:-1 tvg-id="br#espn-hd" tvg-name="ESPN" tvg-logo="https://spng.pngfind.com/pngs/s/48-489605_home-tv-shows-espn-espn-logo.png" group-title="⚽ ESPN",ESPN
http://lexus.hubns.top:80/castor777/125020917/1256633.m3u8
#EXTINF:-1 tvg-id="br#espn-hd" tvg-name="ESPN HD" tvg-logo="https://spng.pngfind.com/pngs/s/48-489605_home-tv-shows-espn-espn-logo.png" group-title="⚽ ESPN",ESPN HD
http://lexus.hubns.top:80/castor777/125020917/1256632.m3u8
#EXTINF:-1 tvg-id="br#espn-hd" tvg-name="ESPN FHD H265" tvg-logo="https://spng.pngfind.com/pngs/s/48-489605_home-tv-shows-espn-espn-logo.png" group-title="⚽ ESPN",ESPN FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256631.m3u8
#EXTINF:-1 tvg-id="br#espn-hd" tvg-name="ESPN FHD H264" tvg-logo="https://spng.pngfind.com/pngs/s/48-489605_home-tv-shows-espn-espn-logo.png" group-title="⚽ ESPN",ESPN FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256630.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PARAMOUNT HD¹" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Paramount_Pictures_2022_%28Blue%29.svg/800px-Paramount_Pictures_2022_%28Blue%29.svg.png" group-title="✅ PARAMOUNT+",PARAMOUNT HD¹
http://lexus.hubns.top:80/castor777/125020917/1257052.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PARAMOUNT CHANNEL²" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Paramount_Pictures_2022_%28Blue%29.svg/800px-Paramount_Pictures_2022_%28Blue%29.svg.png" group-title="✅ PARAMOUNT+",PARAMOUNT CHANNEL²
http://lexus.hubns.top:80/castor777/125020917/1257051.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PARAMOUNT CHANNEL HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Paramount_Pictures_2022_%28Blue%29.svg/800px-Paramount_Pictures_2022_%28Blue%29.svg.png" group-title="✅ PARAMOUNT+",PARAMOUNT CHANNEL HD
http://lexus.hubns.top:80/castor777/125020917/1257050.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PARAMOUNT CHANNEL FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Paramount_Pictures_2022_%28Blue%29.svg/800px-Paramount_Pictures_2022_%28Blue%29.svg.png" group-title="✅ PARAMOUNT+",PARAMOUNT CHANNEL FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257049.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PARAMOUNT CHANNEL FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Paramount_Pictures_2022_%28Blue%29.svg/800px-Paramount_Pictures_2022_%28Blue%29.svg.png" group-title="✅ PARAMOUNT+",PARAMOUNT CHANNEL FHD
http://lexus.hubns.top:80/castor777/125020917/1257048.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PARAMOUNT CHANNEL FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Paramount_Network.svg/1200px-Paramount_Network.svg.png" group-title="✅ PARAMOUNT+",PARAMOUNT CHANNEL FHD
http://lexus.hubns.top:80/castor777/125020917/1257047.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PARAMOUNT CHANNEL" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Paramount_Pictures_2022_%28Blue%29.svg/800px-Paramount_Pictures_2022_%28Blue%29.svg.png" group-title="✅ PARAMOUNT+",PARAMOUNT CHANNEL
http://lexus.hubns.top:80/castor777/125020917/1257046.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PARAMOUNT+ 4 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXExXXnTRUskCjWyr1GZDyHd6x1hB65tFerc_R33YeEup8V74BnDPLfHg01LJHGpQCUrk&usqp=CAU" group-title="✅ PARAMOUNT+",PARAMOUNT+ 4 HD
http://lexus.hubns.top:80/castor777/125020917/1256445.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PARAMOUNT+ 3 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXExXXnTRUskCjWyr1GZDyHd6x1hB65tFerc_R33YeEup8V74BnDPLfHg01LJHGpQCUrk&usqp=CAU" group-title="✅ PARAMOUNT+",PARAMOUNT+ 3 HD
http://lexus.hubns.top:80/castor777/125020917/1256444.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PARAMOUNT+ 2 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXExXXnTRUskCjWyr1GZDyHd6x1hB65tFerc_R33YeEup8V74BnDPLfHg01LJHGpQCUrk&usqp=CAU" group-title="✅ PARAMOUNT+",PARAMOUNT+ 2 HD
http://lexus.hubns.top:80/castor777/125020917/1256443.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PARAMOUNT+ 1 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXExXXnTRUskCjWyr1GZDyHd6x1hB65tFerc_R33YeEup8V74BnDPLfHg01LJHGpQCUrk&usqp=CAU" group-title="✅ PARAMOUNT+",PARAMOUNT+ 1 HD
http://lexus.hubns.top:80/castor777/125020917/1256442.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PRIME VIDEO 01" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfIHkvrxC5af_53PURzHcmFa5S2vmnX_h0Q&s" group-title="⚽ PRIME VIDEO",PRIME VIDEO 01
http://lexus.hubns.top:80/castor777/125020917/1256425.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PRIME VIDEO 02" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfIHkvrxC5af_53PURzHcmFa5S2vmnX_h0Q&s" group-title="⚽ PRIME VIDEO",PRIME VIDEO 02
http://lexus.hubns.top:80/castor777/125020917/1256426.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PRIME VIDEO 03" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfIHkvrxC5af_53PURzHcmFa5S2vmnX_h0Q&s" group-title="⚽ PRIME VIDEO",PRIME VIDEO 03
http://lexus.hubns.top:80/castor777/125020917/1256427.m3u8
#EXTINF:-1 tvg-id="" tvg-name="PRIME VIDEO 04" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfIHkvrxC5af_53PURzHcmFa5S2vmnX_h0Q&s" group-title="⚽ PRIME VIDEO",PRIME VIDEO 04
http://lexus.hubns.top:80/castor777/125020917/1256428.m3u8
#EXTINF:-1 tvg-id="Combate.br" tvg-name="COMBATE HD" tvg-logo="https://logowik.com/content/uploads/images/combate5159.logowik.com.webp" group-title="⚽ COMBATE",COMBATE HD
http://lexus.hubns.top:80/castor777/125020917/1256571.m3u8
#EXTINF:-1 tvg-id="Combate.br" tvg-name="Combate FHD H265 [OPCAO2]" tvg-logo="https://logowik.com/content/uploads/images/combate5159.logowik.com.webp" group-title="⚽ COMBATE",Combate FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1256570.m3u8
#EXTINF:-1 tvg-id="Combate.br" tvg-name="COMBATE FHD H265" tvg-logo="https://logowik.com/content/uploads/images/combate5159.logowik.com.webp" group-title="⚽ COMBATE",COMBATE FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256569.m3u8
#EXTINF:-1 tvg-id="Combate.br" tvg-name="COMBATE FHD H264" tvg-logo="https://logowik.com/content/uploads/images/combate5159.logowik.com.webp" group-title="⚽ COMBATE",COMBATE FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256568.m3u8
#EXTINF:-1 tvg-id="Combate.br" tvg-name="COMBATE" tvg-logo="https://logowik.com/content/uploads/images/combate5159.logowik.com.webp" group-title="⚽ COMBATE",COMBATE
http://lexus.hubns.top:80/castor777/125020917/1256446.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NBA | League Pass 09" tvg-logo="https://turbologo.com/articles/wp-content/uploads/2019/10/NBA-new-logo.png" group-title="⚽ NBA - League Pass",NBA | League Pass 09
http://lexus.hubns.top:80/castor777/125020917/1257464.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NBA | League Pass 08" tvg-logo="https://turbologo.com/articles/wp-content/uploads/2019/10/NBA-new-logo.png" group-title="⚽ NBA - League Pass",NBA | League Pass 08
http://lexus.hubns.top:80/castor777/125020917/1257463.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NBA | League Pass 07" tvg-logo="https://turbologo.com/articles/wp-content/uploads/2019/10/NBA-new-logo.png" group-title="⚽ NBA - League Pass",NBA | League Pass 07
http://lexus.hubns.top:80/castor777/125020917/1257462.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NBA | League Pass 06" tvg-logo="https://turbologo.com/articles/wp-content/uploads/2019/10/NBA-new-logo.png" group-title="⚽ NBA - League Pass",NBA | League Pass 06
http://lexus.hubns.top:80/castor777/125020917/1257461.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NBA | League Pass 05" tvg-logo="https://turbologo.com/articles/wp-content/uploads/2019/10/NBA-new-logo.png" group-title="⚽ NBA - League Pass",NBA | League Pass 05
http://lexus.hubns.top:80/castor777/125020917/1257460.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NBA | League Pass 04" tvg-logo="https://turbologo.com/articles/wp-content/uploads/2019/10/NBA-new-logo.png" group-title="⚽ NBA - League Pass",NBA | League Pass 04
http://lexus.hubns.top:80/castor777/125020917/1257459.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NBA | League Pass 03" tvg-logo="https://turbologo.com/articles/wp-content/uploads/2019/10/NBA-new-logo.png" group-title="⚽ NBA - League Pass",NBA | League Pass 03
http://lexus.hubns.top:80/castor777/125020917/1257458.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NBA | League Pass 02" tvg-logo="https://turbologo.com/articles/wp-content/uploads/2019/10/NBA-new-logo.png" group-title="⚽ NBA - League Pass",NBA | League Pass 02
http://lexus.hubns.top:80/castor777/125020917/1257457.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NBA | League Pass 01" tvg-logo="https://turbologo.com/articles/wp-content/uploads/2019/10/NBA-new-logo.png" group-title="⚽ NBA - League Pass",NBA | League Pass 01
http://lexus.hubns.top:80/castor777/125020917/1257456.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NBA TV" tvg-logo="https://turbologo.com/articles/wp-content/uploads/2019/10/NBA-new-logo.png" group-title="⚽ NBA - League Pass",NBA TV
http://lexus.hubns.top:80/castor777/125020917/1257449.m3u8
#EXTINF:-1 tvg-id="" tvg-name="FLOGRAPPILING 2 FHD (EVENTOS)" tvg-logo="https://d2779tscntxxsw.cloudfront.net/6002607d86c4e.png" group-title="⚽ ESPORTES & PPV",FLOGRAPPILING 2 FHD (EVENTOS)
http://lexus.hubns.top:80/castor777/125020917/1257803.m3u8
#EXTINF:-1 tvg-id="" tvg-name="FIFA+ HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/FIFA_logo_without_slogan.svg/2560px-FIFA_logo_without_slogan.svg.png" group-title="⚽ ESPORTES & PPV",FIFA+ HD
http://lexus.hubns.top:80/castor777/125020917/1257556.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CANAL CARROS (EVENTOS AO VIVO)" tvg-logo="https://canalcarros.com.br/wp-content/uploads/2023/07/cropped-canal-carros-logo.jpg" group-title="⚽ ESPORTES & PPV",CANAL CARROS (EVENTOS AO VIVO)
http://lexus.hubns.top:80/castor777/125020917/1257554.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CANAL RODEIO (EVENTOS)" tvg-logo="https://cdn2.totalacesso.com/events/5550/prs_740x475_b886c4e0-8a63-4690-b540-8f10033b5a24.jpg" group-title="⚽ ESPORTES & PPV",CANAL RODEIO (EVENTOS)
http://lexus.hubns.top:80/castor777/125020917/1257553.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CANAL GOAT" tvg-logo="https://s2.glbimg.com/_XLUEzacp79jGEhL-IfbqF-zoXk=/0x0:726x273/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/B/c/3wY5SfR7GPAG9ZQk1aAA/whatsapp-image-2023-08-04-at-16.44.03.jpeg" group-title="⚽ ESPORTES & PPV",CANAL GOAT
http://lexus.hubns.top:80/castor777/125020917/1257552.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ONEFOOTBAL 05 HD" tvg-logo="https://images.ctfassets.net/furi30ndpl6w/5UP8QC1x8IYQHSOH1lSyHH/e77fde0359f9d734ba85852f3e78b3af/preview.png" group-title="⚽ ESPORTES & PPV",ONEFOOTBAL 05 HD
http://lexus.hubns.top:80/castor777/125020917/1257551.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CANAL LUTAS (EVENTOS)" tvg-logo="" group-title="⚽ ESPORTES & PPV",CANAL LUTAS (EVENTOS)
http://lexus.hubns.top:80/castor777/125020917/1257559.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ARNOLD CLASSIC OHIO" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTe7fZm3cybLdAIj9jyukwY7WuaaPoK2lDw&usqp=CAU" group-title="⚽ ESPORTES & PPV",ARNOLD CLASSIC OHIO
http://lexus.hubns.top:80/castor777/125020917/1257557.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ONEFOOTBAL 04 HD" tvg-logo="https://images.ctfassets.net/furi30ndpl6w/5UP8QC1x8IYQHSOH1lSyHH/e77fde0359f9d734ba85852f3e78b3af/preview.png" group-title="⚽ ESPORTES & PPV",ONEFOOTBAL 04 HD
http://lexus.hubns.top:80/castor777/125020917/1257550.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ONEFOOTBAL 03 HD" tvg-logo="https://images.ctfassets.net/furi30ndpl6w/5UP8QC1x8IYQHSOH1lSyHH/e77fde0359f9d734ba85852f3e78b3af/preview.png" group-title="⚽ ESPORTES & PPV",ONEFOOTBAL 03 HD
http://lexus.hubns.top:80/castor777/125020917/1257549.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ONEFOOTBAL 02 HD" tvg-logo="https://images.ctfassets.net/furi30ndpl6w/5UP8QC1x8IYQHSOH1lSyHH/e77fde0359f9d734ba85852f3e78b3af/preview.png" group-title="⚽ ESPORTES & PPV",ONEFOOTBAL 02 HD
http://lexus.hubns.top:80/castor777/125020917/1257548.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ONEFOOTBAL 01 HD" tvg-logo="https://images.ctfassets.net/furi30ndpl6w/5UP8QC1x8IYQHSOH1lSyHH/e77fde0359f9d734ba85852f3e78b3af/preview.png" group-title="⚽ ESPORTES & PPV",ONEFOOTBAL 01 HD
http://lexus.hubns.top:80/castor777/125020917/1257547.m3u8
#EXTINF:-1 tvg-id="" tvg-name="BRTVMAX FHD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYUnrGp1e7XCgE3YiG1JdjRY3omNKnWylV8K8Sf7wJUbyAPFmSgq3vvrPdekUVO-MALg&usqp=CAU" group-title="⚽ ESPORTES & PPV",BRTVMAX FHD
http://lexus.hubns.top:80/castor777/125020917/1257809.m3u8
#EXTINF:-1 tvg-id="" tvg-name="BETBOXTV FHD" tvg-logo="https://www.google.com/imgres?imgurl=https%3A%2F%2Fbnldata.com.br%2Fwp-content%2Fuploads%2F2024%2F05%2Fbetbox-tv-e-a-nova-associada-da-anjl.jpg&tbnid=rAEo4tDsipzfkM&vet=10CAwQxiAoAWoXChMIuNijtounhwMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fbnldata.com.br%2Fbetbox-tv-e-a-nova-associada-da-anjl%2F&docid=yLyrsriw2W8D0M&w=700&h=400&itg=1&q=betboxtv&ved=0CAwQxiAoAWoXChMIuNijtounhwMVAAAAAB0AAAAAEAc" group-title="⚽ ESPORTES & PPV",BETBOXTV FHD
http://lexus.hubns.top:80/castor777/125020917/1257810.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Urban Sports HD" tvg-logo="https://img.gothru.org/1256/15585157757245925792/overlay/assets/logo.png?save=optimize" group-title="⚽ ESPORTES & PPV",Urban Sports HD
http://lexus.hubns.top:80/castor777/125020917/1257521.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CANAL DE LUTAS" tvg-logo="https://studiocanallutas.com.br/assets/studioCanalDeLutas-fdf23f62.png" group-title="⚽ ESPORTES & PPV",CANAL DE LUTAS
http://lexus.hubns.top:80/castor777/125020917/1257476.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CANAL DO POKER" tvg-logo="https://1gr.cz/fotky/idnes/11/022/cl6/HIG3913ff_tv_poker_star_logo.jpg" group-title="⚽ ESPORTES & PPV",CANAL DO POKER
http://lexus.hubns.top:80/castor777/125020917/1257475.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NOSSO FUTEBOL 04" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/e/eb/Logotipo_nosso_futebol.png" group-title="⚽ ESPORTES & PPV",NOSSO FUTEBOL 04
http://lexus.hubns.top:80/castor777/125020917/1257468.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NOSSO FUTEBOL 03" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/e/eb/Logotipo_nosso_futebol.png" group-title="⚽ ESPORTES & PPV",NOSSO FUTEBOL 03
http://lexus.hubns.top:80/castor777/125020917/1257467.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NOSSO FUTEBOL 02" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/e/eb/Logotipo_nosso_futebol.png" group-title="⚽ ESPORTES & PPV",NOSSO FUTEBOL 02
http://lexus.hubns.top:80/castor777/125020917/1257466.m3u8
#EXTINF:-1 tvg-id="" tvg-name="NOSSO FUTEBOL 01" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/e/eb/Logotipo_nosso_futebol.png" group-title="⚽ ESPORTES & PPV",NOSSO FUTEBOL 01
http://lexus.hubns.top:80/castor777/125020917/1257465.m3u8
#EXTINF:-1 tvg-id="" tvg-name="FURACAO TV HD" tvg-logo="https://play-lh.googleusercontent.com/PnUuQvi4HwMip8nogyLl1xJzW9vfNymfAf2m8R1IEhiclKIHZvvRCEriTp4iGdb16ng" group-title="⚽ ESPORTES & PPV",FURACAO TV HD
http://lexus.hubns.top:80/castor777/125020917/1257448.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DISNEY+ 3 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRmKAkRIijzuVyWLB0oYjfiCu1yt-66zAC-60ejoNQTIrpVXkL8YbuBEA9AdR-ZQZkmw&usqp=CAU" group-title="⚽ DISNEY +",DISNEY+ 3 HD
http://lexus.hubns.top:80/castor777/125020917/1257235.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DISNEY+ 4 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRmKAkRIijzuVyWLB0oYjfiCu1yt-66zAC-60ejoNQTIrpVXkL8YbuBEA9AdR-ZQZkmw&usqp=CAU" group-title="⚽ DISNEY +",DISNEY+ 4 HD
http://lexus.hubns.top:80/castor777/125020917/1257234.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DISNEY+ 2 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRmKAkRIijzuVyWLB0oYjfiCu1yt-66zAC-60ejoNQTIrpVXkL8YbuBEA9AdR-ZQZkmw&usqp=CAU" group-title="⚽ DISNEY +",DISNEY+ 2 HD
http://lexus.hubns.top:80/castor777/125020917/1257233.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DISNEY+ 1 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRmKAkRIijzuVyWLB0oYjfiCu1yt-66zAC-60ejoNQTIrpVXkL8YbuBEA9AdR-ZQZkmw&usqp=CAU" group-title="⚽ DISNEY +",DISNEY+ 1 HD
http://lexus.hubns.top:80/castor777/125020917/1257232.m3u8
#EXTINF:-1 tvg-id="" tvg-name="FLOW SPORTS" tvg-logo="https://play-lh.googleusercontent.com/XZSjyvAA7eNijXjOARPZE59DQ5XibCSc2g1zEr3D8f3ay8cpGwfjdOfS7v6wHQOOaE4" group-title="⚽ ESPORTES & PPV",FLOW SPORTS
http://lexus.hubns.top:80/castor777/125020917/1256679.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DAZN 2 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/DAZN_2.svg/1280px-DAZN_2.svg.png" group-title="⚽ ESPORTES & PPV",DAZN 2 HD
http://lexus.hubns.top:80/castor777/125020917/1256437.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DAZN HD" tvg-logo="https://cdn.worldvectorlogo.com/logos/dazn.svg" group-title="⚽ ESPORTES & PPV",DAZN HD
http://lexus.hubns.top:80/castor777/125020917/1256436.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DAZN WOMEN'S FOOTBALL" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kaivfvpdd2pLoqS_tMk5Yw5KFZjvpXPJD05lUAKs6BoDWzVm" group-title="⚽ ESPORTES & PPV",DAZN WOMEN'S FOOTBALL
http://lexus.hubns.top:80/castor777/125020917/1256438.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DAZN 3 HD" tvg-logo="https://tvpdotcomdynamiclogopeu.samsungcloud.tv/resize?url=https://tvpnlogopeu.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/FIBD30000026Y_20240214T040133SQUARE.png_20240214040134.png&h=250" group-title="⚽ ESPORTES & PPV",DAZN 3 HD
http://lexus.hubns.top:80/castor777/125020917/1256439.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DAZN 4 HD" tvg-logo="https://img.netzwelt.de/dw1600_dh900_sw208_sh117_sx6_sy51_sr16x9_nu2/picture/original/2023/03/dazn-rise-365871.png" group-title="⚽ ESPORTES & PPV",DAZN 4 HD
http://lexus.hubns.top:80/castor777/125020917/1256440.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DAZN FAST" tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrmis1cIre1h9njNJwfGLzQ8ngj9xvdJiDZpR0zy_neqY1dy7vOCt91OHKxKtLf8pfTmlqqqgDlZwVoNSUgRDwKuYMCthkEI1kCsvr-HUy4g632Ge5q0ivXSvo47OlU-m1qJmLrSnQIzccW1BmoPGEI1Yve0PA0nnkZKB45Y3bdHKJa2zHak45-Q/s1920/DAZN-lanca-dois-canais-fast-nas-Smart-TVs.jpg" group-title="⚽ ESPORTES & PPV",DAZN FAST
http://lexus.hubns.top:80/castor777/125020917/1256441.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CAZÉ TV 2 (YOUTUBE)" tvg-logo="https://www.mktesportivo.com/wp-content/uploads/2022/11/copa_caze_tv.jpg" group-title="⚽ ESPORTES & PPV",CAZÉ TV 2 (YOUTUBE)
http://lexus.hubns.top:80/castor777/125020917/1256435.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CAZÉ TV (YOUTUBE)" tvg-logo="https://www.mktesportivo.com/wp-content/uploads/2022/11/copa_caze_tv.jpg" group-title="⚽ ESPORTES & PPV",CAZÉ TV (YOUTUBE)
http://lexus.hubns.top:80/castor777/125020917/1256434.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CANAL DO GALVAO BUENO" tvg-logo="https://pbs.twimg.com/media/FsGY0c0WAAAr-hC.jpg" group-title="⚽ ESPORTES & PPV",CANAL DO GALVAO BUENO
http://lexus.hubns.top:80/castor777/125020917/1256433.m3u8
#EXTINF:-1 tvg-id="" tvg-name="ZAPPING SPORTS" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/e/e6/Campeonato_Brasileiro_de_Futebol_de_2022_-_S%C3%A9rie_D.png/200px-Campeonato_Brasileiro_de_Futebol_de_2022_-_S%C3%A9rie_D.png" group-title="⚽ ESPORTES & PPV",ZAPPING SPORTS
http://lexus.hubns.top:80/castor777/125020917/1256432.m3u8
#EXTINF:-1 tvg-id="" tvg-name="FLOGRAPPLING FHD" tvg-logo="https://d2779tscntxxsw.cloudfront.net/6002607d86c4e.png" group-title="⚽ ESPORTES & PPV",FLOGRAPPLING FHD
http://lexus.hubns.top:80/castor777/125020917/1256431.m3u8
#EXTINF:-1 tvg-id="" tvg-name="COPA DO BRASIL 06 HD - GE.COM" tvg-logo="https://logospng.org/wp-content/uploads/copa-do-brasil.png" group-title="⚽ ESPORTES & PPV",COPA DO BRASIL 06 HD - GE.COM
http://lexus.hubns.top:80/castor777/125020917/1256430.m3u8
#EXTINF:-1 tvg-id="" tvg-name="COPA DO BRASIL 05 HD - GE.COM" tvg-logo="https://logospng.org/wp-content/uploads/copa-do-brasil.png" group-title="⚽ ESPORTES & PPV",COPA DO BRASIL 05 HD - GE.COM
http://lexus.hubns.top:80/castor777/125020917/1256429.m3u8
#EXTINF:-1 tvg-id="" tvg-name="BRASILEIRAO SERIE D 05" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2n-NdudmVpejERC67lsIADVm0HPXJ-KuRPA1G3amLSgeiNswCvrHMkaxqG7YWoytKftY&usqp=CAU" group-title="⚽ ESPORTES & PPV",BRASILEIRAO SERIE D 05
http://lexus.hubns.top:80/castor777/125020917/1256424.m3u8
#EXTINF:-1 tvg-id="" tvg-name="BRASILEIRAO SERIE D 04" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2n-NdudmVpejERC67lsIADVm0HPXJ-KuRPA1G3amLSgeiNswCvrHMkaxqG7YWoytKftY&usqp=CAU" group-title="⚽ ESPORTES & PPV",BRASILEIRAO SERIE D 04
http://lexus.hubns.top:80/castor777/125020917/1256423.m3u8
#EXTINF:-1 tvg-id="" tvg-name="BRASILEIRAO SERIE D 03" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2n-NdudmVpejERC67lsIADVm0HPXJ-KuRPA1G3amLSgeiNswCvrHMkaxqG7YWoytKftY&usqp=CAU" group-title="⚽ ESPORTES & PPV",BRASILEIRAO SERIE D 03
http://lexus.hubns.top:80/castor777/125020917/1256422.m3u8
#EXTINF:-1 tvg-id="" tvg-name="BRASILEIRAO SERIE D 02" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2n-NdudmVpejERC67lsIADVm0HPXJ-KuRPA1G3amLSgeiNswCvrHMkaxqG7YWoytKftY&usqp=CAU" group-title="⚽ ESPORTES & PPV",BRASILEIRAO SERIE D 02
http://lexus.hubns.top:80/castor777/125020917/1256421.m3u8
#EXTINF:-1 tvg-id="" tvg-name="BRASILEIRAO SERIE D 01" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2n-NdudmVpejERC67lsIADVm0HPXJ-KuRPA1G3amLSgeiNswCvrHMkaxqG7YWoytKftY&usqp=CAU" group-title="⚽ ESPORTES & PPV",BRASILEIRAO SERIE D 01
http://lexus.hubns.top:80/castor777/125020917/1256420.m3u8
#EXTINF:-1 tvg-id="BandSports.br" tvg-name="BAND SPORTS" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/5/5d/BandSports_logo_2018.png" group-title="⚽ BAND SPORTS",BAND SPORTS
http://lexus.hubns.top:80/castor777/125020917/1256413.m3u8
#EXTINF:-1 tvg-id="" tvg-name="JOGOS DO DIA" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkpQmRCOWdeYcbwB2X6zXEBWGy_VJBwKIDprARw2rKb0HhCdyDr8N1hYzUfu_2QNhmeQ&usqp=CAU" group-title="⚽ JOGOS DO DIA",JOGOS DO DIA
http://lexus.hubns.top:80/castor777/125020917/1256412.m3u8
#EXTINF:-1 tvg-id="" tvg-name="LIGA FUTSAL 1 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMc8QMAB8mlDkdnJMhWeeCzjtAbZ1VGqy82PjDadrgkgEnTqiAO1TOr23EDdP7JUR1pY&usqp=CAU" group-title="⚽ ESPORTES & PPV",LIGA FUTSAL 1 HD
http://lexus.hubns.top:80/castor777/125020917/1256968.m3u8
#EXTINF:-1 tvg-id="" tvg-name="LIGA FUTSAL 1 SD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMc8QMAB8mlDkdnJMhWeeCzjtAbZ1VGqy82PjDadrgkgEnTqiAO1TOr23EDdP7JUR1pY&usqp=CAU" group-title="⚽ ESPORTES & PPV",LIGA FUTSAL 1 SD
http://lexus.hubns.top:80/castor777/125020917/1256969.m3u8
#EXTINF:-1 tvg-id="" tvg-name="LIGA FUTSAL 2 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMc8QMAB8mlDkdnJMhWeeCzjtAbZ1VGqy82PjDadrgkgEnTqiAO1TOr23EDdP7JUR1pY&usqp=CAU" group-title="⚽ ESPORTES & PPV",LIGA FUTSAL 2 HD
http://lexus.hubns.top:80/castor777/125020917/1256970.m3u8
#EXTINF:-1 tvg-id="" tvg-name="LIGA FUTSAL 2 SD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMc8QMAB8mlDkdnJMhWeeCzjtAbZ1VGqy82PjDadrgkgEnTqiAO1TOr23EDdP7JUR1pY&usqp=CAU" group-title="⚽ ESPORTES & PPV",LIGA FUTSAL 2 SD
http://lexus.hubns.top:80/castor777/125020917/1256971.m3u8
#EXTINF:-1 tvg-id="" tvg-name="LIGA FUTSAL 3 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMc8QMAB8mlDkdnJMhWeeCzjtAbZ1VGqy82PjDadrgkgEnTqiAO1TOr23EDdP7JUR1pY&usqp=CAU" group-title="⚽ ESPORTES & PPV",LIGA FUTSAL 3 HD
http://lexus.hubns.top:80/castor777/125020917/1256972.m3u8
#EXTINF:-1 tvg-id="" tvg-name="LIGA FUTSAL 4 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMc8QMAB8mlDkdnJMhWeeCzjtAbZ1VGqy82PjDadrgkgEnTqiAO1TOr23EDdP7JUR1pY&usqp=CAU" group-title="⚽ ESPORTES & PPV",LIGA FUTSAL 4 HD
http://lexus.hubns.top:80/castor777/125020917/1256973.m3u8
#EXTINF:-1 tvg-id="" tvg-name="POWER SLAP" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5EtaMmEqds_MX-EdY6ASWq498_EGLKd6F3w&usqp=CAU" group-title="⚽ ESPORTES & PPV",POWER SLAP
http://lexus.hubns.top:80/castor777/125020917/1257498.m3u8
#EXTINF:-1 tvg-id="" tvg-name="FURACAO TV HD ALT" tvg-logo="https://play-lh.googleusercontent.com/PnUuQvi4HwMip8nogyLl1xJzW9vfNymfAf2m8R1IEhiclKIHZvvRCEriTp4iGdb16ng" group-title="⚽ ESPORTES & PPV",FURACAO TV HD ALT
http://lexus.hubns.top:80/castor777/125020917/1256673.m3u8
#EXTINF:-1 tvg-id="" tvg-name="OLYMPIA TV 01" tvg-logo="https://vhx.imgix.net/olympiatv/assets/04d64381-6c46-4f68-9f4d-d00a5f7b3c30.png" group-title="⚽ ESPORTES & PPV",OLYMPIA TV 01
http://lexus.hubns.top:80/castor777/125020917/1748346.m3u8
#EXTINF:-1 tvg-id="BandSports.br" tvg-name="BAND SPORTS HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/5/5d/BandSports_logo_2018.png" group-title="⚽ BAND SPORTS",BAND SPORTS HD
http://lexus.hubns.top:80/castor777/125020917/1256504.m3u8
#EXTINF:-1 tvg-id="BandSports.br" tvg-name="BAND SPORTS FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/5/5d/BandSports_logo_2018.png" group-title="⚽ BAND SPORTS",BAND SPORTS FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256503.m3u8
#EXTINF:-1 tvg-id="BandSports.br" tvg-name="BAND SPORTS FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/5/5d/BandSports_logo_2018.png" group-title="⚽ BAND SPORTS",BAND SPORTS FHD
http://lexus.hubns.top:80/castor777/125020917/1256502.m3u8
#EXTINF:-1 tvg-id="BandSports.br" tvg-name="BAND SPORTS FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/5/5d/BandSports_logo_2018.png" group-title="⚽ BAND SPORTS",BAND SPORTS FHD
http://lexus.hubns.top:80/castor777/125020917/1256501.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DISNEY+ 5 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRmKAkRIijzuVyWLB0oYjfiCu1yt-66zAC-60ejoNQTIrpVXkL8YbuBEA9AdR-ZQZkmw&usqp=CAU" group-title="⚽ DISNEY +",DISNEY+ 5 HD
http://lexus.hubns.top:80/castor777/125020917/2689850.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DISNEY+ 6 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRmKAkRIijzuVyWLB0oYjfiCu1yt-66zAC-60ejoNQTIrpVXkL8YbuBEA9AdR-ZQZkmw&usqp=CAU" group-title="⚽ DISNEY +",DISNEY+ 6 HD
http://lexus.hubns.top:80/castor777/125020917/2689851.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DISNEY+ 7 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRmKAkRIijzuVyWLB0oYjfiCu1yt-66zAC-60ejoNQTIrpVXkL8YbuBEA9AdR-ZQZkmw&usqp=CAU" group-title="⚽ DISNEY +",DISNEY+ 7 HD
http://lexus.hubns.top:80/castor777/125020917/2689852.m3u8
#EXTINF:-1 tvg-id="" tvg-name="DISNEY+ 8 HD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRmKAkRIijzuVyWLB0oYjfiCu1yt-66zAC-60ejoNQTIrpVXkL8YbuBEA9AdR-ZQZkmw&usqp=CAU" group-title="⚽ DISNEY +",DISNEY+ 8 HD
http://lexus.hubns.top:80/castor777/125020917/2689853.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Alagoano 01" tvg-logo="https://www.pontoisp.com.br/wp-content/uploads/2019/04/CampeonatoAlagoano2019-480x340.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Alagoano 01
http://lexus.hubns.top:80/castor777/125020917/2689854.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Alagoano 02" tvg-logo="https://www.pontoisp.com.br/wp-content/uploads/2019/04/CampeonatoAlagoano2019-480x340.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Alagoano 02
http://lexus.hubns.top:80/castor777/125020917/2689855.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Baiano 01" tvg-logo="https://www.zerozero.pt/img/logos/edicoes/161233_imgbank_.png" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Baiano 01
http://lexus.hubns.top:80/castor777/125020917/2689856.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Brasiliense 01" tvg-logo="https://www.zerozero.pt/img/logos/competicoes/1781_imgbank_df1_20221216104937.png" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Brasiliense 01
http://lexus.hubns.top:80/castor777/125020917/2689857.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Brasiliense 02" tvg-logo="https://www.zerozero.pt/img/logos/competicoes/1781_imgbank_df1_20221216104937.png" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Brasiliense 02
http://lexus.hubns.top:80/castor777/125020917/2689858.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Carioca 01" tvg-logo="https://lncimg.lance.com.br/cdn-cgi/image/width=1024,height=768,quality=75,fit=pad/uploads/2017/01/16/587cfdd6d91f5.jpeg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Carioca 01
http://lexus.hubns.top:80/castor777/125020917/2689859.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Carioca 02" tvg-logo="https://lncimg.lance.com.br/cdn-cgi/image/width=1024,height=768,quality=75,fit=pad/uploads/2017/01/16/587cfdd6d91f5.jpeg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Carioca 02
http://lexus.hubns.top:80/castor777/125020917/2689860.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Catarinense 01" tvg-logo="https://s2.glbimg.com/eDd40HdZhZvtDx2KdBCiSPhR0B6pcjvWECQCj4IK_mOx2zmCY2Q0V0PdTNpebx4X/s.glbimg.com/es/ge/f/original/2013/01/23/campeonato_catarinense_00150.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Catarinense 01
http://lexus.hubns.top:80/castor777/125020917/2689861.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Catarinense 02" tvg-logo="https://s2.glbimg.com/eDd40HdZhZvtDx2KdBCiSPhR0B6pcjvWECQCj4IK_mOx2zmCY2Q0V0PdTNpebx4X/s.glbimg.com/es/ge/f/original/2013/01/23/campeonato_catarinense_00150.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Catarinense 02
http://lexus.hubns.top:80/castor777/125020917/2689862.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Capixaba 01" tvg-logo="https://futebolcapixaba.com/site/wp-content/uploads/2024/01/Escudo-Capixabao-2024.png" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Capixaba 01
http://lexus.hubns.top:80/castor777/125020917/2689863.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Capixaba 02" tvg-logo="https://futebolcapixaba.com/site/wp-content/uploads/2024/01/Escudo-Capixabao-2024.png" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Capixaba 02
http://lexus.hubns.top:80/castor777/125020917/2689864.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Cearense 01" tvg-logo="https://public.flourish.studio/uploads/1481596/23bd829f-1978-4fdd-957e-e49b6c755875.jpeg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Cearense 01
http://lexus.hubns.top:80/castor777/125020917/2689865.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Cearense 02" tvg-logo="https://public.flourish.studio/uploads/1481596/23bd829f-1978-4fdd-957e-e49b6c755875.jpeg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Cearense 02
http://lexus.hubns.top:80/castor777/125020917/2689866.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Gaucho 01" tvg-logo="240618" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Gaucho 01
http://lexus.hubns.top:80/castor777/125020917/2689867.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Gaucho 02" tvg-logo="240619" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Gaucho 02
http://lexus.hubns.top:80/castor777/125020917/2689868.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Goiano 01" tvg-logo="https://image-service.onefootball.com/transform?w=256&dpr=2&image=https://images.onefootball.com/icons/leagueColoredCompetition/128/197.png" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Goiano 01
http://lexus.hubns.top:80/castor777/125020917/2689869.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Goiano 02" tvg-logo="https://image-service.onefootball.com/transform?w=256&dpr=2&image=https://images.onefootball.com/icons/leagueColoredCompetition/128/197.png" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Goiano 02
http://lexus.hubns.top:80/castor777/125020917/2689870.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Goiano 03" tvg-logo="https://image-service.onefootball.com/transform?w=256&dpr=2&image=https://images.onefootball.com/icons/leagueColoredCompetition/128/197.png" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Goiano 03
http://lexus.hubns.top:80/castor777/125020917/2689871.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Maranhense 01" tvg-logo="https://i1.wp.com/g7ma.com/wp-content/uploads/2019/10/BOLA.jpg?zoom=2.625&resize=382%2C287&ssl=1" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Maranhense 01
http://lexus.hubns.top:80/castor777/125020917/2689872.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Mato-Grossense 01" tvg-logo="https://rainhasdodriblehome.files.wordpress.com/2020/01/screenshot_20200125-200127.png?w=796&h=727&crop=1" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Mato-Grossense 01
http://lexus.hubns.top:80/castor777/125020917/2689873.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Mato-Grossense 02" tvg-logo="https://rainhasdodriblehome.files.wordpress.com/2020/01/screenshot_20200125-200127.png?w=796&h=727&crop=1" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Mato-Grossense 02
http://lexus.hubns.top:80/castor777/125020917/2689874.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Mato-Grossense 03" tvg-logo="https://rainhasdodriblehome.files.wordpress.com/2020/01/screenshot_20200125-200127.png?w=796&h=727&crop=1" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Mato-Grossense 03
http://lexus.hubns.top:80/castor777/125020917/2689875.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Mineiro 01" tvg-logo="https://www.thesportsdb.com/images/media/honour/logo/53uxv21651083316.png" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Mineiro 01
http://lexus.hubns.top:80/castor777/125020917/2689876.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Mineiro 02" tvg-logo="https://www.thesportsdb.com/images/media/honour/logo/53uxv21651083316.png" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Mineiro 02
http://lexus.hubns.top:80/castor777/125020917/2689877.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Mineiro 03" tvg-logo="https://www.thesportsdb.com/images/media/honour/logo/53uxv21651083316.png" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Mineiro 03
http://lexus.hubns.top:80/castor777/125020917/2689878.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Paraense 01" tvg-logo="" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Paraense 01
http://lexus.hubns.top:80/castor777/125020917/2689879.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Paranaense 01" tvg-logo="https://media.gazetadopovo.com.br/2011/03/670d140bcee7b021a3223a4bb6519ad3-gpLarge.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Paranaense 01
http://lexus.hubns.top:80/castor777/125020917/2689880.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Paranaense 02" tvg-logo="https://media.gazetadopovo.com.br/2011/03/670d140bcee7b021a3223a4bb6519ad3-gpLarge.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Paranaense 02
http://lexus.hubns.top:80/castor777/125020917/2689881.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Paranaense 03" tvg-logo="https://media.gazetadopovo.com.br/2011/03/670d140bcee7b021a3223a4bb6519ad3-gpLarge.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Paranaense 03
http://lexus.hubns.top:80/castor777/125020917/2689882.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Paraibano 01" tvg-logo="https://www.liberdadepb.com.br/wp-content/uploads/2018/11/campeonato-860x420.png" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Paraibano 01
http://lexus.hubns.top:80/castor777/125020917/2689883.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Paulista A2 01" tvg-logo="https://s2.glbimg.com/LQn4m3YxI--xCRTOg6RetU4ELfo=/s.glbimg.com/og/rg/f/original/2016/02/01/jogo-santos-3.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Paulista A2 01
http://lexus.hubns.top:80/castor777/125020917/2689884.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Paulista A2 02" tvg-logo="https://s2.glbimg.com/LQn4m3YxI--xCRTOg6RetU4ELfo=/s.glbimg.com/og/rg/f/original/2016/02/01/jogo-santos-3.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Paulista A2 02
http://lexus.hubns.top:80/castor777/125020917/2689885.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Paulista A2 03" tvg-logo="https://s2.glbimg.com/LQn4m3YxI--xCRTOg6RetU4ELfo=/s.glbimg.com/og/rg/f/original/2016/02/01/jogo-santos-3.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Paulista A2 03
http://lexus.hubns.top:80/castor777/125020917/2689886.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Paulista A2 04" tvg-logo="https://s2.glbimg.com/LQn4m3YxI--xCRTOg6RetU4ELfo=/s.glbimg.com/og/rg/f/original/2016/02/01/jogo-santos-3.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Paulista A2 04
http://lexus.hubns.top:80/castor777/125020917/2689887.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Paulista A3 01" tvg-logo="https://s2.glbimg.com/LQn4m3YxI--xCRTOg6RetU4ELfo=/s.glbimg.com/og/rg/f/original/2016/02/01/jogo-santos-3.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Paulista A3 01
http://lexus.hubns.top:80/castor777/125020917/2689888.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Paulista A3 02" tvg-logo="https://s2.glbimg.com/LQn4m3YxI--xCRTOg6RetU4ELfo=/s.glbimg.com/og/rg/f/original/2016/02/01/jogo-santos-3.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Paulista A3 02
http://lexus.hubns.top:80/castor777/125020917/2689889.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Pernambucano 02" tvg-logo="https://www.belojardim.com.br/arquivos_personalizados/uploads/noticias/fotos/campeonatope_657b27cc325ef.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Pernambucano 02
http://lexus.hubns.top:80/castor777/125020917/2689890.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Piauiense 01" tvg-logo="https://lncimg.lance.com.br/cdn-cgi/image/width=1300,height=750,quality=75,background=white,fit=pad/uploads/2022/01/18/61e6f712c5592.jpeg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Piauiense 01
http://lexus.hubns.top:80/castor777/125020917/2689891.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Piauiense 02" tvg-logo="https://lncimg.lance.com.br/cdn-cgi/image/width=1300,height=750,quality=75,background=white,fit=pad/uploads/2022/01/18/61e6f712c5592.jpeg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Piauiense 02
http://lexus.hubns.top:80/castor777/125020917/2689892.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Potiguar 01" tvg-logo="https://oportaln10.com.br/esportes/wp-content/webp-express/webp-images/doc-root/esportes/wp-content/uploads/2024/01/Design-sem-nome-2024-01-10T202130.142-768x480.png.webp" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Potiguar 01
http://lexus.hubns.top:80/castor777/125020917/2689893.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Potiguar 02" tvg-logo="https://oportaln10.com.br/esportes/wp-content/webp-express/webp-images/doc-root/esportes/wp-content/uploads/2024/01/Design-sem-nome-2024-01-10T202130.142-768x480.png.webp" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Potiguar 02
http://lexus.hubns.top:80/castor777/125020917/2689894.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Sergipano 01" tvg-logo="https://www.sergipeturismo.com/wp-content/uploads/2017/01/campeonato-sergipano.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Sergipano 01
http://lexus.hubns.top:80/castor777/125020917/2689895.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Sergipano 02" tvg-logo="https://www.sergipeturismo.com/wp-content/uploads/2017/01/campeonato-sergipano.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Sergipano 02
http://lexus.hubns.top:80/castor777/125020917/2689896.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Pernambucano 01" tvg-logo="https://www.belojardim.com.br/arquivos_personalizados/uploads/noticias/fotos/campeonatope_657b27cc325ef.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Pernambucano 01
http://lexus.hubns.top:80/castor777/125020917/2689897.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Paulista 01" tvg-logo="https://s2.glbimg.com/LQn4m3YxI--xCRTOg6RetU4ELfo=/s.glbimg.com/og/rg/f/original/2016/02/01/jogo-santos-3.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Paulista 01
http://lexus.hubns.top:80/castor777/125020917/2689898.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Paulista 02" tvg-logo="https://s2.glbimg.com/LQn4m3YxI--xCRTOg6RetU4ELfo=/s.glbimg.com/og/rg/f/original/2016/02/01/jogo-santos-3.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Paulista 02
http://lexus.hubns.top:80/castor777/125020917/2689899.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Campeonato Paulista 03" tvg-logo="https://s2.glbimg.com/LQn4m3YxI--xCRTOg6RetU4ELfo=/s.glbimg.com/og/rg/f/original/2016/02/01/jogo-santos-3.jpg" group-title="⚽  FUTEBOL - REGIONAIS PPV",Campeonato Paulista 03
http://lexus.hubns.top:80/castor777/125020917/2689900.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TOP: Prime Video Amazon ALT 1" tvg-logo="http://fontetop.live:80/images/IHErBxS9BYf0kGwEfOyIZvfDpE4DCGpeWTzq5IxauyTGGLFiTxk47EmcKm2kfAvv.png" group-title="⚽ PRIME VIDEO",TOP: Prime Video Amazon ALT 1
http://lexus.hubns.top:80/castor777/125020917/3663229.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TOP: Prime Video Amazon ALT 2" tvg-logo="http://fontetop.live:80/images/IHErBxS9BYf0kGwEfOyIZvfDpE4DCGpeWTzq5IxauyTGGLFiTxk47EmcKm2kfAvv.png" group-title="⚽ PRIME VIDEO",TOP: Prime Video Amazon ALT 2
http://lexus.hubns.top:80/castor777/125020917/3663230.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TOP: Prime Video Amazon ALT 3" tvg-logo="http://fontetop.live:80/images/IHErBxS9BYf0kGwEfOyIZvfDpE4DCGpeWTzq5IxauyTGGLFiTxk47EmcKm2kfAvv.png" group-title="⚽ PRIME VIDEO",TOP: Prime Video Amazon ALT 3
http://lexus.hubns.top:80/castor777/125020917/3663231.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TOP: Prime Video Amazon ALT 4" tvg-logo="http://fontetop.live:80/images/IHErBxS9BYf0kGwEfOyIZvfDpE4DCGpeWTzq5IxauyTGGLFiTxk47EmcKm2kfAvv.png" group-title="⚽ PRIME VIDEO",TOP: Prime Video Amazon ALT 4
http://lexus.hubns.top:80/castor777/125020917/3663232.m3u8
#EXTINF:-1 tvg-id="" tvg-name="TOP: Prime Video Amazon ALT 5" tvg-logo="http://fontetop.live:80/images/IHErBxS9BYf0kGwEfOyIZvfDpE4DCGpeWTzq5IxauyTGGLFiTxk47EmcKm2kfAvv.png" group-title="⚽ PRIME VIDEO",TOP: Prime Video Amazon ALT 5
http://lexus.hubns.top:80/castor777/125020917/3663233.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Amazon Prime Video 01 ( FONTE 3)" tvg-logo="http://www.fontedecanais.org/logos/canais/primevideo.png" group-title="⚽ PRIME VIDEO",Amazon Prime Video 01 ( FONTE 3)
http://lexus.hubns.top:80/castor777/125020917/4191879.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Amazon Prime Video 02 (FONTE 3)" tvg-logo="http://www.fontedecanais.org/logos/canais/primevideo.png" group-title="⚽ PRIME VIDEO",Amazon Prime Video 02 (FONTE 3)
http://lexus.hubns.top:80/castor777/125020917/4191880.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Amazon Prime Video 03 ( FONTE 3)" tvg-logo="http://www.fontedecanais.org/logos/canais/primevideo.png" group-title="⚽ PRIME VIDEO",Amazon Prime Video 03 ( FONTE 3)
http://lexus.hubns.top:80/castor777/125020917/4191881.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO MAX 01 (FONTE ALTERNATIVA 2)" tvg-logo="http://the-img.xyz/images/max.png" group-title="⚽ HBO MAX",HBO MAX 01 (FONTE ALTERNATIVA 2)
http://lexus.hubns.top:80/castor777/125020917/4201140.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CANAL GOAT 02" tvg-logo="https://s2.glbimg.com/_XLUEzacp79jGEhL-IfbqF-zoXk=/0x0:726x273/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/B/c/3wY5SfR7GPAG9ZQk1aAA/whatsapp-image-2023-08-04-at-16.44.03.jpeg" group-title="⚽ ESPORTES & PPV",CANAL GOAT 02
http://lexus.hubns.top:80/castor777/125020917/5471079.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CANAL GOAT 03" tvg-logo="https://s2.glbimg.com/_XLUEzacp79jGEhL-IfbqF-zoXk=/0x0:726x273/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/B/c/3wY5SfR7GPAG9ZQk1aAA/whatsapp-image-2023-08-04-at-16.44.03.jpeg" group-title="⚽ ESPORTES & PPV",CANAL GOAT 03
http://lexus.hubns.top:80/castor777/125020917/5471080.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CANAL GOAT 04" tvg-logo="https://s2.glbimg.com/_XLUEzacp79jGEhL-IfbqF-zoXk=/0x0:726x273/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/B/c/3wY5SfR7GPAG9ZQk1aAA/whatsapp-image-2023-08-04-at-16.44.03.jpeg" group-title="⚽ ESPORTES & PPV",CANAL GOAT 04
http://lexus.hubns.top:80/castor777/125020917/5471081.m3u8
#EXTINF:-1 tvg-id="PremiereClubes.br" tvg-name="PREMIERE CLUBES HD" tvg-logo="https://cdn.mitvstatic.com/channels/br_premiere-clubes_m.png" group-title="⚽ PREMIERE",PREMIERE CLUBES HD
http://lexus.hubns.top:80/castor777/125020917/1257088.m3u8
#EXTINF:-1 tvg-id="PremiereClubes.br" tvg-name="PREMIERE CLUBES FHD H265" tvg-logo="https://cdn.mitvstatic.com/channels/br_premiere-clubes_m.png" group-title="⚽ PREMIERE",PREMIERE CLUBES FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257087.m3u8
#EXTINF:-1 tvg-id="PremiereClubes.br" tvg-name="PREMIERE CLUBES HD H265" tvg-logo="https://cdn.mitvstatic.com/channels/br_premiere-clubes_m.png" group-title="⚽ PREMIERE",PREMIERE CLUBES HD H265
http://lexus.hubns.top:80/castor777/125020917/1257086.m3u8
#EXTINF:-1 tvg-id="PremiereClubes.br" tvg-name="PREMIERE CLUBES FHD H264" tvg-logo="https://cdn.mitvstatic.com/channels/br_premiere-clubes_m.png" group-title="⚽ PREMIERE",PREMIERE CLUBES FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257085.m3u8
#EXTINF:-1 tvg-id="br#premiere-8" tvg-name="PREMIERE 8 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 8 HD
http://lexus.hubns.top:80/castor777/125020917/1257084.m3u8
#EXTINF:-1 tvg-id="br#premiere-7" tvg-name="PREMIERE 7²" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 7²
http://lexus.hubns.top:80/castor777/125020917/1257083.m3u8
#EXTINF:-1 tvg-id="br#premiere-7" tvg-name="PREMIERE 7 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 7 HD
http://lexus.hubns.top:80/castor777/125020917/1257082.m3u8
#EXTINF:-1 tvg-id="br#premiere-7" tvg-name="PREMIERE 7 FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 7 FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257081.m3u8
#EXTINF:-1 tvg-id="br#premiere-7" tvg-name="PREMIERE 7" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 7
http://lexus.hubns.top:80/castor777/125020917/1257079.m3u8
#EXTINF:-1 tvg-id="br#premiere-6-hd" tvg-name="PREMIERE 6 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 6 HD
http://lexus.hubns.top:80/castor777/125020917/1257078.m3u8
#EXTINF:-1 tvg-id="br#premiere-6-hd" tvg-name="PREMIERE 6 FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 6 FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257077.m3u8
#EXTINF:-1 tvg-id="br#premiere-6-hd" tvg-name="PREMIERE 6 FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 6 FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257076.m3u8
#EXTINF:-1 tvg-id="br#premiere-6-hd" tvg-name="PREMIERE 6" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 6
http://lexus.hubns.top:80/castor777/125020917/1257075.m3u8
#EXTINF:-1 tvg-id="br#premiere-5-brazil" tvg-name="PREMIERE 5 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 5 HD
http://lexus.hubns.top:80/castor777/125020917/1257074.m3u8
#EXTINF:-1 tvg-id="br#premiere-5-brazil" tvg-name="PREMIERE 5 FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 5 FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257073.m3u8
#EXTINF:-1 tvg-id="br#premiere-5-brazil" tvg-name="PREMIERE 5 FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 5 FHD
http://lexus.hubns.top:80/castor777/125020917/1257072.m3u8
#EXTINF:-1 tvg-id="br#premiere-5-brazil" tvg-name="PREMIERE 5" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 5
http://lexus.hubns.top:80/castor777/125020917/1257071.m3u8
#EXTINF:-1 tvg-id="br#premiere-4" tvg-name="PREMIERE 4 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 4 HD
http://lexus.hubns.top:80/castor777/125020917/1257070.m3u8
#EXTINF:-1 tvg-id="br#premiere-4" tvg-name="PREMIERE 4 FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 4 FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257069.m3u8
#EXTINF:-1 tvg-id="br#premiere-4" tvg-name="PREMIERE 4 FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 4 FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257068.m3u8
#EXTINF:-1 tvg-id="br#premiere-4" tvg-name="PREMIERE 4" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 4
http://lexus.hubns.top:80/castor777/125020917/1257067.m3u8
#EXTINF:-1 tvg-id="br#premiere-3" tvg-name="PREMIERE 3 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 3 HD
http://lexus.hubns.top:80/castor777/125020917/1257066.m3u8
#EXTINF:-1 tvg-id="br#premiere-3" tvg-name="PREMIERE  3 FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE  3 FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1257065.m3u8
#EXTINF:-1 tvg-id="br#premiere-3" tvg-name="PREMIERE 3 FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 3 FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257064.m3u8
#EXTINF:-1 tvg-id="br#premiere-3" tvg-name="PREMIERE 3 FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 3 FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257063.m3u8
#EXTINF:-1 tvg-id="br#premiere-3" tvg-name="PREMIERE 3" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 3
http://lexus.hubns.top:80/castor777/125020917/1257062.m3u8
#EXTINF:-1 tvg-id="br#premiere-2" tvg-name="PREMIERE 2 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 2 HD
http://lexus.hubns.top:80/castor777/125020917/1257061.m3u8
#EXTINF:-1 tvg-id="br#premiere-2" tvg-name="PREMIERE 2 FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 2 FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1257060.m3u8
#EXTINF:-1 tvg-id="br#premiere-2" tvg-name="PREMIERE 2 FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 2 FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257059.m3u8
#EXTINF:-1 tvg-id="br#premiere-2" tvg-name="PREMIERE 2 FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 2 FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257058.m3u8
#EXTINF:-1 tvg-id="24HAnimes" tvg-name="PREMIERE 2" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" group-title="⚽ PREMIERE",PREMIERE 2
http://lexus.hubns.top:80/castor777/125020917/1257057.m3u8
#EXTINF:-1 tvg-id="PremiereClubes.br" tvg-name="PREMIERE CLUBES" tvg-logo="https://cdn.mitvstatic.com/channels/br_premiere-clubes_m.png" group-title="⚽ PREMIERE",PREMIERE CLUBES
http://lexus.hubns.top:80/castor777/125020917/1256415.m3u8
#EXTINF:-1 tvg-id="br#gnt-hd" tvg-name="GNT" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/GNT_logo-roxo.svg/1200px-GNT_logo-roxo.svg.png" group-title="✅ GLOBOSAT",GNT
http://lexus.hubns.top:80/castor777/125020917/1256865.m3u8
#EXTINF:-1 tvg-id="br#gnt-hd" tvg-name="GNT FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/GNT_logo-roxo.svg/1200px-GNT_logo-roxo.svg.png" group-title="✅ GLOBOSAT",GNT FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256866.m3u8
#EXTINF:-1 tvg-id="br#gnt-hd" tvg-name="GNT FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/GNT_logo-roxo.svg/1200px-GNT_logo-roxo.svg.png" group-title="✅ GLOBOSAT",GNT FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256867.m3u8
#EXTINF:-1 tvg-id="br#gnt-hd" tvg-name="GNT FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/GNT_logo-roxo.svg/1200px-GNT_logo-roxo.svg.png" group-title="✅ GLOBOSAT",GNT FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1256868.m3u8
#EXTINF:-1 tvg-id="br#gnt-hd" tvg-name="GNT HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/GNT_logo-roxo.svg/1200px-GNT_logo-roxo.svg.png" group-title="✅ GLOBOSAT",GNT HD
http://lexus.hubns.top:80/castor777/125020917/1256869.m3u8
#EXTINF:-1 tvg-id="br#multishow-hd" tvg-name="MULTISHOW HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Multishow_logo_red_2012.svg/2260px-Multishow_logo_red_2012.svg.png" group-title="✅ GLOBOSAT",MULTISHOW HD
http://lexus.hubns.top:80/castor777/125020917/1257002.m3u8
#EXTINF:-1 tvg-id="br#multishow-hd" tvg-name="MULTISHOW FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Multishow_logo_red_2012.svg/2260px-Multishow_logo_red_2012.svg.png" group-title="✅ GLOBOSAT",MULTISHOW FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1257001.m3u8
#EXTINF:-1 tvg-id="br#multishow-hd" tvg-name="MULTISHOW FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Multishow_logo_red_2012.svg/2260px-Multishow_logo_red_2012.svg.png" group-title="✅ GLOBOSAT",MULTISHOW FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257000.m3u8
#EXTINF:-1 tvg-id="br#multishow-hd" tvg-name="MULTISHOW FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Multishow_logo_red_2012.svg/2260px-Multishow_logo_red_2012.svg.png" group-title="✅ GLOBOSAT",MULTISHOW FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256999.m3u8
#EXTINF:-1 tvg-id="br#multishow-hd" tvg-name="MULTISHOW" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Multishow_logo_red_2012.svg/2260px-Multishow_logo_red_2012.svg.png" group-title="✅ GLOBOSAT",MULTISHOW
http://lexus.hubns.top:80/castor777/125020917/1256998.m3u8
#EXTINF:-1 tvg-id="br#viva-hd" tvg-name="VIVA HD" tvg-logo="https://gkpb.com.br/wp-content/uploads/2018/03/novo-logo-canal-viva.jpg" group-title="✅ GLOBOSAT",VIVA HD
http://lexus.hubns.top:80/castor777/125020917/1257433.m3u8
#EXTINF:-1 tvg-id="br#viva-hd" tvg-name="VIVA FHD H265" tvg-logo="https://gkpb.com.br/wp-content/uploads/2018/03/novo-logo-canal-viva.jpg" group-title="✅ GLOBOSAT",VIVA FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257432.m3u8
#EXTINF:-1 tvg-id="br#viva-hd" tvg-name="VIVA FHD H264" tvg-logo="https://gkpb.com.br/wp-content/uploads/2018/03/novo-logo-canal-viva.jpg" group-title="✅ GLOBOSAT",VIVA FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257431.m3u8
#EXTINF:-1 tvg-id="br#viva-hd" tvg-name="VIVA FHD" tvg-logo="https://gkpb.com.br/wp-content/uploads/2018/03/novo-logo-canal-viva.jpg" group-title="✅ GLOBOSAT",VIVA FHD
http://lexus.hubns.top:80/castor777/125020917/1257430.m3u8
#EXTINF:-1 tvg-id="br#viva-hd" tvg-name="VIVA" tvg-logo="https://gkpb.com.br/wp-content/uploads/2018/03/novo-logo-canal-viva.jpg" group-title="✅ GLOBOSAT",VIVA
http://lexus.hubns.top:80/castor777/125020917/1257429.m3u8
#EXTINF:-1 tvg-id="br#mtv" tvg-name="MTV²" tvg-logo="https://logosmarcas.net/wp-content/uploads/2020/10/MTV-Logo.png" group-title="✅ GLOBOSAT",MTV²
http://lexus.hubns.top:80/castor777/125020917/1256997.m3u8
#EXTINF:-1 tvg-id="MTVLive.uk" tvg-name="MTV LIVE FHD" tvg-logo="https://logosmarcas.net/wp-content/uploads/2020/10/MTV-Logo.png" group-title="✅ GLOBOSAT",MTV LIVE FHD
http://lexus.hubns.top:80/castor777/125020917/1256996.m3u8
#EXTINF:-1 tvg-id="br#mtv" tvg-name="MTV HD¹" tvg-logo="https://logosmarcas.net/wp-content/uploads/2020/10/MTV-Logo.png" group-title="✅ GLOBOSAT",MTV HD¹
http://lexus.hubns.top:80/castor777/125020917/1256994.m3u8
#EXTINF:-1 tvg-id="br#mtv" tvg-name="MTV HD" tvg-logo="https://logosmarcas.net/wp-content/uploads/2020/10/MTV-Logo.png" group-title="✅ GLOBOSAT",MTV HD
http://lexus.hubns.top:80/castor777/125020917/1256993.m3u8
#EXTINF:-1 tvg-id="br#mtv" tvg-name="MTV FHD H265" tvg-logo="https://logosmarcas.net/wp-content/uploads/2020/10/MTV-Logo.png" group-title="✅ GLOBOSAT",MTV FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256992.m3u8
#EXTINF:-1 tvg-id="br#mtv" tvg-name="MTV FHD" tvg-logo="https://logosmarcas.net/wp-content/uploads/2020/10/MTV-Logo.png" group-title="✅ GLOBOSAT",MTV FHD
http://lexus.hubns.top:80/castor777/125020917/1256991.m3u8
#EXTINF:-1 tvg-id="br#mtv" tvg-name="MTV FHD" tvg-logo="https://logosmarcas.net/wp-content/uploads/2020/10/MTV-Logo.png" group-title="✅ GLOBOSAT",MTV FHD
http://lexus.hubns.top:80/castor777/125020917/1256990.m3u8
#EXTINF:-1 tvg-id="br#mtv" tvg-name="MTV" tvg-logo="https://logosmarcas.net/wp-content/uploads/2020/10/MTV-Logo.png" group-title="✅ GLOBOSAT",MTV
http://lexus.hubns.top:80/castor777/125020917/1256989.m3u8
#EXTINF:-1 tvg-id="" tvg-name="GE FAST HD" tvg-logo="https://s2.glbimg.com/K9UcXFImxDOqgbOJEn_yT-YCEV4=/285x285/https://s2.glbimg.com/gpHRWkVEklSy9sLihfB1e7s44zE=/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2022/o/l/K09AXlQK2RbJTlBMlDMA/logo-ge-fast.png" group-title="✅ GLOBOSAT",GE FAST HD
http://lexus.hubns.top:80/castor777/125020917/1257504.m3u8
#EXTINF:-1 tvg-id="br#globosat-1" tvg-name="MAIS GLOBOSAT HD" tvg-logo="https://observatoriodatv.uol.com.br/wp-content/uploads/2018/12/globosat-vice-parceria-960x556.png" group-title="✅ GLOBOSAT",MAIS GLOBOSAT HD
http://lexus.hubns.top:80/castor777/125020917/1256981.m3u8
#EXTINF:-1 tvg-id="br#globosat-1" tvg-name="MAIS GLOBOSAT FHD H265" tvg-logo="https://observatoriodatv.uol.com.br/wp-content/uploads/2018/12/globosat-vice-parceria-960x556.png" group-title="✅ GLOBOSAT",MAIS GLOBOSAT FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256980.m3u8
#EXTINF:-1 tvg-id="br#globosat-1" tvg-name="MAIS GLOBOSAT FHD H264" tvg-logo="https://observatoriodatv.uol.com.br/wp-content/uploads/2018/12/globosat-vice-parceria-960x556.png" group-title="✅ GLOBOSAT",MAIS GLOBOSAT FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256979.m3u8
#EXTINF:-1 tvg-id="br#globosat-1" tvg-name="MAIS GLOBOSAT" tvg-logo="https://observatoriodatv.uol.com.br/wp-content/uploads/2018/12/globosat-vice-parceria-960x556.png" group-title="✅ GLOBOSAT",MAIS GLOBOSAT
http://lexus.hubns.top:80/castor777/125020917/1256978.m3u8
#EXTINF:-1 tvg-id="HBOPlus.br" tvg-name="HBO+ HD" tvg-logo="https://seeklogo.com/images/H/hbo-plus-logo-E8E9BF8A5F-seeklogo.com.png" group-title="✅ HBO",HBO+ HD
http://lexus.hubns.top:80/castor777/125020917/1256924.m3u8
#EXTINF:-1 tvg-id="HBOPlus.br" tvg-name="HBO+ FHD H265 [OPCAO2]" tvg-logo="https://seeklogo.com/images/H/hbo-plus-logo-E8E9BF8A5F-seeklogo.com.png" group-title="✅ HBO",HBO+ FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1256923.m3u8
#EXTINF:-1 tvg-id="HBOPlus.br" tvg-name="HBO+ FHD H265" tvg-logo="https://seeklogo.com/images/H/hbo-plus-logo-E8E9BF8A5F-seeklogo.com.png" group-title="✅ HBO",HBO+ FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256922.m3u8
#EXTINF:-1 tvg-id="HBOPlus.br" tvg-name="HBO+ FHD H264" tvg-logo="https://seeklogo.com/images/H/hbo-plus-logo-E8E9BF8A5F-seeklogo.com.png" group-title="✅ HBO",HBO+ FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256921.m3u8
#EXTINF:-1 tvg-id="HBOPlus.br" tvg-name="HBO+" tvg-logo="https://seeklogo.com/images/H/hbo-plus-logo-E8E9BF8A5F-seeklogo.com.png" group-title="✅ HBO",HBO+
http://lexus.hubns.top:80/castor777/125020917/1256920.m3u8
#EXTINF:-1 tvg-id="HBOXtreme.br" tvg-name="HBO XTREME HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/HBO_Xtreme.svg/1200px-HBO_Xtreme.svg.png" group-title="✅ HBO",HBO XTREME HD
http://lexus.hubns.top:80/castor777/125020917/1256919.m3u8
#EXTINF:-1 tvg-id="HBOXtreme.br" tvg-name="HBO XTREME FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/HBO_Xtreme.svg/1200px-HBO_Xtreme.svg.png" group-title="✅ HBO",HBO XTREME FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256917.m3u8
#EXTINF:-1 tvg-id="HBOXtreme.br" tvg-name="HBO XTREME FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/HBO_Xtreme.svg/1200px-HBO_Xtreme.svg.png" group-title="✅ HBO",HBO XTREME FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256916.m3u8
#EXTINF:-1 tvg-id="HBOXtreme.br" tvg-name="HBO XTREME" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/HBO_Xtreme.svg/1200px-HBO_Xtreme.svg.png" group-title="✅ HBO",HBO XTREME
http://lexus.hubns.top:80/castor777/125020917/1256915.m3u8
#EXTINF:-1 tvg-id="HBOSignature.br" tvg-name="HBO SIGNATURE HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/HBO_Signature.svg/1200px-HBO_Signature.svg.png" group-title="✅ HBO",HBO SIGNATURE HD
http://lexus.hubns.top:80/castor777/125020917/1256914.m3u8
#EXTINF:-1 tvg-id="HBOSignature.br" tvg-name="HBO SIGNATURE FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/HBO_Signature.svg/1200px-HBO_Signature.svg.png" group-title="✅ HBO",HBO SIGNATURE FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1256913.m3u8
#EXTINF:-1 tvg-id="HBOSignature.br" tvg-name="HBO SIGNATURE FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/HBO_Signature.svg/1200px-HBO_Signature.svg.png" group-title="✅ HBO",HBO SIGNATURE FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256912.m3u8
#EXTINF:-1 tvg-id="HBOSignature.br" tvg-name="HBO SIGNATURE FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/HBO_Signature.svg/1200px-HBO_Signature.svg.png" group-title="✅ HBO",HBO SIGNATURE FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256911.m3u8
#EXTINF:-1 tvg-id="HBOSignature.br" tvg-name="HBO SIGNATURE" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/HBO_Signature.svg/1200px-HBO_Signature.svg.png" group-title="✅ HBO",HBO SIGNATURE
http://lexus.hubns.top:80/castor777/125020917/1256909.m3u8
#EXTINF:-1 tvg-id="HBOPop.br" tvg-name="HBO POP²" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/HBO_Pop.svg/1200px-HBO_Pop.svg.png" group-title="✅ HBO",HBO POP²
http://lexus.hubns.top:80/castor777/125020917/1256908.m3u8
#EXTINF:-1 tvg-id="HBOPop.br" tvg-name="HBO POP HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/HBO_Pop.svg/1200px-HBO_Pop.svg.png" group-title="✅ HBO",HBO POP HD
http://lexus.hubns.top:80/castor777/125020917/1256906.m3u8
#EXTINF:-1 tvg-id="HBOPop.br" tvg-name="HBO POP FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/HBO_Pop.svg/1200px-HBO_Pop.svg.png" group-title="✅ HBO",HBO POP FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256904.m3u8
#EXTINF:-1 tvg-id="HBOPop.br" tvg-name="HBO POP FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/HBO_Pop.svg/1200px-HBO_Pop.svg.png" group-title="✅ HBO",HBO POP FHD
http://lexus.hubns.top:80/castor777/125020917/1256903.m3u8
#EXTINF:-1 tvg-id="HBOPop.br" tvg-name="HBO POP FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/HBO_Pop.svg/1280px-HBO_Pop.svg.png" group-title="✅ HBO",HBO POP FHD
http://lexus.hubns.top:80/castor777/125020917/1256902.m3u8
#EXTINF:-1 tvg-id="HBOPop.br" tvg-name="HBO POP" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/HBO_Pop.svg/1200px-HBO_Pop.svg.png" group-title="✅ HBO",HBO POP
http://lexus.hubns.top:80/castor777/125020917/1256901.m3u8
#EXTINF:-1 tvg-id="" tvg-name="HBO PLUS FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/3/3d/HBO_Plus.png" group-title="✅ HBO",HBO PLUS FHD
http://lexus.hubns.top:80/castor777/125020917/1256900.m3u8
#EXTINF:-1 tvg-id="HBOMundi.br" tvg-name="HBO MUNDI FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/HBO_Mundi.svg/1200px-HBO_Mundi.svg.png" group-title="✅ HBO",HBO MUNDI FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1256898.m3u8
#EXTINF:-1 tvg-id="HBOMundi.br" tvg-name="HBO MUNDI FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/HBO_Mundi.svg/1200px-HBO_Mundi.svg.png" group-title="✅ HBO",HBO MUNDI FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256897.m3u8
#EXTINF:-1 tvg-id="HBOMundi.br" tvg-name="HBO MUNDI FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/HBO_Mundi.svg/1200px-HBO_Mundi.svg.png" group-title="✅ HBO",HBO MUNDI FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256896.m3u8
#EXTINF:-1 tvg-id="HBOMundi.br" tvg-name="HBO MUNDI" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/HBO_Mundi.svg/1200px-HBO_Mundi.svg.png" group-title="✅ HBO",HBO MUNDI
http://lexus.hubns.top:80/castor777/125020917/1256894.m3u8
#EXTINF:-1 tvg-id="HBO.br" tvg-name="HBO HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/1280px-HBO_logo.svg.png" group-title="✅ HBO",HBO HD
http://lexus.hubns.top:80/castor777/125020917/1256893.m3u8
#EXTINF:-1 tvg-id="HBO.br" tvg-name="HBO FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/1280px-HBO_logo.svg.png" group-title="✅ HBO",HBO FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1256892.m3u8
#EXTINF:-1 tvg-id="HBO.br" tvg-name="HBO FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/1280px-HBO_logo.svg.png" group-title="✅ HBO",HBO FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256891.m3u8
#EXTINF:-1 tvg-id="HBO.br" tvg-name="HBO FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/1280px-HBO_logo.svg.png" group-title="✅ HBO",HBO FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256890.m3u8
#EXTINF:-1 tvg-id="HBO.br" tvg-name="HBO FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/1280px-HBO_logo.svg.png" group-title="✅ HBO",HBO FHD
http://lexus.hubns.top:80/castor777/125020917/1256889.m3u8
#EXTINF:-1 tvg-id="HBOFamily.br" tvg-name="HBO FAMILY²" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/a/a1/HBO_Family_Logo.png" group-title="✅ HBO",HBO FAMILY²
http://lexus.hubns.top:80/castor777/125020917/1256888.m3u8
#EXTINF:-1 tvg-id="HBOFamily.br" tvg-name="HBO FAMILY HD¹" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/a/a1/HBO_Family_Logo.png" group-title="✅ HBO",HBO FAMILY HD¹
http://lexus.hubns.top:80/castor777/125020917/1256887.m3u8
#EXTINF:-1 tvg-id="HBOFamily.br" tvg-name="HBO FAMILY HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/a/a1/HBO_Family_Logo.png" group-title="✅ HBO",HBO FAMILY HD
http://lexus.hubns.top:80/castor777/125020917/1256886.m3u8
#EXTINF:-1 tvg-id="HBOFamily.br" tvg-name="HBO FAMILY FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/a/a1/HBO_Family_Logo.png" group-title="✅ HBO",HBO FAMILY FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256884.m3u8
#EXTINF:-1 tvg-id="HBOFamily.br" tvg-name="HBO FAMILY FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/a/a1/HBO_Family_Logo.png" group-title="✅ HBO",HBO FAMILY FHD
http://lexus.hubns.top:80/castor777/125020917/1256883.m3u8
#EXTINF:-1 tvg-id="HBOFamily.br" tvg-name="HBO FAMILY FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/a/a1/HBO_Family_Logo.png" group-title="✅ HBO",HBO FAMILY FHD
http://lexus.hubns.top:80/castor777/125020917/1256882.m3u8
#EXTINF:-1 tvg-id="HBOFamily.br" tvg-name="HBO FAMILY" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/a/a1/HBO_Family_Logo.png" group-title="✅ HBO",HBO FAMILY
http://lexus.hubns.top:80/castor777/125020917/1256881.m3u8
#EXTINF:-1 tvg-id="HBOXtreme.br" tvg-name="HBO EXTREME FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/HBO_Xtreme.svg/1200px-HBO_Xtreme.svg.png" group-title="✅ HBO",HBO EXTREME FHD
http://lexus.hubns.top:80/castor777/125020917/1256880.m3u8
#EXTINF:-1 tvg-id="HBO2.br" tvg-name="HBO 2 HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/9/9e/HBO_2_Logo_Poland.png" group-title="✅ HBO",HBO 2 HD
http://lexus.hubns.top:80/castor777/125020917/1256879.m3u8
#EXTINF:-1 tvg-id="HBO2.br" tvg-name="HBO 2 FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/9/9e/HBO_2_Logo_Poland.png" group-title="✅ HBO",HBO 2 FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1256878.m3u8
#EXTINF:-1 tvg-id="HBO2.br" tvg-name="HBO 2 FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/9/9e/HBO_2_Logo_Poland.png" group-title="✅ HBO",HBO 2 FHD H265
http://lexus.hubns.top:80/castor777/125020917/1256877.m3u8
#EXTINF:-1 tvg-id="HBO2.br" tvg-name="HBO 2 FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/9/9e/HBO_2_Logo_Poland.png" group-title="✅ HBO",HBO 2 FHD H264
http://lexus.hubns.top:80/castor777/125020917/1256876.m3u8
#EXTINF:-1 tvg-id="HBO2.br" tvg-name="HBO 2 FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/9/9e/HBO_2_Logo_Poland.png" group-title="✅ HBO",HBO 2 FHD
http://lexus.hubns.top:80/castor777/125020917/1256875.m3u8
#EXTINF:-1 tvg-id="HBO2.br" tvg-name="HBO 2" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/9/9e/HBO_2_Logo_Poland.png" group-title="✅ HBO",HBO 2
http://lexus.hubns.top:80/castor777/125020917/1256874.m3u8
#EXTINF:-1 tvg-id="HBO.br" tvg-name="HBO" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/1280px-HBO_logo.svg.png" group-title="✅ HBO",HBO
http://lexus.hubns.top:80/castor777/125020917/1256873.m3u8
#EXTINF:-1 tvg-id="br#telecine-touch-hd" tvg-name="TELECINE TOUCH HD" tvg-logo="https://static.wikia.nocookie.net/logosfake/images/0/08/Telecine_Touch_2010.svg/revision/latest?cb=20201107151008" group-title="✅ TELECINE",TELECINE TOUCH HD
http://lexus.hubns.top:80/castor777/125020917/1257297.m3u8
#EXTINF:-1 tvg-id="br#telecine-touch-hd" tvg-name="TELECINE TOUCH FHD H265" tvg-logo="https://static.wikia.nocookie.net/logosfake/images/0/08/Telecine_Touch_2010.svg/revision/latest?cb=20201107151008" group-title="✅ TELECINE",TELECINE TOUCH FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257295.m3u8
#EXTINF:-1 tvg-id="br#telecine-touch-hd" tvg-name="TELECINE TOUCH FHD H264" tvg-logo="https://static.wikia.nocookie.net/logosfake/images/0/08/Telecine_Touch_2010.svg/revision/latest?cb=20201107151008" group-title="✅ TELECINE",TELECINE TOUCH FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257294.m3u8
#EXTINF:-1 tvg-id="br#telecine-touch-hd" tvg-name="TELECINE TOUCH FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/a/a1/Telecine_Touch.png" group-title="✅ TELECINE",TELECINE TOUCH FHD
http://lexus.hubns.top:80/castor777/125020917/1257293.m3u8
#EXTINF:-1 tvg-id="br#telecine-touch-hd" tvg-name="TELECINE TOUCH" tvg-logo="https://static.wikia.nocookie.net/logosfake/images/0/08/Telecine_Touch_2010.svg/revision/latest?cb=20201107151008" group-title="✅ TELECINE",TELECINE TOUCH
http://lexus.hubns.top:80/castor777/125020917/1257292.m3u8
#EXTINF:-1 tvg-id="br#telecine-premium-hd" tvg-name="TELECINE PREMIUM HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/0/09/Telecine_Premium.png" group-title="✅ TELECINE",TELECINE PREMIUM HD
http://lexus.hubns.top:80/castor777/125020917/1257291.m3u8
#EXTINF:-1 tvg-id="br#telecine-premium-hd" tvg-name="TELECINE PREMIUM FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/0/09/Telecine_Premium.png" group-title="✅ TELECINE",TELECINE PREMIUM FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1257290.m3u8
#EXTINF:-1 tvg-id="br#telecine-premium-hd" tvg-name="TELECINE PREMIUM FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/0/09/Telecine_Premium.png" group-title="✅ TELECINE",TELECINE PREMIUM FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257289.m3u8
#EXTINF:-1 tvg-id="br#telecine-premium-hd" tvg-name="TELECINE PREMIUM FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/0/09/Telecine_Premium.png" group-title="✅ TELECINE",TELECINE PREMIUM FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257288.m3u8
#EXTINF:-1 tvg-id="br#telecine-premium-hd" tvg-name="TELECINE PREMIUM FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/0/09/Telecine_Premium.png" group-title="✅ TELECINE",TELECINE PREMIUM FHD
http://lexus.hubns.top:80/castor777/125020917/1257287.m3u8
#EXTINF:-1 tvg-id="br#telecine-premium-hd" tvg-name="TELECINE PREMIUM" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/0/09/Telecine_Premium.png" group-title="✅ TELECINE",TELECINE PREMIUM
http://lexus.hubns.top:80/castor777/125020917/1257286.m3u8
#EXTINF:-1 tvg-id="br#telecine-pipoca-hd" tvg-name="TELECINE PIPOCA HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Telecine_Pipoca.png" group-title="✅ TELECINE",TELECINE PIPOCA HD
http://lexus.hubns.top:80/castor777/125020917/1257285.m3u8
#EXTINF:-1 tvg-id="br#telecine-pipoca-hd" tvg-name="TELECINE PIPOCA FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Telecine_Pipoca.png" group-title="✅ TELECINE",TELECINE PIPOCA FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1257284.m3u8
#EXTINF:-1 tvg-id="br#telecine-pipoca-hd" tvg-name="TELECINE PIPOCA FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Telecine_Pipoca.png" group-title="✅ TELECINE",TELECINE PIPOCA FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257283.m3u8
#EXTINF:-1 tvg-id="br#telecine-pipoca-hd" tvg-name="TELECINE PIPOCA FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Telecine_Pipoca.png" group-title="✅ TELECINE",TELECINE PIPOCA FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257282.m3u8
#EXTINF:-1 tvg-id="br#telecine-pipoca-hd" tvg-name="TELECINE PIPOCA FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Telecine_Pipoca.png" group-title="✅ TELECINE",TELECINE PIPOCA FHD
http://lexus.hubns.top:80/castor777/125020917/1257281.m3u8
#EXTINF:-1 tvg-id="br#telecine-pipoca-hd" tvg-name="TELECINE PIPOCA" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Telecine_Pipoca.png" group-title="✅ TELECINE",TELECINE PIPOCA
http://lexus.hubns.top:80/castor777/125020917/1257280.m3u8
#EXTINF:-1 tvg-id="br#telecine-fun-hd" tvg-name="TELECINE FUN HD¹" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/4/4e/Telecine_Fun_2.png" group-title="✅ TELECINE",TELECINE FUN HD¹
http://lexus.hubns.top:80/castor777/125020917/1257279.m3u8
#EXTINF:-1 tvg-id="br#telecine-fun-hd" tvg-name="TELECINE FUN HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/4/4e/Telecine_Fun_2.png" group-title="✅ TELECINE",TELECINE FUN HD
http://lexus.hubns.top:80/castor777/125020917/1257278.m3u8
#EXTINF:-1 tvg-id="br#telecine-fun-hd" tvg-name="TELECINE FUN FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/4/4e/Telecine_Fun_2.png" group-title="✅ TELECINE",TELECINE FUN FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1257277.m3u8
#EXTINF:-1 tvg-id="br#telecine-fun-hd" tvg-name="TELECINE FUN FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/4/4e/Telecine_Fun_2.png" group-title="✅ TELECINE",TELECINE FUN FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257276.m3u8
#EXTINF:-1 tvg-id="br#telecine-fun-hd" tvg-name="TELECINE FUN FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/4/4e/Telecine_Fun_2.png" group-title="✅ TELECINE",TELECINE FUN FHD
http://lexus.hubns.top:80/castor777/125020917/1257275.m3u8
#EXTINF:-1 tvg-id="br#telecine-fun-hd" tvg-name="TELECINE FUN" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/4/4e/Telecine_Fun_2.png" group-title="✅ TELECINE",TELECINE FUN
http://lexus.hubns.top:80/castor777/125020917/1257274.m3u8
#EXTINF:-1 tvg-id="br#telecine-cult-hd" tvg-name="TELECINE CULT HD" tvg-logo="https://static.guiadetv.com/channel/aaEDkMCWERioLFpezoMwpzdEXw0iRt7pnHkxTpe2.png" group-title="✅ TELECINE",TELECINE CULT HD
http://lexus.hubns.top:80/castor777/125020917/1257273.m3u8
#EXTINF:-1 tvg-id="br#telecine-cult-hd" tvg-name="TELECINE CULT FHD H265 [OPCAO2]" tvg-logo="https://static.guiadetv.com/channel/aaEDkMCWERioLFpezoMwpzdEXw0iRt7pnHkxTpe2.png" group-title="✅ TELECINE",TELECINE CULT FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1257272.m3u8
#EXTINF:-1 tvg-id="br#telecine-cult-hd" tvg-name="TELECINE CULT FHD H265" tvg-logo="https://static.guiadetv.com/channel/aaEDkMCWERioLFpezoMwpzdEXw0iRt7pnHkxTpe2.png" group-title="✅ TELECINE",TELECINE CULT FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257271.m3u8
#EXTINF:-1 tvg-id="br#telecine-cult-hd" tvg-name="TELECINE CULT FHD H264" tvg-logo="https://static.guiadetv.com/channel/aaEDkMCWERioLFpezoMwpzdEXw0iRt7pnHkxTpe2.png" group-title="✅ TELECINE",TELECINE CULT FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257270.m3u8
#EXTINF:-1 tvg-id="br#telecine-cult-hd" tvg-name="TELECINE CULT FHD" tvg-logo="https://static.guiadetv.com/channel/aaEDkMCWERioLFpezoMwpzdEXw0iRt7pnHkxTpe2.png" group-title="✅ TELECINE",TELECINE CULT FHD
http://lexus.hubns.top:80/castor777/125020917/1257269.m3u8
#EXTINF:-1 tvg-id="br#telecine-cult-hd" tvg-name="TELECINE CULT" tvg-logo="https://static.guiadetv.com/channel/aaEDkMCWERioLFpezoMwpzdEXw0iRt7pnHkxTpe2.png" group-title="✅ TELECINE",TELECINE CULT
http://lexus.hubns.top:80/castor777/125020917/1257268.m3u8
#EXTINF:-1 tvg-id="br#telecine-action-hd" tvg-name="TELECINE ACTION HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/3/37/Telecine_Action_2.png" group-title="✅ TELECINE",TELECINE ACTION HD
http://lexus.hubns.top:80/castor777/125020917/1257267.m3u8
#EXTINF:-1 tvg-id="br#telecine-action-hd" tvg-name="TELECINE ACTION FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/3/37/Telecine_Action_2.png" group-title="✅ TELECINE",TELECINE ACTION FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1257266.m3u8
#EXTINF:-1 tvg-id="br#telecine-action-hd" tvg-name="TELECINE ACTION FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/3/37/Telecine_Action_2.png" group-title="✅ TELECINE",TELECINE ACTION FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257265.m3u8
#EXTINF:-1 tvg-id="br#telecine-action-hd" tvg-name="TELECINE ACTION FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/3/37/Telecine_Action_2.png" group-title="✅ TELECINE",TELECINE ACTION FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257264.m3u8
#EXTINF:-1 tvg-id="br#telecine-action-hd" tvg-name="TELECINE ACTION FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/3/37/Telecine_Action_2.png" group-title="✅ TELECINE",TELECINE ACTION FHD
http://lexus.hubns.top:80/castor777/125020917/1257263.m3u8
#EXTINF:-1 tvg-id="br#telecine-action-hd" tvg-name="TELECINE ACTION" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/3/37/Telecine_Action_2.png" group-title="✅ TELECINE",TELECINE ACTION
http://lexus.hubns.top:80/castor777/125020917/1257262.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CINE SKY 10 *" tvg-logo="https://www.sky.com.br/o/sky-pre-theme/images/sky_icon.png" group-title="✅ CINE PLAY",CINE SKY 10 *
http://lexus.hubns.top:80/castor777/125020917/1256549.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CINE SKY 09 *" tvg-logo="https://www.sky.com.br/o/sky-pre-theme/images/sky_icon.png" group-title="✅ CINE PLAY",CINE SKY 09 *
http://lexus.hubns.top:80/castor777/125020917/1256548.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CINE SKY 08 *" tvg-logo="https://www.sky.com.br/o/sky-pre-theme/images/sky_icon.png" group-title="✅ CINE PLAY",CINE SKY 08 *
http://lexus.hubns.top:80/castor777/125020917/1256547.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CINE SKY 07 *" tvg-logo="https://www.sky.com.br/o/sky-pre-theme/images/sky_icon.png" group-title="✅ CINE PLAY",CINE SKY 07 *
http://lexus.hubns.top:80/castor777/125020917/1256546.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CINE SKY 06 *" tvg-logo="https://www.sky.com.br/o/sky-pre-theme/images/sky_icon.png" group-title="✅ CINE PLAY",CINE SKY 06 *
http://lexus.hubns.top:80/castor777/125020917/1256545.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CINE SKY 05 *" tvg-logo="https://www.sky.com.br/o/sky-pre-theme/images/sky_icon.png" group-title="✅ CINE PLAY",CINE SKY 05 *
http://lexus.hubns.top:80/castor777/125020917/1256544.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CINE SKY 04 *" tvg-logo="https://www.sky.com.br/o/sky-pre-theme/images/sky_icon.png" group-title="✅ CINE PLAY",CINE SKY 04 *
http://lexus.hubns.top:80/castor777/125020917/1256543.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CINE SKY 03 *" tvg-logo="https://www.sky.com.br/o/sky-pre-theme/images/sky_icon.png" group-title="✅ CINE PLAY",CINE SKY 03 *
http://lexus.hubns.top:80/castor777/125020917/1256542.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CINE SKY 02 *" tvg-logo="https://www.sky.com.br/o/sky-pre-theme/images/sky_icon.png" group-title="✅ CINE PLAY",CINE SKY 02 *
http://lexus.hubns.top:80/castor777/125020917/1256541.m3u8
#EXTINF:-1 tvg-id="" tvg-name="CINE SKY 01 *" tvg-logo="https://www.sky.com.br/o/sky-pre-theme/images/sky_icon.png" group-title="✅ CINE PLAY",CINE SKY 01 *
http://lexus.hubns.top:80/castor777/125020917/1256540.m3u8
#EXTINF:-1 tvg-id="br#warner-channel-hd" tvg-name="WARNER CHANNEL HD DUAL" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Warner2018LA.png/800px-Warner2018LA.png" group-title="✅ FILMES & SERIES",WARNER CHANNEL HD DUAL
http://lexus.hubns.top:80/castor777/125020917/1257439.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Urban Movies HD" tvg-logo="https://pbs.twimg.com/profile_images/1695012966305878016/v9B4RYG4_400x400.jpg" group-title="✅ FILMES & SERIES",Urban Movies HD
http://lexus.hubns.top:80/castor777/125020917/1257517.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Urban Series HD" tvg-logo="https://peganet.com.br/wp-content/uploads/2020/11/147-URBAN-SERIES.png" group-title="✅ FILMES & SERIES",Urban Series HD
http://lexus.hubns.top:80/castor777/125020917/1257515.m3u8
#EXTINF:-1 tvg-id="" tvg-name="Urban Docs HD" tvg-logo="https://www.urbanplay.com.br/archives/18-urban-docs-png_24033-n7svzg0a82k/retrieve" group-title="✅ FILMES & SERIES",Urban Docs HD
http://lexus.hubns.top:80/castor777/125020917/1257514.m3u8
#EXTINF:-1 tvg-id="br#warner-channel-hd" tvg-name="WARNER CHANNEL HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Warner2018LA.png/800px-Warner2018LA.png" group-title="✅ FILMES & SERIES",WARNER CHANNEL HD
http://lexus.hubns.top:80/castor777/125020917/1257438.m3u8
#EXTINF:-1 tvg-id="br#warner-channel-hd" tvg-name="WARNER CHANNEL FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Warner2018LA.png/800px-Warner2018LA.png" group-title="✅ FILMES & SERIES",WARNER CHANNEL FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257437.m3u8
#EXTINF:-1 tvg-id="br#warner-channel-hd" tvg-name="WARNER CHANNEL FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Warner2018LA.png/800px-Warner2018LA.png" group-title="✅ FILMES & SERIES",WARNER CHANNEL FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257436.m3u8
#EXTINF:-1 tvg-id="WarnerChannel.br" tvg-name="WARNER CHANNEL" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Warner2018LA.png/800px-Warner2018LA.png" group-title="✅ FILMES & SERIES",WARNER CHANNEL
http://lexus.hubns.top:80/castor777/125020917/1257435.m3u8
#EXTINF:-1 tvg-id="UniversalTV.br" tvg-name="UNIVERSAL TV HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Universal_TV_logo.svg/1200px-Universal_TV_logo.svg.png" group-title="✅ FILMES & SERIES",UNIVERSAL TV HD
http://lexus.hubns.top:80/castor777/125020917/1257423.m3u8
#EXTINF:-1 tvg-id="UniversalTV.br" tvg-name="UNIVERSAL TV FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Universal_TV_logo.svg/1200px-Universal_TV_logo.svg.png" group-title="✅ FILMES & SERIES",UNIVERSAL TV FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257422.m3u8
#EXTINF:-1 tvg-id="UniversalTV.br" tvg-name="UNIVERSAL TV FHD H264" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Universal_TV_logo.svg/1200px-Universal_TV_logo.svg.png" group-title="✅ FILMES & SERIES",UNIVERSAL TV FHD H264
http://lexus.hubns.top:80/castor777/125020917/1257421.m3u8
#EXTINF:-1 tvg-id="UniversalTV.br" tvg-name="UNIVERSAL TV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Universal_TV_logo.svg/1200px-Universal_TV_logo.svg.png" group-title="✅ FILMES & SERIES",UNIVERSAL TV
http://lexus.hubns.top:80/castor777/125020917/1257420.m3u8
#EXTINF:-1 tvg-id="UniversalTV.br" tvg-name="UNIVERSAL CHANNEL FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Universal_TV_logo.svg/1200px-Universal_TV_logo.svg.png" group-title="✅ FILMES & SERIES",UNIVERSAL CHANNEL FHD
http://lexus.hubns.top:80/castor777/125020917/1257419.m3u8
#EXTINF:-1 tvg-id="br#tnt-series-hd" tvg-name="TNT SÉRIES HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/7/75/TNT_Series_Logo_2016.png" group-title="✅ FILMES & SERIES",TNT SÉRIES HD
http://lexus.hubns.top:80/castor777/125020917/1257317.m3u8
#EXTINF:-1 tvg-id="TNTSeries.br" tvg-name="TNT SÉRIES" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/7/75/TNT_Series_Logo_2016.png" group-title="✅ FILMES & SERIES",TNT SÉRIES
http://lexus.hubns.top:80/castor777/125020917/1257316.m3u8
#EXTINF:-1 tvg-id="br#tnt-series-hd" tvg-name="TNT SERIES SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/7/75/TNT_Series_Logo_2016.png" group-title="✅ FILMES & SERIES",TNT SERIES SD
http://lexus.hubns.top:80/castor777/125020917/1257315.m3u8
#EXTINF:-1 tvg-id="br#tnt-series-hd" tvg-name="TNT SERIES FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/7/75/TNT_Series_Logo_2016.png" group-title="✅ FILMES & SERIES",TNT SERIES FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257314.m3u8
#EXTINF:-1 tvg-id="br#tnt-series-hd" tvg-name="TNT SERIES FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/7/75/TNT_Series_Logo_2016.png" group-title="✅ FILMES & SERIES",TNT SERIES FHD
http://lexus.hubns.top:80/castor777/125020917/1257313.m3u8
#EXTINF:-1 tvg-id="br#tnt-series-hd" tvg-name="TNT SERIES FHD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/7/75/TNT_Series_Logo_2016.png" group-title="✅ FILMES & SERIES",TNT SERIES FHD
http://lexus.hubns.top:80/castor777/125020917/1257312.m3u8
#EXTINF:-1 tvg-id="br#tnt-hd" tvg-name="TNT HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_TNT_Series.png" group-title="✅ FILMES & SERIES",TNT HD
http://lexus.hubns.top:80/castor777/125020917/1257311.m3u8
#EXTINF:-1 tvg-id="br#tnt-hd" tvg-name="TNT FHD H265 [OPCAO2]" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_TNT_Series.png" group-title="✅ FILMES & SERIES",TNT FHD H265 [OPCAO2]
http://lexus.hubns.top:80/castor777/125020917/1257310.m3u8
#EXTINF:-1 tvg-id="br#tnt-hd" tvg-name="TNT FHD H265" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_TNT_Series.png" group-title="✅ FILMES & SERIES",TNT FHD H265
http://lexus.hubns.top:80/castor777/125020917/1257309.m3u8


  `.trim();

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(lista);
};
