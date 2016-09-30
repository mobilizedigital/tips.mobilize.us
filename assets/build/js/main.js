/**
 * Mobilize
 */

var Mobilize = Mobilize || {};


/**
 * Mobilize.subscription_form() handles Mailchimp subscription form.
 */

Mobilize.subscription_form = function subscription_form() {
  var target = $('.form--mailchimp');
  var url = target.attr('action');
  var msg = $('.form--message');

  target.ajaxChimp({
    url: url,
    callback: function (resp) {
      if (resp.result === 'success') {
        msg.text('Success! Please confirm your email address by clicking the link in the email we just sent you.');
        msg.removeAttr('style');
        target.find('input[type="text"]').val('');
      } else {
        msg.text(resp.msg);
        msg.removeAttr('style');
      }
    }
  });
};


/**
 * Init
 */

Mobilize.init = (function init() {
  Mobilize.subscription_form();
})();
