var lsjQuery = jQuery;
lsjQuery(document).ready(function() {
                if(typeof lsjQuery.fn.layerSlider == "undefined") { lsShowNotice('bolita','jquery'); }
                    else if(typeof lsjQuery.transit == "undefined" || typeof lsjQuery.transit.modifiedForLayerSlider == "undefined") { lsShowNotice('bolita', 'transit'); }
                        else {
                            lsjQuery("#bolita").layerSlider({
                                width : '940px',
                                height : '395px',
                                responsive : true,
                                responsiveUnder : 0,
                                sublayerContainer : 0,
                                autoStart : true,
                                pauseOnHover : true,
                                firstLayer : 1,
                                animateFirstLayer : true,
                                randomSlideshow : false,
                                twoWaySlideshow : true,
                                loops : 0,
                                forceLoopNum : true,
                                autoPlayVideos : false,
                                autoPauseSlideshow : 'auto',
                                youtubePreview : 'maxresdefault.jpg',
                                keybNav : true,
                                touchNav : true,
                                skin : 'bluediamond',
                                skinsPath : 'modoki/wp-content/themes/include/skins/',
                                globalBGColor : 'transparent',
                                navPrevNext : true,
                                navStartStop : true,
                                navButtons : true,
                                hoverPrevNext : false,
                                hoverBottomNav : false,
                                showBarTimer : false,
                                showCircleTimer : false,
                                thumbnailNavigation : 'disabled',
                                tnWidth : 100,
                                tnHeight : 60,
                                tnContainerWidth : '60%',
                                tnActiveOpacity : 35,
                                tnInactiveOpacity : 100,
                                imgPreload : true,
                        		yourLogo : false,
                                yourLogoStyle : 'position: absolute; left: 10px; top: 10px; z-index: 99;',
                                yourLogoLink : false,
                                yourLogoTarget : '_self',
                                cbInit : function(element) { },
                                cbStart : function(data) { },
                                cbStop : function(data) { },
                                cbPause : function(data) { },
                                cbAnimStart : function(data) { },
                                cbAnimStop : function(data) { },
                                cbPrev : function(data) { },
                                cbNext : function(data) { }
                            });
                        }
            });