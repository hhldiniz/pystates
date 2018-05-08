$(document).ready(function () {
    $(".state_population_menu_item").click(function () {
        $(".state_population_menu_item").removeClass("active");
        $(this).addClass("active");
    });

    $(".state_pib_menu_item").click(function () {
        $(".state_pib_menu_item").removeClass("active");
        $(this).addClass("active");
    });

    $(".population_pib_menu_item").click(function () {
        $(".population_pib_menu_item").removeClass("active");
        $(this).addClass("active");
    });
});