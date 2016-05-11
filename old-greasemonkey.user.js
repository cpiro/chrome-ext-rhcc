// ==UserScript==
// @name         facebook right-hand card cleanup
// @namespace    http://cpiro.com
// @version      1.0
// @description  hide trending, games
// @author       cpiro
// @match        https://www.facebook.com/
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle("div#pagelet_trending_tags_and_topics { display: none !important; }");
GM_addStyle("div#pagelet_games_rhc { display: none !important; }");
// GM_addStyle(".egoOrganicColumn { padding-bottom: 0px !important; }");

