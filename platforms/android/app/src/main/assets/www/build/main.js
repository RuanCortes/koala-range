webpackJsonp([7],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\laragon\www\SocialRange\front-end\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n    <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>Username</ion-label>\n\n          <ion-input type="text" value=""></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label fixed>Password</ion-label>\n\n          <ion-input type="password"></ion-input>\n\n        </ion-item>\n\n      \n\n      </ion-list>\n\n\n\n      <button ion-button block (click)="logar()">Logar</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\laragon\www\SocialRange\front-end\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApelidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ApelidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApelidoPage = (function () {
    function ApelidoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ApelidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApelidoPage');
    };
    return ApelidoPage;
}());
ApelidoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-apelido',template:/*ion-inline-start:"C:\laragon\www\SocialRange\front-end\src\pages\apelido\apelido.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1>Insira um apelido para se manter no anonimato</h1>\n\n  <ion-item>\n      <ion-input type="text" placeholder="Apelido"></ion-input>\n  </ion-item>\n\n  <img src="assets/img/koala-ninja.jpg">\n\n</ion-content>\n'/*ion-inline-end:"C:\laragon\www\SocialRange\front-end\src\pages\apelido\apelido.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ApelidoPage);

//# sourceMappingURL=apelido.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apelido_apelido__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroPage = (function () {
    function CadastroPage(navCtrl, navParams, profileProvider, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileProvider = profileProvider;
        this.http = http;
        this.apiUrl = 'http://localhost:8080/profile';
        this.user = {
            profile: {
                nickname: '',
                email: ''
            }
        };
        this.addUser(this.user);
        console.log(this.user);
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage.prototype.addUser = function (user) {
        this.profileProvider.createUser(this.user).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    CadastroPage.prototype.apelido = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__apelido_apelido__["a" /* ApelidoPage */]);
    };
    return CadastroPage;
}());
CadastroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cadastro',template:/*ion-inline-start:"C:\laragon\www\SocialRange\front-end\src\pages\cadastro\cadastro.html"*/'<!--\n\n  Generated template for the CadastroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Cadastro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>Username</ion-label>\n\n          <ion-input type="text" [(ngModel)]="user.profile.nickname" name="nickname" value=""></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label fixed>E-mail</ion-label>\n\n          <ion-input type="text" [(ngModel)]="user.profile.email" name="email"></ion-input>\n\n        </ion-item>\n\n      \n\n      </ion-list>\n\n\n\n      <button ion-button block (click)="addUser(user)">Cadastrar</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\laragon\www\SocialRange\front-end\src\pages\cadastro\cadastro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
], CadastroPage);

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.logar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.cadastrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\laragon\www\SocialRange\front-end\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title>Koala Range</ion-title>\n\n        </ion-navbar>\n\n      </ion-header>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1>Bem-vindo ao Koala Range!</h1>\n\n  <div class="logo">\n\n    <img src="assets/img/koala-range-logo.jpg">\n\n  </div>\n\n  <button ion-button block (click)="logar()">Login</button>\n\n  <button ion-button block (click)="cadastrar()">Cadastrar</button>\n\n  <a href="#">\n\n    <p class="esqueceu">Esqueceu a senha?</p>\n\n  </a>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\laragon\www\SocialRange\front-end\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelecionarCategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelecionarCategoriaPage = (function () {
    function SelecionarCategoriaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SelecionarCategoriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelecionarCategoriaPage');
    };
    SelecionarCategoriaPage.prototype.feed = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__feed_feed__["a" /* FeedPage */]);
    };
    return SelecionarCategoriaPage;
}());
SelecionarCategoriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-selecionar-categoria',template:/*ion-inline-start:"C:\laragon\www\SocialRange\front-end\src\pages\selecionar-categoria\selecionar-categoria.html"*/'\n<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button> \n      <ion-buttons end>\n          <button ion-button icon-only (click)="feed()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n      </ion-buttons> \n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content>\n\n    <h1>Selecione uma categoria</h1>\n\n    <button ion-button icon-only class="alerta" large (click)="feed()">Alerta\n        <ion-icon name="warning"></ion-icon>\n    </button>\n    <button ion-button icon-only class="evento" large (click)="feed()">Evento\n        <ion-icon name="beer"></ion-icon>\n    </button>\n    <button ion-button icon-only class="social" large (click)="feed()">Social\n        <ion-icon name="body"></ion-icon>\n    </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\laragon\www\SocialRange\front-end\src\pages\selecionar-categoria\selecionar-categoria.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SelecionarCategoriaPage);

