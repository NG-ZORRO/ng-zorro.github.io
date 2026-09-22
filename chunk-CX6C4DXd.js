import{$i as bt,En as Ne,Gr as W9,Nr as U9,Ns as tre,Wi as at,et as Ebe,js as tn,ks as sye,mn as Lt,mt as Ge,nn as Ke,s as $n,xi as Ze}from"./chunk-CXrAWF7-.js";import"./main-QWOX3Q2F.js";import"./chunk-CQxuOv7I.js";import{d as ia,p as io,t as In}from"./chunk-C5mXbwfG.js";function B(i,a){i&1&&(Ge(0,`span`),$n(1,`全局配置项`),at())}function g(i,a){i&1&&tn(0,`span`)}var E=class i{goLink(a){window&&(window.location.hash=a)}static ɵfac=function(l){return new(l||i)};static ɵcmp=Ke({type:i,selectors:[[`nz-doc-global-config-zh`]],decls:984,vars:2,consts:[[1,`markdown`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzAffix`],[`nzHref`,`#如何使用`,`nzTitle`,`如何使用`,1,`toc-indent-1`],[`nzHref`,`#提供模板`,`nzTitle`,`提供模板`,1,`toc-indent-2`],[`nzHref`,`#局部生效`,`nzTitle`,`局部生效`,1,`toc-indent-1`],[`nzHref`,`#动态变更`,`nzTitle`,`动态变更`,1,`toc-indent-1`],[`nzHref`,`#优先级说明`,`nzTitle`,`优先级说明`,1,`toc-indent-1`],[`nzHref`,`#可配置项`,`nzTitle`,`可配置项`,1,`toc-indent-1`],[`id`,`如何使用`],[`onclick`,`window.location.hash = '如何使用'`,1,`anchor`],[1,`language-typescript`],[1,`token`,`keyword`],[1,`token`,`punctuation`],[1,`token`,`string`],[1,`token`,`operator`],[1,`token`,`comment`],[1,`token`,`number`],[1,`token`,`function`],[`id`,`提供模板`],[`onclick`,`window.location.hash = '提供模板'`,1,`anchor`],[1,`token`,`class-name`],[1,`token`,`decorator`],[1,`token`,`at`,`operator`],[1,`token`,`boolean`],[1,`token`,`template-string`],[1,`token`,`template-punctuation`,`string`],[1,`token`,`constant`],[`id`,`局部生效`],[`onclick`,`window.location.hash = '局部生效'`,1,`anchor`],[1,`token`,`function-variable`,`function`],[`id`,`动态变更`],[`onclick`,`window.location.hash = '动态变更'`,1,`anchor`],[`id`,`优先级说明`],[`onclick`,`window.location.hash = '优先级说明'`,1,`anchor`],[`id`,`可配置项`],[`onclick`,`window.location.hash = '可配置项'`,1,`anchor`]],template:function(l,A){l&1&&(Ge(0,`article`,0)(1,`h1`)(2,`nz-space`),Lt(3,B,2,0,`span`,1)(4,g,1,0,`span`,1),at()(),Ge(5,`nz-affix`,2)(6,`nz-anchor`,3),bt(`nzClick`,function(z){return A.goLink(z)}),tn(7,`nz-link`,4)(8,`nz-link`,5)(9,`nz-link`,6)(10,`nz-link`,7)(11,`nz-link`,8)(12,`nz-link`,9),at()(),Ge(13,`section`,0),W9(),Ge(14,`p`),$n(15,`我们给众多组件添加了`),Ge(16,`strong`),$n(17,`全局配置`),at(),$n(18,`功能，你可以通过全局配置来定义组件的默认行为，从而减少在模板中需要写的代码（让你的代码更加清爽），还能在运行时修改全局配置项。`),at(),Ge(19,`h2`,10)(20,`span`),$n(21,`如何使用`),at(),Ge(22,`a`,11),$n(23,`#`),at()(),Ge(24,`p`),$n(25,`想要为某些组件提供默认配置项, 可以使用 `),Ge(26,`code`),$n(27,`provideNzConfig`),at(),$n(28,` 函数，传入一个符合 `),Ge(29,`code`),$n(30,`NzConfig`),at(),$n(31,` 接口的对象。例如：`),at(),Ge(32,`pre`)(33,`code`,12)(34,`span`,13),$n(35,`import`),at(),$n(36,` `),Ge(37,`span`,14),$n(38,`{`),at(),$n(39,` NzConfig`),Ge(40,`span`,14),$n(41,`,`),at(),$n(42,` provideNzConfig `),Ge(43,`span`,14),$n(44,`}`),at(),$n(45,` `),Ge(46,`span`,13),$n(47,`from`),at(),$n(48,` `),Ge(49,`span`,15),$n(50,`'ng-zorro-antd/core/config'`),at(),Ge(51,`span`,14),$n(52,`;`),at(),$n(53,`

`),Ge(54,`span`,13),$n(55,`const`),at(),$n(56,` ngZorroConfig`),Ge(57,`span`,16),$n(58,`:`),at(),$n(59,` NzConfig `),Ge(60,`span`,16),$n(61,`=`),at(),$n(62,` `),Ge(63,`span`,14),$n(64,`{`),at(),$n(65,`
  `),Ge(66,`span`,17),$n(67,`// 注意组件名称没有 nz 前缀`),at(),$n(68,`
  message`),Ge(69,`span`,16),$n(70,`:`),at(),$n(71,` `),Ge(72,`span`,14),$n(73,`{`),at(),$n(74,` nzTop`),Ge(75,`span`,16),$n(76,`:`),at(),$n(77,` `),Ge(78,`span`,18),$n(79,`120`),at(),$n(80,` `),Ge(81,`span`,14),$n(82,`}`),at(),Ge(83,`span`,14),$n(84,`,`),at(),$n(85,`
  notification`),Ge(86,`span`,16),$n(87,`:`),at(),$n(88,` `),Ge(89,`span`,14),$n(90,`{`),at(),$n(91,` nzTop`),Ge(92,`span`,16),$n(93,`:`),at(),$n(94,` `),Ge(95,`span`,18),$n(96,`240`),at(),$n(97,` `),Ge(98,`span`,14),$n(99,`}`),at(),$n(100,`
`),Ge(101,`span`,14),$n(102,`}`),at(),Ge(103,`span`,14),$n(104,`;`),at(),$n(105,`

`),Ge(106,`span`,13),$n(107,`export`),at(),$n(108,` `),Ge(109,`span`,13),$n(110,`const`),at(),$n(111,` appConfig`),Ge(112,`span`,16),$n(113,`:`),at(),$n(114,` ApplicationConfig `),Ge(115,`span`,16),$n(116,`=`),at(),$n(117,` `),Ge(118,`span`,14),$n(119,`{`),at(),$n(120,`
  providers`),Ge(121,`span`,16),$n(122,`:`),at(),$n(123,` `),Ge(124,`span`,14),$n(125,`[`),at(),Ge(126,`span`,19),$n(127,`provideNzConfig`),at(),Ge(128,`span`,14),$n(129,`(`),at(),$n(130,`ngZorroConfig`),Ge(131,`span`,14),$n(132,`)`),at(),Ge(133,`span`,14),$n(134,`]`),at(),$n(135,`
`),Ge(136,`span`,14),$n(137,`}`),at(),Ge(138,`span`,14),$n(139,`;`),at(),$n(140,`
`),at()(),Ge(141,`p`),$n(142,`这些全局配置项将会被注入 `),Ge(143,`code`),$n(144,`NzConfigService`),at(),$n(145,` 当中并保存。`),at(),Ge(146,`h3`,20)(147,`span`),$n(148,`提供模板`),at(),Ge(149,`a`,21),$n(150,`#`),at()(),Ge(151,`p`),$n(152,`一些组件支持传递模板 `),Ge(153,`code`),$n(154,`TemplateRef<T>`),at(),$n(155,` 作为默认参数，我们来了解一下如何做到这一点。`),at(),Ge(156,`p`),$n(157,`最简单的方式是在应用的根组件中调用 `),Ge(158,`code`),$n(159,`NzConfigService`),at(),$n(160,` 的相关方法：`),at(),Ge(161,`pre`)(162,`code`,12)(163,`span`,13),$n(164,`import`),at(),$n(165,` `),Ge(166,`span`,14),$n(167,`{`),at(),$n(168,` NzConfigService `),Ge(169,`span`,14),$n(170,`}`),at(),$n(171,` `),Ge(172,`span`,13),$n(173,`from`),at(),$n(174,` `),Ge(175,`span`,15),$n(176,`'ng-zorro-antd/core/config'`),at(),Ge(177,`span`,14),$n(178,`;`),at(),$n(179,`

`),Ge(180,`span`,13),$n(181,`export`),at(),$n(182,` `),Ge(183,`span`,13),$n(184,`class`),at(),$n(185,` `),Ge(186,`span`,22),$n(187,`AppComponent`),at(),$n(188,` `),Ge(189,`span`,13),$n(190,`implements`),at(),$n(191,` `),Ge(192,`span`,22),$n(193,`OnInit`),at(),$n(194,` `),Ge(195,`span`,14),$n(196,`{`),at(),$n(197,`
  `),Ge(198,`span`,13),$n(199,`private`),at(),$n(200,` nzConfigService `),Ge(201,`span`,16),$n(202,`=`),at(),$n(203,` `),Ge(204,`span`,19),$n(205,`inject`),at(),Ge(206,`span`,14),$n(207,`(`),at(),$n(208,`NzConfigService`),Ge(209,`span`,14),$n(210,`)`),at(),Ge(211,`span`,14),$n(212,`;`),at(),$n(213,`

  `),Ge(214,`span`,23)(215,`span`,24),$n(216,`@`),at(),Ge(217,`span`,19),$n(218,`ViewChild`),at()(),Ge(219,`span`,14),$n(220,`(`),at(),Ge(221,`span`,15),$n(222,`'nzIndicatorTpl'`),at(),Ge(223,`span`,14),$n(224,`,`),at(),$n(225,` `),Ge(226,`span`,14),$n(227,`{`),at(),$n(228,` `),Ge(229,`span`,13),$n(230,`static`),at(),Ge(231,`span`,16),$n(232,`:`),at(),$n(233,` `),Ge(234,`span`,25),$n(235,`true`),at(),$n(236,` `),Ge(237,`span`,14),$n(238,`}`),at(),Ge(239,`span`,14),$n(240,`)`),at(),$n(241,`
  nzIndicator`),Ge(242,`span`,16),$n(243,`!`),at(),Ge(244,`span`,16),$n(245,`:`),at(),$n(246,` TemplateRef`),Ge(247,`span`,16),$n(248,`<`),at(),Ge(249,`span`,13),$n(250,`void`),at(),Ge(251,`span`,16),$n(252,`>`),at(),Ge(253,`span`,14),$n(254,`;`),at(),$n(255,`

  `),Ge(256,`span`,19),$n(257,`ngOnInit`),at(),Ge(258,`span`,14),$n(259,`(`),at(),Ge(260,`span`,14),$n(261,`)`),at(),Ge(262,`span`,16),$n(263,`:`),at(),$n(264,` `),Ge(265,`span`,13),$n(266,`void`),at(),$n(267,` `),Ge(268,`span`,14),$n(269,`{`),at(),$n(270,`
    `),Ge(271,`span`,13),$n(272,`this`),at(),Ge(273,`span`,14),$n(274,`.`),at(),$n(275,`nzConfigService`),Ge(276,`span`,14),$n(277,`.`),at(),Ge(278,`span`,19),$n(279,`set`),at(),Ge(280,`span`,14),$n(281,`(`),at(),Ge(282,`span`,15),$n(283,`'spin'`),at(),Ge(284,`span`,14),$n(285,`,`),at(),$n(286,` `),Ge(287,`span`,14),$n(288,`{`),at(),$n(289,` nzIndicator`),Ge(290,`span`,16),$n(291,`:`),at(),$n(292,` `),Ge(293,`span`,13),$n(294,`this`),at(),Ge(295,`span`,14),$n(296,`.`),at(),$n(297,`nzIndicator `),Ge(298,`span`,14),$n(299,`}`),at(),Ge(300,`span`,14),$n(301,`)`),at(),Ge(302,`span`,14),$n(303,`;`),at(),$n(304,`
  `),Ge(305,`span`,14),$n(306,`}`),at(),$n(307,`
`),Ge(308,`span`,14),$n(309,`}`),at(),$n(310,`
`),at()(),Ge(311,`p`),$n(312,`然而这种方式可能会让你的 AppComponent 相当臃肿，并违反关注分离原则。`),at(),Ge(313,`p`),$n(314,`因此，当你的项目比较大时，我们建议你使用一个 `),Ge(315,`code`),$n(316,`FactoryProvider`),at(),$n(317,`，如下所示：`),at(),Ge(318,`pre`)(319,`code`,12)(320,`span`,17),$n(321,`// The module-level Component which contains template references.`),at(),$n(322,`
`),Ge(323,`span`,17),$n(324,`// Exporting is required for AOT compatibility`),at(),$n(325,`
`),Ge(326,`span`,23)(327,`span`,24),$n(328,`@`),at(),Ge(329,`span`,19),$n(330,`Component`),at()(),Ge(331,`span`,14),$n(332,`(`),at(),Ge(333,`span`,14),$n(334,`{`),at(),$n(335,`
  template`),Ge(336,`span`,16),$n(337,`:`),at(),$n(338,` `),Ge(339,`span`,26)(340,`span`,27),$n(341,"`"),at(),Ge(342,`span`,15),$n(343,`
    <ng-template #nzIndicatorTpl>
      <span class="ant-spin-dot">
        <nz-icon nzType="loading" />
      </span>
    </ng-template>
  `),at(),Ge(344,`span`,27),$n(345,"`"),at()(),$n(346,`
`),Ge(347,`span`,14),$n(348,`}`),at(),Ge(349,`span`,14),$n(350,`)`),at(),$n(351,`
`),Ge(352,`span`,13),$n(353,`export`),at(),$n(354,` `),Ge(355,`span`,13),$n(356,`class`),at(),$n(357,` `),Ge(358,`span`,22),$n(359,`GlobalTemplatesComponent`),at(),$n(360,` `),Ge(361,`span`,14),$n(362,`{`),at(),$n(363,`
  `),Ge(364,`span`,23)(365,`span`,24),$n(366,`@`),at(),Ge(367,`span`,19),$n(368,`ViewChild`),at()(),Ge(369,`span`,14),$n(370,`(`),at(),Ge(371,`span`,15),$n(372,`'nzIndicatorTpl'`),at(),Ge(373,`span`,14),$n(374,`,`),at(),$n(375,` `),Ge(376,`span`,14),$n(377,`{`),at(),$n(378,` `),Ge(379,`span`,13),$n(380,`static`),at(),Ge(381,`span`,16),$n(382,`:`),at(),$n(383,` `),Ge(384,`span`,25),$n(385,`true`),at(),$n(386,` `),Ge(387,`span`,14),$n(388,`}`),at(),Ge(389,`span`,14),$n(390,`)`),at(),$n(391,`
  nzIndicator`),Ge(392,`span`,16),$n(393,`!`),at(),Ge(394,`span`,16),$n(395,`:`),at(),$n(396,` TemplateRef`),Ge(397,`span`,16),$n(398,`<`),at(),Ge(399,`span`,13),$n(400,`void`),at(),Ge(401,`span`,16),$n(402,`>`),at(),Ge(403,`span`,14),$n(404,`;`),at(),$n(405,`
`),Ge(406,`span`,14),$n(407,`}`),at(),$n(408,`

`),Ge(409,`span`,17),$n(410,`// The Factory function`),at(),$n(411,`
`),Ge(412,`span`,13),$n(413,`const`),at(),$n(414,` nzConfigFactory `),Ge(415,`span`,16),$n(416,`=`),at(),$n(417,` `),Ge(418,`span`,14),$n(419,`(`),at(),Ge(420,`span`,14),$n(421,`)`),at(),Ge(422,`span`,16),$n(423,`:`),at(),$n(424,` NzConfig `),Ge(425,`span`,16),$n(426,`=>`),at(),$n(427,` `),Ge(428,`span`,14),$n(429,`{`),at(),$n(430,`
  `),Ge(431,`span`,13),$n(432,`const`),at(),$n(433,` environmentInjector `),Ge(434,`span`,16),$n(435,`=`),at(),$n(436,` `),Ge(437,`span`,19),$n(438,`inject`),at(),Ge(439,`span`,14),$n(440,`(`),at(),$n(441,`EnvironmentInjector`),Ge(442,`span`,14),$n(443,`)`),at(),Ge(444,`span`,14),$n(445,`;`),at(),$n(446,`
  `),Ge(447,`span`,13),$n(448,`const`),at(),$n(449,` `),Ge(450,`span`,14),$n(451,`{`),at(),$n(452,` nzIndicator `),Ge(453,`span`,14),$n(454,`}`),at(),$n(455,` `),Ge(456,`span`,16),$n(457,`=`),at(),$n(458,` `),Ge(459,`span`,19),$n(460,`createComponent`),at(),Ge(461,`span`,14),$n(462,`(`),at(),$n(463,`component`),Ge(464,`span`,14),$n(465,`,`),at(),$n(466,` `),Ge(467,`span`,14),$n(468,`{`),at(),$n(469,` environmentInjector `),Ge(470,`span`,14),$n(471,`}`),at(),Ge(472,`span`,14),$n(473,`)`),at(),Ge(474,`span`,14),$n(475,`.`),at(),$n(476,`instance`),Ge(477,`span`,14),$n(478,`;`),at(),$n(479,`
  `),Ge(480,`span`,13),$n(481,`return`),at(),$n(482,` `),Ge(483,`span`,14),$n(484,`{`),at(),$n(485,`
    spin`),Ge(486,`span`,16),$n(487,`:`),at(),$n(488,` `),Ge(489,`span`,14),$n(490,`{`),at(),$n(491,`
      nzIndicator
    `),Ge(492,`span`,14),$n(493,`}`),at(),$n(494,`
  `),Ge(495,`span`,14),$n(496,`}`),at(),Ge(497,`span`,14),$n(498,`;`),at(),$n(499,`
`),Ge(500,`span`,14),$n(501,`}`),at(),Ge(502,`span`,14),$n(503,`;`),at(),$n(504,`

`),Ge(505,`span`,13),$n(506,`export`),at(),$n(507,` `),Ge(508,`span`,13),$n(509,`const`),at(),$n(510,` appConfig`),Ge(511,`span`,16),$n(512,`:`),at(),$n(513,` ApplicationConfig `),Ge(514,`span`,16),$n(515,`=`),at(),$n(516,` `),Ge(517,`span`,14),$n(518,`{`),at(),$n(519,`
  providers`),Ge(520,`span`,16),$n(521,`:`),at(),$n(522,` `),Ge(523,`span`,14),$n(524,`[`),at(),$n(525,`
    `),Ge(526,`span`,14),$n(527,`{`),at(),$n(528,`
      `),Ge(529,`span`,17),$n(530,`// The FactoryProvider`),at(),$n(531,`
      provide`),Ge(532,`span`,16),$n(533,`:`),at(),$n(534,` `),Ge(535,`span`,28),$n(536,`NZ_CONFIG`),at(),Ge(537,`span`,14),$n(538,`,`),at(),$n(539,`
      useFactory`),Ge(540,`span`,16),$n(541,`:`),at(),$n(542,` nzConfigFactory
    `),Ge(543,`span`,14),$n(544,`}`),at(),$n(545,`
  `),Ge(546,`span`,14),$n(547,`]`),at(),$n(548,`
`),Ge(549,`span`,14),$n(550,`}`),at(),Ge(551,`span`,14),$n(552,`;`),at(),$n(553,`
`),at()(),Ge(554,`h2`,29)(555,`span`),$n(556,`局部生效`),at(),Ge(557,`a`,30),$n(558,`#`),at()(),Ge(559,`p`),$n(560,`开发者可以利用 Angular 自带的依赖注入机制，在特定组件内重新设定 `),Ge(561,`code`),$n(562,`NZ_CONFIG`),at(),$n(563,`， 该设定不会影响该组件以外的配置。`),at(),Ge(564,`pre`)(565,`code`,12)(566,`span`,23)(567,`span`,24),$n(568,`@`),at(),Ge(569,`span`,19),$n(570,`Component`),at()(),Ge(571,`span`,14),$n(572,`(`),at(),Ge(573,`span`,14),$n(574,`{`),at(),$n(575,`
  providers`),Ge(576,`span`,16),$n(577,`:`),at(),$n(578,` `),Ge(579,`span`,14),$n(580,`[`),at(),$n(581,`
    `),Ge(582,`span`,17),$n(583,`// 重设本地 NzConfigService`),at(),$n(584,`
    NzConfigService`),Ge(585,`span`,14),$n(586,`,`),at(),$n(587,`
    `),Ge(588,`span`,14),$n(589,`{`),at(),$n(590,`
      provide`),Ge(591,`span`,16),$n(592,`:`),at(),$n(593,` `),Ge(594,`span`,28),$n(595,`NZ_CONFIG`),at(),Ge(596,`span`,14),$n(597,`,`),at(),$n(598,`
      useValue`),Ge(599,`span`,16),$n(600,`:`),at(),$n(601,` `),Ge(602,`span`,14),$n(603,`{`),at(),$n(604,`
        button`),Ge(605,`span`,16),$n(606,`:`),at(),$n(607,` `),Ge(608,`span`,14),$n(609,`{`),at(),$n(610,`
          nzSize`),Ge(611,`span`,16),$n(612,`:`),at(),$n(613,` `),Ge(614,`span`,15),$n(615,`'large'`),at(),$n(616,`
        `),Ge(617,`span`,14),$n(618,`}`),at(),$n(619,`
      `),Ge(620,`span`,14),$n(621,`}`),at(),$n(622,`
    `),Ge(623,`span`,14),$n(624,`}`),at(),$n(625,`
  `),Ge(626,`span`,14),$n(627,`]`),at(),$n(628,`
`),Ge(629,`span`,14),$n(630,`}`),at(),Ge(631,`span`,14),$n(632,`)`),at(),$n(633,`
`),at()(),Ge(634,`p`),$n(635,`也可以使用 `),Ge(636,`code`),$n(637,`useFactory`),at(),$n(638,` 将全局配置与区域配置合并后生效`),at(),Ge(639,`blockquote`)(640,`p`),$n(641,`注意：全局配置在初始化之后修改将不会影响该部分配置结果`),at()(),Ge(642,`pre`)(643,`code`,12)(644,`span`,23)(645,`span`,24),$n(646,`@`),at(),Ge(647,`span`,19),$n(648,`Component`),at()(),Ge(649,`span`,14),$n(650,`(`),at(),Ge(651,`span`,14),$n(652,`{`),at(),$n(653,`
  providers`),Ge(654,`span`,16),$n(655,`:`),at(),$n(656,` `),Ge(657,`span`,14),$n(658,`[`),at(),$n(659,`
    `),Ge(660,`span`,17),$n(661,`// 重设本地 NzConfigService`),at(),$n(662,`
    NzConfigService`),Ge(663,`span`,14),$n(664,`,`),at(),$n(665,`
    `),Ge(666,`span`,14),$n(667,`{`),at(),$n(668,`
      provide`),Ge(669,`span`,16),$n(670,`:`),at(),$n(671,` `),Ge(672,`span`,28),$n(673,`NZ_CONFIG`),at(),Ge(674,`span`,14),$n(675,`,`),at(),$n(676,`
      `),Ge(677,`span`,31),$n(678,`useFactory`),at(),Ge(679,`span`,16),$n(680,`:`),at(),$n(681,` `),Ge(682,`span`,14),$n(683,`(`),at(),Ge(684,`span`,14),$n(685,`)`),at(),$n(686,` `),Ge(687,`span`,16),$n(688,`=>`),at(),$n(689,` `),Ge(690,`span`,14),$n(691,`{`),at(),$n(692,`
        `),Ge(693,`span`,17),$n(694,`// 获取全局 NzConfigService`),at(),$n(695,`
        `),Ge(696,`span`,13),$n(697,`const`),at(),$n(698,` globalConfig `),Ge(699,`span`,16),$n(700,`=`),at(),$n(701,` `),Ge(702,`span`,19),$n(703,`inject`),at(),Ge(704,`span`,14),$n(705,`(`),at(),$n(706,`NzConfigService`),Ge(707,`span`,14),$n(708,`,`),at(),$n(709,` `),Ge(710,`span`,14),$n(711,`{`),at(),$n(712,` skipSelf`),Ge(713,`span`,16),$n(714,`:`),at(),$n(715,` `),Ge(716,`span`,25),$n(717,`true`),at(),$n(718,` `),Ge(719,`span`,14),$n(720,`}`),at(),Ge(721,`span`,14),$n(722,`)`),at(),Ge(723,`span`,14),$n(724,`.`),at(),Ge(725,`span`,19),$n(726,`getConfig`),at(),Ge(727,`span`,14),$n(728,`(`),at(),Ge(729,`span`,14),$n(730,`)`),at(),Ge(731,`span`,14),$n(732,`;`),at(),$n(733,`
        `),Ge(734,`span`,13),$n(735,`const`),at(),$n(736,` localConfig `),Ge(737,`span`,16),$n(738,`=`),at(),$n(739,` `),Ge(740,`span`,14),$n(741,`{`),at(),$n(742,`
          select`),Ge(743,`span`,16),$n(744,`:`),at(),$n(745,` `),Ge(746,`span`,14),$n(747,`{`),at(),$n(748,`
            nzVariant`),Ge(749,`span`,16),$n(750,`:`),at(),$n(751,` `),Ge(752,`span`,15),$n(753,`'borderless'`),at(),$n(754,`
          `),Ge(755,`span`,14),$n(756,`}`),at(),$n(757,`
        `),Ge(758,`span`,14),$n(759,`}`),at(),Ge(760,`span`,14),$n(761,`;`),at(),$n(762,`
        `),Ge(763,`span`,17),$n(764,`// 合并全局配置与本地配置`),at(),$n(765,`
        `),Ge(766,`span`,13),$n(767,`const`),at(),$n(768,` mergedConfig `),Ge(769,`span`,16),$n(770,`=`),at(),$n(771,` `),Ge(772,`span`,14),$n(773,`{`),at(),$n(774,`
          `),Ge(775,`span`,16),$n(776,`...`),at(),$n(777,`globalConfig`),Ge(778,`span`,14),$n(779,`,`),at(),$n(780,`
          `),Ge(781,`span`,16),$n(782,`...`),at(),$n(783,`localConfig
        `),Ge(784,`span`,14),$n(785,`}`),at(),Ge(786,`span`,14),$n(787,`;`),at(),$n(788,`
        `),Ge(789,`span`,13),$n(790,`return`),at(),$n(791,` mergedConfig`),Ge(792,`span`,14),$n(793,`;`),at(),$n(794,`
      `),Ge(795,`span`,14),$n(796,`}`),at(),Ge(797,`span`,14),$n(798,`,`),at(),$n(799,`
    `),Ge(800,`span`,14),$n(801,`}`),at(),$n(802,`
  `),Ge(803,`span`,14),$n(804,`]`),at(),$n(805,`
`),Ge(806,`span`,14),$n(807,`}`),at(),Ge(808,`span`,14),$n(809,`)`),at(),$n(810,`
`),at()(),Ge(811,`h2`,32)(812,`span`),$n(813,`动态变更`),at(),Ge(814,`a`,33),$n(815,`#`),at()(),Ge(816,`p`),$n(817,`你可以通过调用 `),Ge(818,`code`),$n(819,`NzConfigService`),at(),$n(820,` 的 `),Ge(821,`code`),$n(822,`set`),at(),$n(823,` 方法来改变某个组件的配置项，例如：`),at(),Ge(824,`pre`)(825,`code`,12)(826,`span`,13),$n(827,`import`),at(),$n(828,` `),Ge(829,`span`,14),$n(830,`{`),at(),$n(831,` NzConfigService `),Ge(832,`span`,14),$n(833,`}`),at(),$n(834,` `),Ge(835,`span`,13),$n(836,`from`),at(),$n(837,` `),Ge(838,`span`,15),$n(839,`'ng-zorro-antd/core/config'`),at(),Ge(840,`span`,14),$n(841,`;`),at(),$n(842,`

`),Ge(843,`span`,23)(844,`span`,24),$n(845,`@`),at(),Ge(846,`span`,19),$n(847,`Component`),at()(),Ge(848,`span`,14),$n(849,`(`),at(),Ge(850,`span`,14),$n(851,`{`),at(),Ge(852,`span`,14),$n(853,`}`),at(),Ge(854,`span`,14),$n(855,`)`),at(),$n(856,`
`),Ge(857,`span`,13),$n(858,`export`),at(),$n(859,` `),Ge(860,`span`,13),$n(861,`class`),at(),$n(862,` `),Ge(863,`span`,22),$n(864,`ChangeZorroConfigComponent`),at(),$n(865,` `),Ge(866,`span`,14),$n(867,`{`),at(),$n(868,`
  `),Ge(869,`span`,13),$n(870,`private`),at(),$n(871,` nzConfigService `),Ge(872,`span`,16),$n(873,`=`),at(),$n(874,` `),Ge(875,`span`,19),$n(876,`inject`),at(),Ge(877,`span`,14),$n(878,`(`),at(),$n(879,`NzConfigService`),Ge(880,`span`,14),$n(881,`)`),at(),Ge(882,`span`,14),$n(883,`;`),at(),$n(884,`

  `),Ge(885,`span`,19),$n(886,`onChangeConfig`),at(),Ge(887,`span`,14),$n(888,`(`),at(),Ge(889,`span`,14),$n(890,`)`),at(),$n(891,` `),Ge(892,`span`,14),$n(893,`{`),at(),$n(894,`
    `),Ge(895,`span`,13),$n(896,`this`),at(),Ge(897,`span`,14),$n(898,`.`),at(),$n(899,`nzConfigService`),Ge(900,`span`,14),$n(901,`.`),at(),Ge(902,`span`,19),$n(903,`set`),at(),Ge(904,`span`,14),$n(905,`(`),at(),Ge(906,`span`,15),$n(907,`'button'`),at(),Ge(908,`span`,14),$n(909,`,`),at(),$n(910,` `),Ge(911,`span`,14),$n(912,`{`),at(),$n(913,` nzSize`),Ge(914,`span`,16),$n(915,`:`),at(),$n(916,` `),Ge(917,`span`,15),$n(918,`'large'`),at(),$n(919,` `),Ge(920,`span`,14),$n(921,`}`),at(),Ge(922,`span`,14),$n(923,`)`),at(),Ge(924,`span`,14),$n(925,`;`),at(),$n(926,`
  `),Ge(927,`span`,14),$n(928,`}`),at(),$n(929,`
`),Ge(930,`span`,14),$n(931,`}`),at(),$n(932,`
`),at()(),Ge(933,`p`),$n(934,`所有的组件实例都会响应这些改变（只要它们没有被单独赋值）。`),at(),Ge(935,`h2`,34)(936,`span`),$n(937,`优先级说明`),at(),Ge(938,`a`,35),$n(939,`#`),at()(),Ge(940,`p`),$n(941,`对于任何一个属性来说，各个来源的值的优先级如下：`),at(),Ge(942,`p`)(943,`strong`),$n(944,`为组件的某个实例单独设置的值（通过模板或类似于 `),Ge(945,`code`),$n(946,`service.create`),at(),$n(947,` 的方法）> 通过 `),Ge(948,`code`),$n(949,`NZ_CONFIG`),at(),$n(950,` 提供的全局默认值（包括 `),Ge(951,`code`),$n(952,`set`),at(),$n(953,` 方法） > NG-ZORRO 内置的默认值。`),at()(),Ge(954,`p`),$n(955,`例如，你想创建一个 NzNotification 组件：`),at(),Ge(956,`ol`)(957,`li`),$n(958,`你在调用 `),Ge(959,`code`),$n(960,`NzNotificationService.success`),at(),$n(961,` 时传递参数 `),Ge(962,`code`),$n(963,`{ nzDuration: 6000 }`),at()(),Ge(964,`li`),$n(965,`你通过 `),Ge(966,`code`),$n(967,`NZ_CONFIG`),at(),$n(968,` 提供了全局默认值 `),Ge(969,`code`),$n(970,`{ notification: { nzDuration: 5000 } }`),at()(),Ge(971,`li`),$n(972,`NG-ZORRO 内部默认值为 4500`),at()(),Ge(973,`p`),$n(974,`最终该 Notification 将会显示 6000 毫秒。`),at(),Ge(975,`h2`,36)(976,`span`),$n(977,`可配置项`),at(),Ge(978,`a`,37),$n(979,`#`),at()(),Ge(980,`p`)(981,`code`),$n(982,`NzConfig`),at(),$n(983,` 接口提供的类型定义信息能够帮助你找到所有支持全局配置项的组件和属性。另外，每个组件的文档都会指出哪些属性可以通过全局配置项的方式指定。`),at(),U9(),at()()),l&2&&(Ne(5),Ze(`nzOffsetTop`,16),Ne(),Ze(`nzAffix`,!1))},dependencies:[io,In,ia,sye,Ebe,tre],encapsulation:2})};export{E as default};