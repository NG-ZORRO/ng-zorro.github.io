import{Ba as hn,Bn as PCe,Ea as ft,Gr as Wt,Hi as bv,Hs as tt,Kn as Qn,Ut as Je,_a as et,dc as wv,hr as St,ko as mbe,ln as Le,qn as Qoe}from"./chunk-CdINh6ES.js";import"./main-ZFG35XK6.js";import"./chunk-Dov0Voju.js";import{a as Un,o as Us,x as vo}from"./chunk-DZrd6yhK.js";function B(i,a){i&1&&(Je(0,`span`),Qn(1,`全局配置项`),ft())}function g(i,a){i&1&&hn(0,`span`)}var E=class i{goLink(a){window&&(window.location.hash=a)}static ɵfac=function(l){return new(l||i)};static ɵcmp=et({type:i,selectors:[[`nz-doc-global-config-zh`]],decls:984,vars:2,consts:[[1,`markdown`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzAffix`],[`nzHref`,`#如何使用`,`nzTitle`,`如何使用`,1,`toc-indent-1`],[`nzHref`,`#提供模板`,`nzTitle`,`提供模板`,1,`toc-indent-2`],[`nzHref`,`#局部生效`,`nzTitle`,`局部生效`,1,`toc-indent-1`],[`nzHref`,`#动态变更`,`nzTitle`,`动态变更`,1,`toc-indent-1`],[`nzHref`,`#优先级说明`,`nzTitle`,`优先级说明`,1,`toc-indent-1`],[`nzHref`,`#可配置项`,`nzTitle`,`可配置项`,1,`toc-indent-1`],[`id`,`如何使用`],[`onclick`,`window.location.hash = '如何使用'`,1,`anchor`],[1,`language-typescript`],[1,`token`,`keyword`],[1,`token`,`punctuation`],[1,`token`,`string`],[1,`token`,`operator`],[1,`token`,`comment`],[1,`token`,`number`],[1,`token`,`function`],[`id`,`提供模板`],[`onclick`,`window.location.hash = '提供模板'`,1,`anchor`],[1,`token`,`class-name`],[1,`token`,`decorator`],[1,`token`,`at`,`operator`],[1,`token`,`boolean`],[1,`token`,`template-string`],[1,`token`,`template-punctuation`,`string`],[1,`token`,`constant`],[`id`,`局部生效`],[`onclick`,`window.location.hash = '局部生效'`,1,`anchor`],[1,`token`,`function-variable`,`function`],[`id`,`动态变更`],[`onclick`,`window.location.hash = '动态变更'`,1,`anchor`],[`id`,`优先级说明`],[`onclick`,`window.location.hash = '优先级说明'`,1,`anchor`],[`id`,`可配置项`],[`onclick`,`window.location.hash = '可配置项'`,1,`anchor`]],template:function(l,A){l&1&&(Je(0,`article`,0)(1,`h1`)(2,`nz-space`),Wt(3,B,2,0,`span`,1)(4,g,1,0,`span`,1),ft()(),Je(5,`nz-affix`,2)(6,`nz-anchor`,3),St(`nzClick`,function(z){return A.goLink(z)}),hn(7,`nz-link`,4)(8,`nz-link`,5)(9,`nz-link`,6)(10,`nz-link`,7)(11,`nz-link`,8)(12,`nz-link`,9),ft()(),Je(13,`section`,0),wv(),Je(14,`p`),Qn(15,`我们给众多组件添加了`),Je(16,`strong`),Qn(17,`全局配置`),ft(),Qn(18,`功能，你可以通过全局配置来定义组件的默认行为，从而减少在模板中需要写的代码（让你的代码更加清爽），还能在运行时修改全局配置项。`),ft(),Je(19,`h2`,10)(20,`span`),Qn(21,`如何使用`),ft(),Je(22,`a`,11),Qn(23,`#`),ft()(),Je(24,`p`),Qn(25,`想要为某些组件提供默认配置项, 可以使用 `),Je(26,`code`),Qn(27,`provideNzConfig`),ft(),Qn(28,` 函数，传入一个符合 `),Je(29,`code`),Qn(30,`NzConfig`),ft(),Qn(31,` 接口的对象。例如：`),ft(),Je(32,`pre`)(33,`code`,12)(34,`span`,13),Qn(35,`import`),ft(),Qn(36,` `),Je(37,`span`,14),Qn(38,`{`),ft(),Qn(39,` NzConfig`),Je(40,`span`,14),Qn(41,`,`),ft(),Qn(42,` provideNzConfig `),Je(43,`span`,14),Qn(44,`}`),ft(),Qn(45,` `),Je(46,`span`,13),Qn(47,`from`),ft(),Qn(48,` `),Je(49,`span`,15),Qn(50,`'ng-zorro-antd/core/config'`),ft(),Je(51,`span`,14),Qn(52,`;`),ft(),Qn(53,`

`),Je(54,`span`,13),Qn(55,`const`),ft(),Qn(56,` ngZorroConfig`),Je(57,`span`,16),Qn(58,`:`),ft(),Qn(59,` NzConfig `),Je(60,`span`,16),Qn(61,`=`),ft(),Qn(62,` `),Je(63,`span`,14),Qn(64,`{`),ft(),Qn(65,`
  `),Je(66,`span`,17),Qn(67,`// 注意组件名称没有 nz 前缀`),ft(),Qn(68,`
  message`),Je(69,`span`,16),Qn(70,`:`),ft(),Qn(71,` `),Je(72,`span`,14),Qn(73,`{`),ft(),Qn(74,` nzTop`),Je(75,`span`,16),Qn(76,`:`),ft(),Qn(77,` `),Je(78,`span`,18),Qn(79,`120`),ft(),Qn(80,` `),Je(81,`span`,14),Qn(82,`}`),ft(),Je(83,`span`,14),Qn(84,`,`),ft(),Qn(85,`
  notification`),Je(86,`span`,16),Qn(87,`:`),ft(),Qn(88,` `),Je(89,`span`,14),Qn(90,`{`),ft(),Qn(91,` nzTop`),Je(92,`span`,16),Qn(93,`:`),ft(),Qn(94,` `),Je(95,`span`,18),Qn(96,`240`),ft(),Qn(97,` `),Je(98,`span`,14),Qn(99,`}`),ft(),Qn(100,`
`),Je(101,`span`,14),Qn(102,`}`),ft(),Je(103,`span`,14),Qn(104,`;`),ft(),Qn(105,`

`),Je(106,`span`,13),Qn(107,`export`),ft(),Qn(108,` `),Je(109,`span`,13),Qn(110,`const`),ft(),Qn(111,` appConfig`),Je(112,`span`,16),Qn(113,`:`),ft(),Qn(114,` ApplicationConfig `),Je(115,`span`,16),Qn(116,`=`),ft(),Qn(117,` `),Je(118,`span`,14),Qn(119,`{`),ft(),Qn(120,`
  providers`),Je(121,`span`,16),Qn(122,`:`),ft(),Qn(123,` `),Je(124,`span`,14),Qn(125,`[`),ft(),Je(126,`span`,19),Qn(127,`provideNzConfig`),ft(),Je(128,`span`,14),Qn(129,`(`),ft(),Qn(130,`ngZorroConfig`),Je(131,`span`,14),Qn(132,`)`),ft(),Je(133,`span`,14),Qn(134,`]`),ft(),Qn(135,`
`),Je(136,`span`,14),Qn(137,`}`),ft(),Je(138,`span`,14),Qn(139,`;`),ft(),Qn(140,`
`),ft()(),Je(141,`p`),Qn(142,`这些全局配置项将会被注入 `),Je(143,`code`),Qn(144,`NzConfigService`),ft(),Qn(145,` 当中并保存。`),ft(),Je(146,`h3`,20)(147,`span`),Qn(148,`提供模板`),ft(),Je(149,`a`,21),Qn(150,`#`),ft()(),Je(151,`p`),Qn(152,`一些组件支持传递模板 `),Je(153,`code`),Qn(154,`TemplateRef<T>`),ft(),Qn(155,` 作为默认参数，我们来了解一下如何做到这一点。`),ft(),Je(156,`p`),Qn(157,`最简单的方式是在应用的根组件中调用 `),Je(158,`code`),Qn(159,`NzConfigService`),ft(),Qn(160,` 的相关方法：`),ft(),Je(161,`pre`)(162,`code`,12)(163,`span`,13),Qn(164,`import`),ft(),Qn(165,` `),Je(166,`span`,14),Qn(167,`{`),ft(),Qn(168,` NzConfigService `),Je(169,`span`,14),Qn(170,`}`),ft(),Qn(171,` `),Je(172,`span`,13),Qn(173,`from`),ft(),Qn(174,` `),Je(175,`span`,15),Qn(176,`'ng-zorro-antd/core/config'`),ft(),Je(177,`span`,14),Qn(178,`;`),ft(),Qn(179,`

`),Je(180,`span`,13),Qn(181,`export`),ft(),Qn(182,` `),Je(183,`span`,13),Qn(184,`class`),ft(),Qn(185,` `),Je(186,`span`,22),Qn(187,`AppComponent`),ft(),Qn(188,` `),Je(189,`span`,13),Qn(190,`implements`),ft(),Qn(191,` `),Je(192,`span`,22),Qn(193,`OnInit`),ft(),Qn(194,` `),Je(195,`span`,14),Qn(196,`{`),ft(),Qn(197,`
  `),Je(198,`span`,13),Qn(199,`private`),ft(),Qn(200,` nzConfigService `),Je(201,`span`,16),Qn(202,`=`),ft(),Qn(203,` `),Je(204,`span`,19),Qn(205,`inject`),ft(),Je(206,`span`,14),Qn(207,`(`),ft(),Qn(208,`NzConfigService`),Je(209,`span`,14),Qn(210,`)`),ft(),Je(211,`span`,14),Qn(212,`;`),ft(),Qn(213,`

  `),Je(214,`span`,23)(215,`span`,24),Qn(216,`@`),ft(),Je(217,`span`,19),Qn(218,`ViewChild`),ft()(),Je(219,`span`,14),Qn(220,`(`),ft(),Je(221,`span`,15),Qn(222,`'nzIndicatorTpl'`),ft(),Je(223,`span`,14),Qn(224,`,`),ft(),Qn(225,` `),Je(226,`span`,14),Qn(227,`{`),ft(),Qn(228,` `),Je(229,`span`,13),Qn(230,`static`),ft(),Je(231,`span`,16),Qn(232,`:`),ft(),Qn(233,` `),Je(234,`span`,25),Qn(235,`true`),ft(),Qn(236,` `),Je(237,`span`,14),Qn(238,`}`),ft(),Je(239,`span`,14),Qn(240,`)`),ft(),Qn(241,`
  nzIndicator`),Je(242,`span`,16),Qn(243,`!`),ft(),Je(244,`span`,16),Qn(245,`:`),ft(),Qn(246,` TemplateRef`),Je(247,`span`,16),Qn(248,`<`),ft(),Je(249,`span`,13),Qn(250,`void`),ft(),Je(251,`span`,16),Qn(252,`>`),ft(),Je(253,`span`,14),Qn(254,`;`),ft(),Qn(255,`

  `),Je(256,`span`,19),Qn(257,`ngOnInit`),ft(),Je(258,`span`,14),Qn(259,`(`),ft(),Je(260,`span`,14),Qn(261,`)`),ft(),Je(262,`span`,16),Qn(263,`:`),ft(),Qn(264,` `),Je(265,`span`,13),Qn(266,`void`),ft(),Qn(267,` `),Je(268,`span`,14),Qn(269,`{`),ft(),Qn(270,`
    `),Je(271,`span`,13),Qn(272,`this`),ft(),Je(273,`span`,14),Qn(274,`.`),ft(),Qn(275,`nzConfigService`),Je(276,`span`,14),Qn(277,`.`),ft(),Je(278,`span`,19),Qn(279,`set`),ft(),Je(280,`span`,14),Qn(281,`(`),ft(),Je(282,`span`,15),Qn(283,`'spin'`),ft(),Je(284,`span`,14),Qn(285,`,`),ft(),Qn(286,` `),Je(287,`span`,14),Qn(288,`{`),ft(),Qn(289,` nzIndicator`),Je(290,`span`,16),Qn(291,`:`),ft(),Qn(292,` `),Je(293,`span`,13),Qn(294,`this`),ft(),Je(295,`span`,14),Qn(296,`.`),ft(),Qn(297,`nzIndicator `),Je(298,`span`,14),Qn(299,`}`),ft(),Je(300,`span`,14),Qn(301,`)`),ft(),Je(302,`span`,14),Qn(303,`;`),ft(),Qn(304,`
  `),Je(305,`span`,14),Qn(306,`}`),ft(),Qn(307,`
`),Je(308,`span`,14),Qn(309,`}`),ft(),Qn(310,`
`),ft()(),Je(311,`p`),Qn(312,`然而这种方式可能会让你的 AppComponent 相当臃肿，并违反关注分离原则。`),ft(),Je(313,`p`),Qn(314,`因此，当你的项目比较大时，我们建议你使用一个 `),Je(315,`code`),Qn(316,`FactoryProvider`),ft(),Qn(317,`，如下所示：`),ft(),Je(318,`pre`)(319,`code`,12)(320,`span`,17),Qn(321,`// The module-level Component which contains template references.`),ft(),Qn(322,`
`),Je(323,`span`,17),Qn(324,`// Exporting is required for AOT compatibility`),ft(),Qn(325,`
`),Je(326,`span`,23)(327,`span`,24),Qn(328,`@`),ft(),Je(329,`span`,19),Qn(330,`Component`),ft()(),Je(331,`span`,14),Qn(332,`(`),ft(),Je(333,`span`,14),Qn(334,`{`),ft(),Qn(335,`
  template`),Je(336,`span`,16),Qn(337,`:`),ft(),Qn(338,` `),Je(339,`span`,26)(340,`span`,27),Qn(341,"`"),ft(),Je(342,`span`,15),Qn(343,`
    <ng-template #nzIndicatorTpl>
      <span class="ant-spin-dot">
        <nz-icon nzType="loading" />
      </span>
    </ng-template>
  `),ft(),Je(344,`span`,27),Qn(345,"`"),ft()(),Qn(346,`
`),Je(347,`span`,14),Qn(348,`}`),ft(),Je(349,`span`,14),Qn(350,`)`),ft(),Qn(351,`
`),Je(352,`span`,13),Qn(353,`export`),ft(),Qn(354,` `),Je(355,`span`,13),Qn(356,`class`),ft(),Qn(357,` `),Je(358,`span`,22),Qn(359,`GlobalTemplatesComponent`),ft(),Qn(360,` `),Je(361,`span`,14),Qn(362,`{`),ft(),Qn(363,`
  `),Je(364,`span`,23)(365,`span`,24),Qn(366,`@`),ft(),Je(367,`span`,19),Qn(368,`ViewChild`),ft()(),Je(369,`span`,14),Qn(370,`(`),ft(),Je(371,`span`,15),Qn(372,`'nzIndicatorTpl'`),ft(),Je(373,`span`,14),Qn(374,`,`),ft(),Qn(375,` `),Je(376,`span`,14),Qn(377,`{`),ft(),Qn(378,` `),Je(379,`span`,13),Qn(380,`static`),ft(),Je(381,`span`,16),Qn(382,`:`),ft(),Qn(383,` `),Je(384,`span`,25),Qn(385,`true`),ft(),Qn(386,` `),Je(387,`span`,14),Qn(388,`}`),ft(),Je(389,`span`,14),Qn(390,`)`),ft(),Qn(391,`
  nzIndicator`),Je(392,`span`,16),Qn(393,`!`),ft(),Je(394,`span`,16),Qn(395,`:`),ft(),Qn(396,` TemplateRef`),Je(397,`span`,16),Qn(398,`<`),ft(),Je(399,`span`,13),Qn(400,`void`),ft(),Je(401,`span`,16),Qn(402,`>`),ft(),Je(403,`span`,14),Qn(404,`;`),ft(),Qn(405,`
`),Je(406,`span`,14),Qn(407,`}`),ft(),Qn(408,`

`),Je(409,`span`,17),Qn(410,`// The Factory function`),ft(),Qn(411,`
`),Je(412,`span`,13),Qn(413,`const`),ft(),Qn(414,` nzConfigFactory `),Je(415,`span`,16),Qn(416,`=`),ft(),Qn(417,` `),Je(418,`span`,14),Qn(419,`(`),ft(),Je(420,`span`,14),Qn(421,`)`),ft(),Je(422,`span`,16),Qn(423,`:`),ft(),Qn(424,` NzConfig `),Je(425,`span`,16),Qn(426,`=>`),ft(),Qn(427,` `),Je(428,`span`,14),Qn(429,`{`),ft(),Qn(430,`
  `),Je(431,`span`,13),Qn(432,`const`),ft(),Qn(433,` environmentInjector `),Je(434,`span`,16),Qn(435,`=`),ft(),Qn(436,` `),Je(437,`span`,19),Qn(438,`inject`),ft(),Je(439,`span`,14),Qn(440,`(`),ft(),Qn(441,`EnvironmentInjector`),Je(442,`span`,14),Qn(443,`)`),ft(),Je(444,`span`,14),Qn(445,`;`),ft(),Qn(446,`
  `),Je(447,`span`,13),Qn(448,`const`),ft(),Qn(449,` `),Je(450,`span`,14),Qn(451,`{`),ft(),Qn(452,` nzIndicator `),Je(453,`span`,14),Qn(454,`}`),ft(),Qn(455,` `),Je(456,`span`,16),Qn(457,`=`),ft(),Qn(458,` `),Je(459,`span`,19),Qn(460,`createComponent`),ft(),Je(461,`span`,14),Qn(462,`(`),ft(),Qn(463,`component`),Je(464,`span`,14),Qn(465,`,`),ft(),Qn(466,` `),Je(467,`span`,14),Qn(468,`{`),ft(),Qn(469,` environmentInjector `),Je(470,`span`,14),Qn(471,`}`),ft(),Je(472,`span`,14),Qn(473,`)`),ft(),Je(474,`span`,14),Qn(475,`.`),ft(),Qn(476,`instance`),Je(477,`span`,14),Qn(478,`;`),ft(),Qn(479,`
  `),Je(480,`span`,13),Qn(481,`return`),ft(),Qn(482,` `),Je(483,`span`,14),Qn(484,`{`),ft(),Qn(485,`
    spin`),Je(486,`span`,16),Qn(487,`:`),ft(),Qn(488,` `),Je(489,`span`,14),Qn(490,`{`),ft(),Qn(491,`
      nzIndicator
    `),Je(492,`span`,14),Qn(493,`}`),ft(),Qn(494,`
  `),Je(495,`span`,14),Qn(496,`}`),ft(),Je(497,`span`,14),Qn(498,`;`),ft(),Qn(499,`
`),Je(500,`span`,14),Qn(501,`}`),ft(),Je(502,`span`,14),Qn(503,`;`),ft(),Qn(504,`

`),Je(505,`span`,13),Qn(506,`export`),ft(),Qn(507,` `),Je(508,`span`,13),Qn(509,`const`),ft(),Qn(510,` appConfig`),Je(511,`span`,16),Qn(512,`:`),ft(),Qn(513,` ApplicationConfig `),Je(514,`span`,16),Qn(515,`=`),ft(),Qn(516,` `),Je(517,`span`,14),Qn(518,`{`),ft(),Qn(519,`
  providers`),Je(520,`span`,16),Qn(521,`:`),ft(),Qn(522,` `),Je(523,`span`,14),Qn(524,`[`),ft(),Qn(525,`
    `),Je(526,`span`,14),Qn(527,`{`),ft(),Qn(528,`
      `),Je(529,`span`,17),Qn(530,`// The FactoryProvider`),ft(),Qn(531,`
      provide`),Je(532,`span`,16),Qn(533,`:`),ft(),Qn(534,` `),Je(535,`span`,28),Qn(536,`NZ_CONFIG`),ft(),Je(537,`span`,14),Qn(538,`,`),ft(),Qn(539,`
      useFactory`),Je(540,`span`,16),Qn(541,`:`),ft(),Qn(542,` nzConfigFactory
    `),Je(543,`span`,14),Qn(544,`}`),ft(),Qn(545,`
  `),Je(546,`span`,14),Qn(547,`]`),ft(),Qn(548,`
`),Je(549,`span`,14),Qn(550,`}`),ft(),Je(551,`span`,14),Qn(552,`;`),ft(),Qn(553,`
`),ft()(),Je(554,`h2`,29)(555,`span`),Qn(556,`局部生效`),ft(),Je(557,`a`,30),Qn(558,`#`),ft()(),Je(559,`p`),Qn(560,`开发者可以利用 Angular 自带的依赖注入机制，在特定组件内重新设定 `),Je(561,`code`),Qn(562,`NZ_CONFIG`),ft(),Qn(563,`， 该设定不会影响该组件以外的配置。`),ft(),Je(564,`pre`)(565,`code`,12)(566,`span`,23)(567,`span`,24),Qn(568,`@`),ft(),Je(569,`span`,19),Qn(570,`Component`),ft()(),Je(571,`span`,14),Qn(572,`(`),ft(),Je(573,`span`,14),Qn(574,`{`),ft(),Qn(575,`
  providers`),Je(576,`span`,16),Qn(577,`:`),ft(),Qn(578,` `),Je(579,`span`,14),Qn(580,`[`),ft(),Qn(581,`
    `),Je(582,`span`,17),Qn(583,`// 重设本地 NzConfigService`),ft(),Qn(584,`
    NzConfigService`),Je(585,`span`,14),Qn(586,`,`),ft(),Qn(587,`
    `),Je(588,`span`,14),Qn(589,`{`),ft(),Qn(590,`
      provide`),Je(591,`span`,16),Qn(592,`:`),ft(),Qn(593,` `),Je(594,`span`,28),Qn(595,`NZ_CONFIG`),ft(),Je(596,`span`,14),Qn(597,`,`),ft(),Qn(598,`
      useValue`),Je(599,`span`,16),Qn(600,`:`),ft(),Qn(601,` `),Je(602,`span`,14),Qn(603,`{`),ft(),Qn(604,`
        button`),Je(605,`span`,16),Qn(606,`:`),ft(),Qn(607,` `),Je(608,`span`,14),Qn(609,`{`),ft(),Qn(610,`
          nzSize`),Je(611,`span`,16),Qn(612,`:`),ft(),Qn(613,` `),Je(614,`span`,15),Qn(615,`'large'`),ft(),Qn(616,`
        `),Je(617,`span`,14),Qn(618,`}`),ft(),Qn(619,`
      `),Je(620,`span`,14),Qn(621,`}`),ft(),Qn(622,`
    `),Je(623,`span`,14),Qn(624,`}`),ft(),Qn(625,`
  `),Je(626,`span`,14),Qn(627,`]`),ft(),Qn(628,`
`),Je(629,`span`,14),Qn(630,`}`),ft(),Je(631,`span`,14),Qn(632,`)`),ft(),Qn(633,`
`),ft()(),Je(634,`p`),Qn(635,`也可以使用 `),Je(636,`code`),Qn(637,`useFactory`),ft(),Qn(638,` 将全局配置与区域配置合并后生效`),ft(),Je(639,`blockquote`)(640,`p`),Qn(641,`注意：全局配置在初始化之后修改将不会影响该部分配置结果`),ft()(),Je(642,`pre`)(643,`code`,12)(644,`span`,23)(645,`span`,24),Qn(646,`@`),ft(),Je(647,`span`,19),Qn(648,`Component`),ft()(),Je(649,`span`,14),Qn(650,`(`),ft(),Je(651,`span`,14),Qn(652,`{`),ft(),Qn(653,`
  providers`),Je(654,`span`,16),Qn(655,`:`),ft(),Qn(656,` `),Je(657,`span`,14),Qn(658,`[`),ft(),Qn(659,`
    `),Je(660,`span`,17),Qn(661,`// 重设本地 NzConfigService`),ft(),Qn(662,`
    NzConfigService`),Je(663,`span`,14),Qn(664,`,`),ft(),Qn(665,`
    `),Je(666,`span`,14),Qn(667,`{`),ft(),Qn(668,`
      provide`),Je(669,`span`,16),Qn(670,`:`),ft(),Qn(671,` `),Je(672,`span`,28),Qn(673,`NZ_CONFIG`),ft(),Je(674,`span`,14),Qn(675,`,`),ft(),Qn(676,`
      `),Je(677,`span`,31),Qn(678,`useFactory`),ft(),Je(679,`span`,16),Qn(680,`:`),ft(),Qn(681,` `),Je(682,`span`,14),Qn(683,`(`),ft(),Je(684,`span`,14),Qn(685,`)`),ft(),Qn(686,` `),Je(687,`span`,16),Qn(688,`=>`),ft(),Qn(689,` `),Je(690,`span`,14),Qn(691,`{`),ft(),Qn(692,`
        `),Je(693,`span`,17),Qn(694,`// 获取全局 NzConfigService`),ft(),Qn(695,`
        `),Je(696,`span`,13),Qn(697,`const`),ft(),Qn(698,` globalConfig `),Je(699,`span`,16),Qn(700,`=`),ft(),Qn(701,` `),Je(702,`span`,19),Qn(703,`inject`),ft(),Je(704,`span`,14),Qn(705,`(`),ft(),Qn(706,`NzConfigService`),Je(707,`span`,14),Qn(708,`,`),ft(),Qn(709,` `),Je(710,`span`,14),Qn(711,`{`),ft(),Qn(712,` skipSelf`),Je(713,`span`,16),Qn(714,`:`),ft(),Qn(715,` `),Je(716,`span`,25),Qn(717,`true`),ft(),Qn(718,` `),Je(719,`span`,14),Qn(720,`}`),ft(),Je(721,`span`,14),Qn(722,`)`),ft(),Je(723,`span`,14),Qn(724,`.`),ft(),Je(725,`span`,19),Qn(726,`getConfig`),ft(),Je(727,`span`,14),Qn(728,`(`),ft(),Je(729,`span`,14),Qn(730,`)`),ft(),Je(731,`span`,14),Qn(732,`;`),ft(),Qn(733,`
        `),Je(734,`span`,13),Qn(735,`const`),ft(),Qn(736,` localConfig `),Je(737,`span`,16),Qn(738,`=`),ft(),Qn(739,` `),Je(740,`span`,14),Qn(741,`{`),ft(),Qn(742,`
          select`),Je(743,`span`,16),Qn(744,`:`),ft(),Qn(745,` `),Je(746,`span`,14),Qn(747,`{`),ft(),Qn(748,`
            nzVariant`),Je(749,`span`,16),Qn(750,`:`),ft(),Qn(751,` `),Je(752,`span`,15),Qn(753,`'borderless'`),ft(),Qn(754,`
          `),Je(755,`span`,14),Qn(756,`}`),ft(),Qn(757,`
        `),Je(758,`span`,14),Qn(759,`}`),ft(),Je(760,`span`,14),Qn(761,`;`),ft(),Qn(762,`
        `),Je(763,`span`,17),Qn(764,`// 合并全局配置与本地配置`),ft(),Qn(765,`
        `),Je(766,`span`,13),Qn(767,`const`),ft(),Qn(768,` mergedConfig `),Je(769,`span`,16),Qn(770,`=`),ft(),Qn(771,` `),Je(772,`span`,14),Qn(773,`{`),ft(),Qn(774,`
          `),Je(775,`span`,16),Qn(776,`...`),ft(),Qn(777,`globalConfig`),Je(778,`span`,14),Qn(779,`,`),ft(),Qn(780,`
          `),Je(781,`span`,16),Qn(782,`...`),ft(),Qn(783,`localConfig
        `),Je(784,`span`,14),Qn(785,`}`),ft(),Je(786,`span`,14),Qn(787,`;`),ft(),Qn(788,`
        `),Je(789,`span`,13),Qn(790,`return`),ft(),Qn(791,` mergedConfig`),Je(792,`span`,14),Qn(793,`;`),ft(),Qn(794,`
      `),Je(795,`span`,14),Qn(796,`}`),ft(),Je(797,`span`,14),Qn(798,`,`),ft(),Qn(799,`
    `),Je(800,`span`,14),Qn(801,`}`),ft(),Qn(802,`
  `),Je(803,`span`,14),Qn(804,`]`),ft(),Qn(805,`
`),Je(806,`span`,14),Qn(807,`}`),ft(),Je(808,`span`,14),Qn(809,`)`),ft(),Qn(810,`
`),ft()(),Je(811,`h2`,32)(812,`span`),Qn(813,`动态变更`),ft(),Je(814,`a`,33),Qn(815,`#`),ft()(),Je(816,`p`),Qn(817,`你可以通过调用 `),Je(818,`code`),Qn(819,`NzConfigService`),ft(),Qn(820,` 的 `),Je(821,`code`),Qn(822,`set`),ft(),Qn(823,` 方法来改变某个组件的配置项，例如：`),ft(),Je(824,`pre`)(825,`code`,12)(826,`span`,13),Qn(827,`import`),ft(),Qn(828,` `),Je(829,`span`,14),Qn(830,`{`),ft(),Qn(831,` NzConfigService `),Je(832,`span`,14),Qn(833,`}`),ft(),Qn(834,` `),Je(835,`span`,13),Qn(836,`from`),ft(),Qn(837,` `),Je(838,`span`,15),Qn(839,`'ng-zorro-antd/core/config'`),ft(),Je(840,`span`,14),Qn(841,`;`),ft(),Qn(842,`

`),Je(843,`span`,23)(844,`span`,24),Qn(845,`@`),ft(),Je(846,`span`,19),Qn(847,`Component`),ft()(),Je(848,`span`,14),Qn(849,`(`),ft(),Je(850,`span`,14),Qn(851,`{`),ft(),Je(852,`span`,14),Qn(853,`}`),ft(),Je(854,`span`,14),Qn(855,`)`),ft(),Qn(856,`
`),Je(857,`span`,13),Qn(858,`export`),ft(),Qn(859,` `),Je(860,`span`,13),Qn(861,`class`),ft(),Qn(862,` `),Je(863,`span`,22),Qn(864,`ChangeZorroConfigComponent`),ft(),Qn(865,` `),Je(866,`span`,14),Qn(867,`{`),ft(),Qn(868,`
  `),Je(869,`span`,13),Qn(870,`private`),ft(),Qn(871,` nzConfigService `),Je(872,`span`,16),Qn(873,`=`),ft(),Qn(874,` `),Je(875,`span`,19),Qn(876,`inject`),ft(),Je(877,`span`,14),Qn(878,`(`),ft(),Qn(879,`NzConfigService`),Je(880,`span`,14),Qn(881,`)`),ft(),Je(882,`span`,14),Qn(883,`;`),ft(),Qn(884,`

  `),Je(885,`span`,19),Qn(886,`onChangeConfig`),ft(),Je(887,`span`,14),Qn(888,`(`),ft(),Je(889,`span`,14),Qn(890,`)`),ft(),Qn(891,` `),Je(892,`span`,14),Qn(893,`{`),ft(),Qn(894,`
    `),Je(895,`span`,13),Qn(896,`this`),ft(),Je(897,`span`,14),Qn(898,`.`),ft(),Qn(899,`nzConfigService`),Je(900,`span`,14),Qn(901,`.`),ft(),Je(902,`span`,19),Qn(903,`set`),ft(),Je(904,`span`,14),Qn(905,`(`),ft(),Je(906,`span`,15),Qn(907,`'button'`),ft(),Je(908,`span`,14),Qn(909,`,`),ft(),Qn(910,` `),Je(911,`span`,14),Qn(912,`{`),ft(),Qn(913,` nzSize`),Je(914,`span`,16),Qn(915,`:`),ft(),Qn(916,` `),Je(917,`span`,15),Qn(918,`'large'`),ft(),Qn(919,` `),Je(920,`span`,14),Qn(921,`}`),ft(),Je(922,`span`,14),Qn(923,`)`),ft(),Je(924,`span`,14),Qn(925,`;`),ft(),Qn(926,`
  `),Je(927,`span`,14),Qn(928,`}`),ft(),Qn(929,`
`),Je(930,`span`,14),Qn(931,`}`),ft(),Qn(932,`
`),ft()(),Je(933,`p`),Qn(934,`所有的组件实例都会响应这些改变（只要它们没有被单独赋值）。`),ft(),Je(935,`h2`,34)(936,`span`),Qn(937,`优先级说明`),ft(),Je(938,`a`,35),Qn(939,`#`),ft()(),Je(940,`p`),Qn(941,`对于任何一个属性来说，各个来源的值的优先级如下：`),ft(),Je(942,`p`)(943,`strong`),Qn(944,`为组件的某个实例单独设置的值（通过模板或类似于 `),Je(945,`code`),Qn(946,`service.create`),ft(),Qn(947,` 的方法）> 通过 `),Je(948,`code`),Qn(949,`NZ_CONFIG`),ft(),Qn(950,` 提供的全局默认值（包括 `),Je(951,`code`),Qn(952,`set`),ft(),Qn(953,` 方法） > NG-ZORRO 内置的默认值。`),ft()(),Je(954,`p`),Qn(955,`例如，你想创建一个 NzNotification 组件：`),ft(),Je(956,`ol`)(957,`li`),Qn(958,`你在调用 `),Je(959,`code`),Qn(960,`NzNotificationService.success`),ft(),Qn(961,` 时传递参数 `),Je(962,`code`),Qn(963,`{ nzDuration: 6000 }`),ft()(),Je(964,`li`),Qn(965,`你通过 `),Je(966,`code`),Qn(967,`NZ_CONFIG`),ft(),Qn(968,` 提供了全局默认值 `),Je(969,`code`),Qn(970,`{ notification: { nzDuration: 5000 } }`),ft()(),Je(971,`li`),Qn(972,`NG-ZORRO 内部默认值为 4500`),ft()(),Je(973,`p`),Qn(974,`最终该 Notification 将会显示 6000 毫秒。`),ft(),Je(975,`h2`,36)(976,`span`),Qn(977,`可配置项`),ft(),Je(978,`a`,37),Qn(979,`#`),ft()(),Je(980,`p`)(981,`code`),Qn(982,`NzConfig`),ft(),Qn(983,` 接口提供的类型定义信息能够帮助你找到所有支持全局配置项的组件和属性。另外，每个组件的文档都会指出哪些属性可以通过全局配置项的方式指定。`),ft(),bv(),ft()()),l&2&&(Le(5),tt(`nzOffsetTop`,16),Le(),tt(`nzAffix`,!1))},dependencies:[vo,Un,Us,mbe,PCe,Qoe],encapsulation:2})};export{E as default};