(function ($) {
  Drupal.behaviors.umkcdora_append_inaccessible_message = {
    attach: function (context, settings) {
      // In the case where images could not be loaded, append an error message.
      $("img.BRnoselect").one("error", function() {
        if ( !$("#data-umkcdora-copyright-restricted").length ) {
          $("#book-viewer").prepend('<div id="data-umkcdora-copyright-restricted" class="messages error">This material is restricted due to copyright and is unavailable for viewing online. If you would like a copy for personal research and study, please visit <a href="http://library.umkc.edu/spec-col-about/services">http://library.umkc.edu/spec-col-about/services</a>.</div>');
        }
      });
    }
  }
})(jQuery);