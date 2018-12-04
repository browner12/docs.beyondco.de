(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{169:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("Laravel WebSockets can be installed via composer:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("composer require beyondcode/laravel-websockets\n")])])]),a("p",[t._v("The package will automatically register a service provider.")]),t._v(" "),a("p",[t._v("This package comes with a migration to store statistic information while running your WebSocket server. You can publish the migration file using:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("php artisan vendor:publish --provider"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"BeyondCode\\LaravelWebSockets\\WebSocketsServiceProvider"')]),t._v(" --tag"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"migrations"')]),t._v("\n")])])]),a("p",[t._v("Run the migrations with:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("php artisan migrate\n")])])]),a("p",[t._v("Next, you need to publish the WebSocket configuration file:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("php artisan vendor:publish --provider"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"BeyondCode\\LaravelWebSockets\\WebSocketsServiceProvider"')]),t._v(" --tag"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"config"')]),t._v("\n")])])]),a("p",[t._v("This is the default content of the config file that will be published as  "),a("code",[t._v("config/websockets.php")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     * This package comes with multi tenancy out of the box. Here you can\n     * configure the different apps that can use the webSockets server.\n     *\n     * Optionally you can disable client events so clients cannot send\n     * messages through each other via the webSockets.\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'apps'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("env")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'PUSHER_APP_ID'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("env")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'APP_NAME'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'key'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("env")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'PUSHER_APP_KEY'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'secret'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("env")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'PUSHER_APP_SECRET'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'enable_client_messages'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'enable_statistics'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     * This class is responsible for finding the apps. The default provider\n     * will use the apps defined in this config file.\n     *\n     * You can create a custom provider by implementing the\n     * `appProvier` interface.\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'app_provider'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" BeyondCode\\"),a("span",{attrs:{class:"token package"}},[t._v("LaravelWebSockets"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Apps"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ConfigAppProvider")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n     * This array contains the hosts of which you want to allow incoming requests.\n     * Leave this empty if you want to accepts requests from all hosts.\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'allowed_origins'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n     * The maximum request size in kilobytes that is allowed for an incoming WebSocket request.\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'max_request_size_in_kb'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("250")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n     * This path will be used to register the necessary routes for the package.\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'path'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'laravel-websockets'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n     * Define the optional SSL context for your WebSocket connections.\n     * You can see all available options at: http://php.net/manual/en/context.ssl.php\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'ssl'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n         * Path to local certificate file on filesystem. It must be a PEM encoded file which\n         * contains your certificate and private key. It can optionally contain the\n         * certificate chain of issuers. The private key also may be contained\n         * in a separate file specified by local_pk.\n         */")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'local_cert'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n         * Path to local private key file on filesystem in case of separate files for\n         * certificate (local_cert) and private key.\n         */")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'local_pk'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n         * Passphrase with which your local_cert file was encoded.\n         */")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'passphrase'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'statistics'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n         * This model will be used to store the statistics of the WebSocketsServer.\n         * The only requirement is that the model should be or extend\n         * `WebSocketsStatisticsEntry` provided by this package.\n         */")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'model'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\"),a("span",{attrs:{class:"token package"}},[t._v("BeyondCode"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("LaravelWebSockets"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Statistics"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WebSocketsStatisticsEntry")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n         * Here you can specify the interval in seconds at which statistics should be logged.\n         */")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'interval_in_seconds'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("60")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n         * When the clean-command is executed, all recorded statistics older than\n         * the number of days specified here will be deleted.\n         */")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'delete_statistics_older_than_days'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("60")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="installation.md";s.default=e.exports}}]);