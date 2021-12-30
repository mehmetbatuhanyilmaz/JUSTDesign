

$(document).ready(function() {
    $(".page-content").css("overflow-y", "hide"); //scrolling effect;
    // dynamic state/country fields.
    $("#state-field").hide();
    $("#country").change(function() {
        if ($("#country :selected").val() == "usa") {
            $("#state-field").show();
        } else {
            $("#state-field").hide();
        }
    });
    // on scroll
    $(document).scroll(function() {
        let windowHeight = $(window).height();
        let y = $(this).scrollTop();
        if (y > windowHeight) {
            $('.page-content').css("overflow-y", "hide");
        } else {
            $('.page-content').css("overflow-y", "scroll");
        }
    });
    // form handler
    $("#add-btn").click(function() {
        const degreeType = $("#type :selected").val();
        const degreeName = $("#name").val();
        const school = $("#school").val();
        const country = $("#country :selected").val();
        const state = $("#state :selected").val();
        const city = $("#city").val();
        const startDate = $("#start").val();
        let completionDate = $("#completion").val();
        if (completionDate == "") completionDate = "current"
        const newDegree = {
            degreeType,
            degreeName,
            school,
            country,
            state,
            city,
            startDate,
            completionDate
        };
        
        if (degreeType.length > 1 && degreeName.length > 3 && school.length > 4 && country.length > 1 && city.length > 1 && startDate.length > 5) {
            $("#education-list").append(`<div
                 class="education-info no-border-right no-border-left no-border-top sidebar">
                 <h4>${newDegree.degreeName} (${newDegree.degreeType})</h4>
                 <p>${newDegree.school} | ${newDegree.city}, ${newDegree.city}<br>${newDegree.startDate}-${newDegree.completionDate}</p>
                 <i class="fa fa-ellipsis-v fa-2x close-btn" aria-hidden="true"></i>
             </div>`);
            var $educationForm = $('#education-form');
            $($educationForm).find("input[type=text] , select ").each(function() {
                $(this).val('');
            });
        } else {
            alert("fill the form fields correctly");
            console.log("incorrect fields");
        }
    });
    //custom modal dialog
    const modal = $("#modal");
    $(".open-modal").click(function() {
        modal.addClass("show");
    });
    $(".close-modal").click(function() {
        modal.slideDown();
        modal.removeClass("show");
    });
});