//# sourceMappingURL=selecionar-categoria.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selecionar_categoria_selecionar_categoria__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_posts_posts__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CriarPostPage = (function () {
    function CriarPostPage(navCtrl, navParams, postsProvider, http, transfer, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postsProvider = postsProvider;
        this.http = http;
        this.transfer = transfer;
        this.camera = camera;
        this.apiUrl = 'http://localhost:8080/posts';
        this.post = {
            createDate: '20170704',
            latitude: '56564',
            logitude: '5463464',
            category: {
                id: 1
            },
            profile: {
                id: 1
            }
        };
        console.log(this.post);
    }
    CriarPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CriarPostPage');
    };
    CriarPostPage.prototype.savePost = function (post) {
        var _this = this;
        console.log("savePost - " + JSON.stringify(this.post));
        alert("metodo savePost");
        this.postsProvider.createPost(this.post).then(function (result) {
            alert("metodo savePost2");
            console.log(result);
            alert(JSON.stringify(_this.post));
        }, function (err) {
            console.log(err);
        });
    };
    CriarPostPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
        }, function (err) {
            console.log(err);
        });
    };
    CriarPostPage.prototype.uploadFile = function () {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            _this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg";
        }, function (err) {
            console.log(err);
        });
    };
    CriarPostPage.prototype.criarPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__selecionar_categoria_selecionar_categoria__["a" /* SelecionarCategoriaPage */]);
    };
    return CriarPostPage;
}());
CriarPostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-criar-post',template:/*ion-inline-start:"C:\laragon\www\SocialRange\front-end\src\pages\criar-post\criar-post.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Criando publicação</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="feed()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n    </ion-buttons> \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list >\n\n      <ion-item>\n        <ion-label fixed>Descrição aqui...</ion-label>\n        <ion-input type="text" [(ngModel)]="post.description" name="description"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label fixed>Categoria</ion-label>\n          <ion-input type="text" [(ngModel)]="post.category.id" name="category"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <p>{{imageURI}}</p>\n        <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n      </ion-item>\n      <ion-item>\n        <h4>Image Preview</h4>\n        <img src="{{imageFileName}}" *ngIf="imageFileName" alt="Ionic File" width="300" />\n      </ion-item>\n      <ion-item>\n        <button ion-button (click)="uploadFile()">Upload</button>\n      </ion-item>\n\n      <button ion-button (click)="savePost(post)" type="submit" block>Criar post</button>\n      \n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\laragon\www\SocialRange\front-end\src\pages\criar-post\criar-post.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_posts_posts__["a" /* PostsProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]])
], CriarPostPage);

