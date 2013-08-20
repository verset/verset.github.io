$(function() {
    var tabs = $('ul#entry-nav-tabs li');

    function activateTab(tabContentId) {
        // de-activate all the tabs
        tabs.removeClass('active');
        $('div.entry-tab').hide();

        // activate this tab
        $(tabContentId).show();
        $('ul#entry-nav-tabs li a[href="' + tabContentId + '"]').parent().addClass('active');
        $.cookie('entry_nav_tab', tabContentId);
    }

    tabs.children('a').click(function(e) {
        var tabContentId = $(this).attr('href');
        var tab = $(this).parent();

        if (!tab.hasClass('active')) {
            activateTab(tabContentId);
        }
        e.preventDefault();
    });

    // activate the previously active tab
    var lastTab = $.cookie('entry_nav_tab');
    if (!lastTab) {
        lastTab = '#c1';
    }
    activateTab(lastTab);

    $('div.alert-success').delay(2000).fadeOut(500);
});
