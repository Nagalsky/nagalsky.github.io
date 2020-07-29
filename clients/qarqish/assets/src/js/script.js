$(document).ready(function() {
  //Initial sticky header
  //$(".header").stick_in_parent();
  $(window).scroll(function() {
    var sticky = $(".header"),
      scroll = $(window).scrollTop();

    if (scroll >= 1) sticky.addClass("header--has-shadow");
    else sticky.removeClass("header--has-shadow");
  });

  //Select all checkboxes in cart
  $('[data-select="all"]').change(function() {
    var checkboxes = $(this)
      .closest(".cart-box")
      .find(":checkbox");
    checkboxes.prop("checked", $(this).is(":checked"));
  });

  //Prevent autoclose cart dropdown menu
  $(".cart-bar__dropdown-menu").on("click", function(e) {
    e.stopPropagation();
  });

  //Close dropdown
  $(".btn-dropdown-close").on("click", function() {
    $(this)
      .parent()
      .removeClass("show")
      .removeAttr("style x-placement");
    $(this)
      .parent()
      .parent()
      .removeClass("show");
  });

  //Add unscroll class for body once you call bootstrap modal from another modal
  $(document).on("hidden.bs.modal", function(event) {
    if ($(".modal:visible").length) {
      $("body").addClass("modal-open");
    }
  });

  //Initial swiper product gallery
  function initSwiperProductGallery() {
    var galleryThumbs = new Swiper(".product-gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 4.5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        768: {
          slidesPerView: 7,
          spaceBetween: 10
        }
      }
    });
    var galleryTop = new Swiper(".product-gallery", {
      spaceBetween: 10,
      observer: true,
      observeParents: true,
      thumbs: {
        swiper: galleryThumbs
      }
    });
  }

  initSwiperProductGallery();

  //Init bootstrap popover
  $('[data-toggle="popover"]').popover();

  //Product option form add fields
  function productOptionFormAddFields() {
    var collapseBtn = $('[data-add="fields"]');
    var collapseHolder = $(".fields-holder");
    var i = 1;

    collapseBtn.click(function() {
      $("<div />")
        .append(
          $(
            `
            <div class="mb-3">
              <div class="form-row">
                <div class="form-group mb-0 col-lg-6">
                  <div class="form-row">
                    <div class="form-group col-sm-6">
                      <div class="d-flex align-items-center justify-content-between mb-1">
                        <span class="flex-fill text-orange">1 Option name (En)</span>
                        <button class="btn btn-icon flex-shrink-0 ml-3">
                          <i class="qarqish-icon-close"></i>
                        </button>
                      </div>
                      <input type="text" class="form-control" placeholder="Write option">
                    </div>

                    <div class="form-group col-sm-6">
                      <div class="rtl">
                        <div class="form-group">
                          <div class="d-flex align-items-center justify-content-between mb-1">
                            <span class="flex-fill text-orange">1 اسم الخيار (عربي)</span>
                            <button class="btn btn-icon flex-shrink-0 ml-3 invisible">
                              <i class="qarqish-icon-close"></i>
                            </button>
                          </div>
                          <input type="text" class="form-control" placeholder="اكتب الخيار الفرعي">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group mb-0 col-lg-6">
                  <div class="form-row">
                    <div class="form-group col-sm-6">
                      <div class="d-flex align-items-center justify-content-between mb-1">
                        <span class="flex-fill text-orange">Price for option (QAR)</span>
                        <button class="btn btn-icon flex-shrink-0 ml-3 invisible">
                          <i class="qarqish-icon-close"></i>
                        </button>
                      </div>
                      <input type="text" class="form-control" placeholder="Write sub-option">
                    </div>

                    <div class="form-group col-sm-6">
                      <div class="rtl">
                        <div class="form-group">
                          <div class="d-flex align-items-center justify-content-between mb-1">
                            <span class="flex-fill text-orange">1 اسم الخيار (عربي)</span>
                            <button class="btn btn-icon flex-shrink-0 ml-3 invisible">
                              <i class="qarqish-icon-close"></i>
                            </button>
                          </div>
                          <input type="text" class="form-control" placeholder="اكتب الخيار الفرعي">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row-holder"></div>

              <button type="button" class="btn btn-link-brand p-0 border-0 d-inline-flex align-items-center mb-4">
                <i class="qarqish-icon-plus-square mr-2"></i>
                Add sub-option for 1option
              </button>
            </div>
          `
          )
        )
        .appendTo(collapseHolder);
      i++;
    });
  }

  productOptionFormAddFields();

  //Product option form add row
  function productOptionFormAddRow() {
    var collapseBtn = $('[data-add="row"]');
    var collapseHolder = $(".row-holder");
    var counter = 2;

    collapseBtn.click(function() {
      $("<div />")
        .append(
          $(
            `
            <div class="form-row">
              <div class="form-group mb-0 col-lg-6">
                <div class="form-row">
                  <div class="form-group col-sm-6">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                      <span class="flex-fill text-orange">${counter} Option name (En)</span>
                      <button class="btn btn-icon flex-shrink-0 ml-3"><i class="qarqish-icon-close"></i></button>
                    </div>
                    <input type="text" class="form-control" placeholder="Write option" />
                  </div>

                  <div class="form-group col-sm-6">
                    <div class="rtl">
                      <div class="form-group">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <span class="flex-fill text-orange">${counter} اسم الخيار (عربي)</span>
                          <button class="btn btn-icon flex-shrink-0 ml-3 invisible">
                            <i class="qarqish-icon-close"></i>
                          </button>
                        </div>
                        <input type="text" class="form-control" placeholder="اكتب الخيار الفرعي" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group mb-0 col-lg-6">
                <div class="form-row">
                  <div class="form-group col-sm-6">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                      <span class="flex-fill text-orange">Price for option (QAR)</span>
                      <button class="btn btn-icon flex-shrink-0 ml-3 invisible"><i
                          class="qarqish-icon-close"></i></button>
                    </div>
                    <input type="text" class="form-control" placeholder="Write sub-option" />
                  </div>

                  <div class="form-group col-sm-6">
                    <div class="rtl">
                      <div class="form-group">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <span class="flex-fill text-orange">${counter} اسم الخيار (عربي)</span>
                          <button class="btn btn-icon flex-shrink-0 ml-3 invisible">
                            <i class="qarqish-icon-close"></i>
                          </button>
                        </div>
                        <input type="text" class="form-control" placeholder="اكتب الخيار الفرعي" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `
          )
        )
        .appendTo(collapseHolder);
      counter++;
    });
  }

  productOptionFormAddRow();
});
