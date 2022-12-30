import React from 'react'
import './PageSlider.css'
import $ from 'jquery'

function PageSlider(props) {
    function pagination() {
        var offset = $(document).scrollTop();
        var windowHeight = $(window).height();
        var $body = $('body');
        var padding = .75;
        var pages = Object.keys($('.page')).filter((section) => Number(section) + 1).map(section => Number(section) + 1)
        pages.map((page) => {
            if (offset > (windowHeight * (page - 2 + padding))) {
                $body.removeClass().addClass("page-" + page);
            }
        });
    };

    pagination();
    let CurPage = props.selected;
    console.log(CurPage)

    $(document).on('scroll', pagination);

    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
    return (
        <div>
            <div className="main">
                <section className="page" id="page1">
                    <h1>Page 1</h1>
                </section>

                <section className="page" id="page2">
                    <h1>Page 2</h1>
                </section>

                <section className="page" id="page3">
                    <h1>Page 3</h1>
                </section>

                <section className="page" id="page4">
                    <h1>Page 4</h1>
                </section>
            </div>
            <ul id="pagination">
                <div className="vl"></div>
                <li><a href="#page1"></a></li>
                <li><a href="#page2"></a></li>
                <li><a href="#page3"></a></li>
                <li><a href="#page4"></a></li>
                <div className="vl"></div>
            </ul>
        </div>
    )
}

export default PageSlider