//# sourceMappingURL=criar-post.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/apelido/apelido.module": [
		285,
		6
	],
	"../pages/cadastro/cadastro.module": [
		286,
		5
	],
	"../pages/criar-post/criar-post.module": [
		289,
		4
	],
	"../pages/feed/feed.module": [
		290,
		3
	],
	"../pages/login/login.module": [
		284,
		2
	],
	"../pages/selecionar-categoria/selecionar-categoria.module": [
		288,
		1
	],
	"../pages/welcome/welcome.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileProvider = (function () {
    function ProfileProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/profile';
        console.log('Hello ProfileProvider Provider');
    }
    ProfileProvider.prototype.createUser = function (data) {
        var _this = this;
        var url = this.apiUrl + '/create';
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(url, data, httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return ProfileProvider;
}());
ProfileProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], ProfileProvider);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, geolocation, app) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.app = app;
        this.raio = 100;
    }
    HomePage.prototype.getUserPosition = function () {
        var _this = this;
        this.options = {
            enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(this.options).then(function (pos) {
            _this.currentPos = pos;
            console.log(pos);
            _this.addMap(pos.coords.latitude, pos.coords.longitude);
            _this.cityCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: _this.map,
                center: new google.maps.LatLng(_this.currentPos.coords.latitude, _this.currentPos.coords.longitude),
                radius: 100
            });
        }, function (err) {
            console.log("error : " + err.message);
            ;
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.getUserPosition();
    };
    HomePage.prototype.setRaio = function (param) {
        this.raio = param;
        console.log("O valor do raio é: " + this.raio);
        this.cityCircle.setRadius(param);
        return this.raio;
    };
    HomePage.prototype.addMap = function (lat, long) {
        var latLng = new google.maps.LatLng(lat, long);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], HomePage.prototype, "mapElement", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\laragon\www\SocialRange\front-end\src\pages\home\home.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!--\n\n  <ion-list>\n\n    <ion-item>\n\n      Latitude : {{lat}}\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-item>\n\n    Longitude : {{lon}}\n\n  </ion-item>\n\n-->\n\n  <ion-list >\n\n    <ion-item>\n\n      <ion-range min="10" max="10000" pin=true [(ngModel)]="radius" (ionChange)="setRaio(radius)" secondary>\n\n        <ion-label range-left>on</ion-label>\n\n        <ion-label range-right>{{radius}}m</ion-label>\n\n      </ion-range>      \n\n    </ion-item>\n\n  </ion-list>\n\n  <p>Raio: {{radius}} metros</p>\n\n  <div class="map-container">\n\n    <div #map id="map">\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\laragon\www\SocialRange\front-end\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], HomePage);

/*
this.geolocation.getCurrentPosition().then((resp) => {
                    this.lat = resp.coords.latitude;
                    this.lon = resp.coords.longitude;
                }).catch((error) => {
                    console.log('Error getting location', error);
                });
                
                let watch = this.geolocation.watchPosition();
                watch.subscribe((data) => {
                    // data can be a set of coordinates, or an error (if an error occurred).
                    // data.coords.latitude
                    // data.coords.longitude
            });
*/
/*
constructor(public navCtrl: NavController, private platform: Platform, private geolocation: Geolocation, private geofence: Geofence) {
        this.platform.ready().then(() => {
            geofence.initialize().then(
                () => console.log('Geofence Plugin Ready'),
                (err) => console.log(err)
            );
        });
    }

    setGeofence(value: number){
        this.geolocation.getCurrentPosition({
                enableHighAccuracy: true
        }).then((resp) => {

            var longitude = resp.coords.longitude;
            var latitude = resp.coords.latitude;
            var radius = value;

            let fence = {
                id: "Ruan",
                longitude: longitude,
                latitude: latitude,
                radius: radius
            }
        })
    }
*/
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\laragon\www\SocialRange\front-end\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\laragon\www\SocialRange\front-end\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_feed_feed__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_selecionar_categoria_selecionar_categoria__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_criar_post_criar_post__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_apelido_apelido__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geofence__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_range_map_range_map__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_posts_posts__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_profile_profile__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__["a" /* CadastroPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_selecionar_categoria_selecionar_categoria__["a" /* SelecionarCategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_criar_post_criar_post__["a" /* CriarPostPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_apelido_apelido__["a" /* ApelidoPage */],
            __WEBPACK_IMPORTED_MODULE_21__components_range_map_range_map__["a" /* RangeMapComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/apelido/apelido.module#ApelidoPageModule', name: 'ApelidoPage', segment: 'apelido', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/selecionar-categoria/selecionar-categoria.module#SelecionarCategoriaPageModule', name: 'SelecionarCategoriaPage', segment: 'selecionar-categoria', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/criar-post/criar-post.module#CriarPostPageModule', name: 'CriarPostPage', segment: 'criar-post', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__["a" /* CadastroPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_selecionar_categoria_selecionar_categoria__["a" /* SelecionarCategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_criar_post_criar_post__["a" /* CriarPostPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_apelido_apelido__["a" /* ApelidoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_geofence__["a" /* Geofence */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_22__providers_posts_posts__["a" /* PostsProvider */],
            __WEBPACK_IMPORTED_MODULE_23__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__["a" /* Camera */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_feed_feed__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Welcome', component: __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */] },
            { title: 'Feed', component: __WEBPACK_IMPORTED_MODULE_6__pages_feed_feed__["a" /* FeedPage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */] },
            { title: 'Sair', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\laragon\www\SocialRange\front-end\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\laragon\www\SocialRange\front-end\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the RangeMapComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var RangeMapComponent = (function () {
    function RangeMapComponent() {
        this.raio = 100;
        this.raio = 100;
    }
    RangeMapComponent.prototype.setRaio = function (param) {
        this.raio = param;
        console.log("O valor do raio é: " + this.raio);
    };
    return RangeMapComponent;
}());
RangeMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'range-map',template:/*ion-inline-start:"C:\laragon\www\SocialRange\front-end\src\components\range-map\range-map.html"*/'<!-- Generated template for the RangeMapComponent component -->\n\n\n\n'/*ion-inline-end:"C:\laragon\www\SocialRange\front-end\src\components\range-map\range-map.html"*/
    }),
    __metadata("design:paramtypes", [])
], RangeMapComponent);

