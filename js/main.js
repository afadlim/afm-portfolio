
function toggleDetail(e) {
    const target = $(e.target);

    if ($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active");
    } else {
        $(target).html("Less Info").addClass("active");
    }

    const item = $(target).parents(".item");
    const detail = $(item).children(".detail");

    $(detail).slideToggle();

}

function onFormSubmit(e) {
    e.preventDefault()
    const impEmail = $('#imp_email')
    const impSubject = $('#imp_subject')
    const impMessage = $('#imp_message')

    if (!$(impEmail).val()) {
        alert("Email is required !")
    } else if (!$(impSubject).val()) {
        alert("Subject is required !")
    } else if (!$(impMessage).val()) {
        alert("Message is required !")
    } else {
        $(impEmail).val("")
        $(impSubject).val("")
        $(impMessage).val("")
        alert("Form Submited")
    }
}