/* ======================================================
   NO BEIGE WEBSITES
   COOKIE CONSENT + GOOGLE ANALYTICS
   ====================================================== */

window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}


/* Analytics is OFF unless the visitor has consented */

gtag('consent', 'default', {
  'analytics_storage': 'denied'
});


/* Load Google Analytics */

const googleAnalyticsScript =
  document.createElement('script');

googleAnalyticsScript.async = true;

googleAnalyticsScript.src =
  'https://www.googletagmanager.com/gtag/js?id=G-9L3397MG7G';

document.head.appendChild(
  googleAnalyticsScript
);

gtag('js', new Date());

gtag('config', 'G-9L3397MG7G');


/* ======================================================
   COOKIE CHOICE
   ====================================================== */

document.addEventListener('DOMContentLoaded', function () {

  const cookieBanner =
    document.getElementById('cookie-banner');

  const acceptCookies =
    document.getElementById('cookie-accept');

  const rejectCookies =
    document.getElementById('cookie-reject');

  const cookieChoice =
    localStorage.getItem('noBeigeAnalyticsConsent');


  function allowAnalytics() {

    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });

  }


  function denyAnalytics() {

    gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });

  }


  if (cookieChoice === 'accepted') {

    allowAnalytics();

  } else if (cookieChoice === 'rejected') {

    denyAnalytics();

  } else if (cookieBanner) {

    cookieBanner.hidden = false;

  }


  if (acceptCookies) {

    acceptCookies.addEventListener(
      'click',
      function () {

        localStorage.setItem(
          'noBeigeAnalyticsConsent',
          'accepted'
        );

        allowAnalytics();

        cookieBanner.hidden = true;

      }
    );

  }


  if (rejectCookies) {

    rejectCookies.addEventListener(
      'click',
      function () {

        localStorage.setItem(
          'noBeigeAnalyticsConsent',
          'rejected'
        );

        denyAnalytics();

        cookieBanner.hidden = true;

      }
    );

  }

});
