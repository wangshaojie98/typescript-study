// interface, type, implements, extends
// interface, abstract
var Home;
(function (Home) {
    var Header = /** @class */ (function () {
        function Header() {
        }
        Header.prototype.contructor = function () {
            var elem = document.createElement("div");
            elem.innerText = 'Header';
            document.body.appendChild(elem);
        };
        return Header;
    }());
    var Content = /** @class */ (function () {
        function Content() {
        }
        Content.prototype.contructor = function () {
            var elem = document.createElement("div");
            elem.innerText = 'Header';
            document.body.appendChild(elem);
        };
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
        }
        Footer.prototype.contructor = function () {
            var elem = document.createElement("div");
            elem.innerText = 'Header';
            console.log(elem);
            document.body.appendChild(elem);
        };
        return Footer;
    }());
    var Page = /** @class */ (function () {
        function Page() {
        }
        Page.prototype.contructor = function () {
            console.log('page');
            new Header();
            new Content();
            new Footer();
        };
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
new Home.Page();
console.log('home');
