(function ($) {
  "use strict";
  
  if($('.playlist').length == 0) return;

  var playlist = $( '.playlist' ).mepPlaylist({
    audioHeight: '40',
    audioWidth: '100%',
    videoHeight: '40',
    videoWidth: '100%',
    audioVolume: 'vertical',
    mepPlaylistLoop: true,
    alwaysShowControls: true,
    mepSkin: 'mejs-audio',
    mepResponsiveProgress: true,
    mepSelectors: {
      playlist: '.playlist',
      track: '.track',
      tracklist: '.tracks'
    },
    features: [
      'meplike',
      'mepartwork',
      'mepcurrentdetails',
      'mepplaylist',
      'mephistory',
      'mepprevioustrack',
      'playpause',
      'mepnexttrack',
      'progress',
      'current',
      'duration',
      'volume',
      'mepicons',
      'meprepeat',
      'mepshuffle',
      'mepsource',
      'mepbuffering',
      'meptracklist',
      'mepplaylisttoggle',
      'youtube'
    ],
    mepPlaylistTracks: [
      {
            "id": "item-1",
            "title": "sᴋᴇʟᴇʀ.",
            "except": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Nihil illinc huc pervenit.",
            "link": "#",
            "thumb": { "src": "images/FRW.png" },
            "src": "ost/sᴋᴇʟᴇʀ. - ᴛᴇʟ ᴀᴠɪᴠ.mp3",
            "meta": {
                "author": "ᴛᴇʟ ᴀᴠɪᴠ",
                "authorlink": "#",
                "date": "30.05.2016",
                "category": "Blue",
                "tag": "Holiday",
                "play": 3200,
                "like": 210,
                "duration": "3:36"
            }
        },
        {
            "id": "item-2",
            "title": "sᴋᴇʟᴇʀ.",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/FRW.png" },
            "src": "ost/sᴋᴇʟᴇʀ. - ᴛᴏᴋʏᴏ.mp3",
            "meta": {
                "author": "ᴛᴏᴋʏᴏ",
                "authorlink": "#",
                "date": "02.05.2016",
                "category": "Jazz",
                "play": 30,
                "like": 10,
                "duration": "3:38"
            }
        },
        {
            "id": "item-3",
            "title": "sᴋᴇʟᴇʀ.",
            "except": "Tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/FRW.png" },
            "src": "ost/sᴋᴇʟᴇʀ. - ᴡᴇ'ʀᴇ ʙᴜʀɴɪɴɢ.mp3",
            "meta": {
                "author": "ᴡᴇ'ʀᴇ ʙᴜʀɴɪɴɢ",
                "authorlink": "#",
                "date": "09.04.2016",
                "category": "DJ",
                "play": 300,
                "like": 10,
                "duration": "3:37"
            }
        },
		{
            "id": "item-4",
            "title": "sᴋᴇʟᴇʀ.",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/FRW.png" },
            "src": "ost/sᴋᴇʟᴇʀ. - ғᴀʟʟɪɴɢ ᴀᴘᴀʀᴛ ғᴇᴀᴛ. ʜᴏʟʟʏ ᴅʀᴜᴍᴍᴏɴᴅ.mp3",
            "meta": {
                "author": "ғᴀʟʟɪɴɢ ᴀᴘᴀʀᴛ ғᴇᴀᴛ. ʜᴏʟʟʏ ᴅʀᴜᴍᴍᴏɴᴅ",
                "authorlink": "#",
                "date": "02.05.2016",
                "category": "Jazz",
                "play": 320,
                "like": 10,
                "duration": "4:17"
            }
        },
		{
		    "id": "item-5",
            "title": "sᴋᴇʟᴇʀ. sᴇʟᴇᴄᴛs",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/FRW.png" },
            "src": "ost/sᴋᴇʟᴇʀ. sᴇʟᴇᴄᴛs - ɪɴ ᴍʏ ᴍɪɴᴅ (sᴋᴇʟᴇʀ ғʟɪᴘ).mp3",
            "meta": {
                "author": "ɪɴ ᴍʏ ᴍɪɴᴅ (sᴋᴇʟᴇʀ ғʟɪᴘ)",
                "authorlink": "#",
                "date": "02.05.2016",
                "category": "Jazz",
                "play": 330,
                "like": 10,
                "duration": "3:06"
            }
        },
		{
		    "id": "item-6",
            "title": "sᴋᴇʟᴇʀ.",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/FRW.png" },
            "src": "ost/sᴋᴇʟᴇʀ. - ᴘᴀʟᴇ ʟɪɢʜᴛ.mp3",
            "meta": {
                "author": "ᴘᴀʟᴇ ʟɪɢʜᴛ",
                "authorlink": "#",
                "date": "02.05.2016",
                "category": "Jazz",
                "play": 330,
                "like": 10,
                "duration": "3:45"
            }
        },
		{
		    "id": "item-7",
            "title": "sᴋᴇʟᴇʀ.",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/FRW.png" },
            "src": "ost/sᴋᴇʟᴇʀ. - ᴏɴᴇ ᴅᴀʏ.mp3",
            "meta": {
                "author": "ᴏɴᴇ ᴅᴀʏ",
                "authorlink": "#",
                "date": "02.05.2016",
                "category": "Jazz",
                "play": 330,
                "like": 10,
                "duration": "4:00"
            }
        },
		{
			"id": "item-8",
            "title": "sᴋᴇʟᴇʀ.",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/FRW.png" },
            "src": "ost/sᴋᴇʟᴇʀ. - ᴛᴏ ᴅɪᴇ ᴡɪᴛʜᴏᴜᴛ sᴄᴀʀs.mp3",
            "meta": {
                "author": "ᴛᴏ ᴅɪᴇ ᴡɪᴛʜᴏᴜᴛ sᴄᴀʀs",
                "authorlink": "#",
                "date": "02.05.2016",
                "category": "Jazz",
                "play": 330,
                "like": 10,
                "duration": "4:14"
            }
        },
		{
			"id": "item-9",
            "title": "sᴋᴇʟᴇʀ.",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/FRW.png" },
            "src": "ost/sᴋᴇʟᴇʀ. - ᴏɴsʀᴀ.mp3",
            "meta": {
                "author": "ᴏɴsʀᴀ",
                "authorlink": "#",
                "date": "02.05.2016",
                "category": "Jazz",
                "play": 330,
                "like": 10,
                "duration": "4:00"
            }
        }
    ]
  });

  // get player, then you can use the player.mepAdd(), player.mepRemove(), player.mepSelect()
  var player = playlist.find('audio, video')[0].player;

  // event on like btn
  player.$node.on('like.mep', function(e, trackid){
    $('[track-id='+trackid+']').toggleClass('is-like');
  });

  // event on play
  player.$node.on('play', function(e){
    updateDisplay();
  });

  // event on pause
  player.$node.on('pause', function(e){
    updateDisplay();
  });

  // update when pjax end
  $(document).on('pjaxEnd', function() {
    updateDisplay();
  });

  // simulate the play btn
  $(document).on('click.btn', '.btn-playpause', function(e){
      e.stopPropagation();
      var self = $(this);
      if( self.hasClass('is-playing') ){
        self.removeClass('is-playing');
        player.pause();
      }else{
        var item = getItem(self);
        item && player.mepAdd(item, true);
      }
  });

  function updateDisplay(){
    $('[data-id]').removeClass('active').find('.btn-playpause').removeClass('is-playing').parent().removeClass('active');
    var track = player.mepGetCurrentTrack();
    if(!track || !track.id) return;
    var item = $('[data-id="'+track.id+'"]');
    if( player.media.paused ){
      item.removeClass('active').find('.btn-playpause').removeClass('is-playing').parent().removeClass('active');
    }else{
      item.addClass('active').find('.btn-playpause').addClass('is-playing').parent().addClass('active');
    }
  }

  // get item data, you can use ajax to get data from server
  function getItem(self){
    var item = self.closest('.item');
    // track detail
    if(!item.attr('data-src')){
      self.toggleClass('is-playing');
      $('#tracks').find('.btn-playpause').first().trigger('click');
      return false;
    }

    var obj = {
        meta: {
           author: item.find('.item-author').find('a').text()
          ,authorlink : item.find('.item-author').find('a').attr('href')
        }
        ,src: self.closest('[data-src]').attr("data-src")
        ,thumb: {
          src: item.find('.item-media-content').css("background-image").replace(/^url\(["']?/, '').replace(/["']?\)$/, '')
        }
        ,title: item.find('.item-title').find('a').text()
        ,link: item.find('.item-title').find('a').attr('href')
        ,id: self.attr("data-id") ? self.attr("data-id") : self.closest('[data-id]').attr("data-id")
    };
    return obj;
  }

})(jQuery);