//# sourceMappingURL=range-map.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_posts_posts__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__criar_post_criar_post__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedPage = (function () {
    function FeedPage(navCtrl, navParams, postsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postsProvider = postsProvider;
        this.getPosts();
    }
    FeedPage.prototype.ionViewDidLoad = function () {
    };
    FeedPage.prototype.getPosts = function () {
        var _this = this;
        this.postsProvider.getPost()
            .then(function (result) {
            _this.posts = result;
            console.log("log do sucesso - " + _this.posts);
        })
            .catch(function (error) {
            console.log('fodeu');
        });
    };
    //Animação de carregando ao arrastar tela para baixo, no feed, com intuito de atualizar posts
    FeedPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    FeedPage.prototype.criarPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__criar_post_criar_post__["a" /* CriarPostPage */]);
    };
    return FeedPage;
}());
FeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-feed',template:/*ion-inline-start:"C:\laragon\www\SocialRange\front-end\src\pages\feed\feed.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <button ion-button class="alerta">\n\n      Alertas\n\n    </button>\n\n    <button ion-button class="evento">\n\n      Eventos\n\n    </button>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="criarPost()">\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n    </ion-buttons>   \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg">\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n    \n\n  <ion-slides>\n\n    <ion-slide>\n\n      <ion-card *ngFor="let post of posts">\n\n\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="{{ post.profile.avatar }}">\n\n          </ion-avatar>\n\n          <h2>{{ post.profile.nickname }}</h2>\n\n          <p>21 de dezembro, 2017</p>\n\n        </ion-item>\n\n\n\n        <img src="assets/img/rapazeada.jpg">\n\n\n\n        <ion-card-content>\n\n          <p>{{ post.description }}</p>\n\n        </ion-card-content>\n\n\n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon name="thumbs-up"></ion-icon>\n\n              <div>{{ post.likes }}</div>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon name="text"></ion-icon>\n\n              <div>4 Comentários</div>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col center text-center>\n\n            <ion-note>\n\n              11h atrás\n\n            </ion-note>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <ion-card>\n\n\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/img/ruan-avatar.jpg">\n\n          </ion-avatar>\n\n          <h2>Ruan Cortes</h2>\n\n          <p>21 de dezembro, 2017</p>\n\n        </ion-item>\n\n\n\n        <img src="assets/img/rapazeada.jpg">\n\n\n\n        <ion-card-content>\n\n          <p>Churrasco, hoje, no novo ap do Léo!</p>\n\n        </ion-card-content>\n\n\n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon name="thumbs-up"></ion-icon>\n\n              <div>12 curtidas</div>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon name="text"></ion-icon>\n\n              <div>4 Comentários</div>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col center text-center>\n\n            <ion-note>\n\n              11h atrás\n\n            </ion-note>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n        <h1 class="categoria">\n\n          <strong>Social</strong>\n\n        </h1>\n\n        <ion-card>\n\n  \n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <img src="assets/img/ruan-avatar.jpg">\n\n            </ion-avatar>\n\n            <h2>Ruan Cortes</h2>\n\n            <p>21 de dezembro, 2017</p>\n\n          </ion-item>\n\n  \n\n          <img src="assets/img/rapazeada.jpg">\n\n  \n\n          <ion-card-content>\n\n            <p>Fota com os amigos na Barra Funda tsc tsc</p>\n\n          </ion-card-content>\n\n  \n\n          <ion-row>\n\n            <ion-col>\n\n              <button ion-button icon-left clear small>\n\n                <ion-icon name="thumbs-up"></ion-icon>\n\n                <div>12 curtidas</div>\n\n              </button>\n\n            </ion-col>\n\n            <ion-col>\n\n              <button ion-button icon-left clear small>\n\n                <ion-icon name="text"></ion-icon>\n\n                <div>4 Comentários</div>\n\n              </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n              <ion-note>\n\n                11h atrás\n\n              </ion-note>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-card>\n\n      </ion-slide>\n\n  </ion-slides>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\laragon\www\SocialRange\front-end\src\pages\feed\feed.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_posts_posts__["a" /* PostsProvider */]])
], FeedPage);

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsProvider = (function () {
    function PostsProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/posts';
        console.log('Hello PostsProvider Provider');
    }
    PostsProvider.prototype.getPost = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var url = _this.apiUrl + '/find-all';
            _this.http.get(url)
                .subscribe(function (result) {
                resolve(result);
                console.log(result);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PostsProvider.prototype.createPost = function (data) {
        var _this = this;
        console.log("createPost - " + JSON.stringify(data));
        var url = this.apiUrl + '/create';
        alert("metodo createPost");
        return new Promise(function (resolve, reject) {
            _this.http.post(url, data)
                .subscribe(function (res) {
                resolve(res);
                alert("metodo createPost");
            }, function (err) {
                reject(err);
            });
        });
    };
    return PostsProvider;
}());
PostsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], PostsProvider);

//# sourceMappingURL=posts.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map