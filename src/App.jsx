import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="72pt" height="72pt" viewBox="0 0 1280.000000 763.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <metadata>
                      Created by potrace 1.15, written by Peter Selinger 2001-2017
                    </metadata>
                    <g transform="translate(0.000000,763.000000) scale(0.100000,-0.100000)"
                      fill="#FFFFFF" stroke="none">
                      <path d="M2755 6493 c-395 -51 -784 -240 -1160 -563 -128 -110 -368 -359 -384
-398 -12 -29 -12 -35 2 -50 15 -15 19 -14 42 8 14 13 25 18 25 12 0 -6 -4 -14
-10 -17 -15 -9 -12 -41 4 -54 28 -24 84 22 202 164 27 33 82 97 121 142 40 45
73 85 73 88 0 23 -204 -130 -294 -220 l-69 -70 54 65 c77 94 280 294 379 373
279 224 571 367 890 434 114 25 144 27 345 27 206 0 226 -2 319 -27 158 -42
338 -142 411 -228 11 -12 -2 -5 -30 18 -90 73 -245 120 -489 148 -197 22 -386
21 -520 -5 -110 -22 -291 -80 -310 -101 -8 -8 -6 -10 9 -6 199 55 438 89 635
90 196 2 255 -10 405 -83 100 -49 247 -156 278 -204 l16 -25 -127 -42 c-545
-180 -955 -439 -1378 -870 -286 -293 -460 -545 -570 -829 -74 -193 -112 -438
-94 -602 5 -46 7 -91 4 -102 -3 -10 -2 -16 2 -13 5 3 9 -23 10 -56 3 -234 198
-451 465 -518 120 -30 343 -37 469 -15 326 57 630 230 930 529 466 465 718
968 760 1518 12 157 -3 394 -28 459 -3 8 -18 69 -33 134 -24 107 -26 122 -13
142 27 41 64 48 217 41 242 -11 585 -62 947 -143 200 -45 689 -169 730 -186
l31 -13 -111 -69 c-520 -323 -1035 -848 -1529 -1558 l-102 -148 -90 0 c-103 0
-218 -21 -304 -56 -145 -59 -286 -170 -325 -256 -25 -54 -26 -113 -4 -122 9
-4 14 -9 11 -13 -4 -3 -2 -14 4 -24 18 -34 49 -22 108 42 145 158 167 177 222
193 29 9 76 16 105 16 45 0 56 -4 73 -26 11 -15 18 -31 14 -38 -68 -116 -300
-450 -441 -636 -236 -310 -517 -616 -720 -784 -409 -336 -852 -499 -1362 -499
-200 0 -317 16 -467 64 -222 71 -423 207 -522 352 -35 51 -66 118 -54 115 5
-1 21 2 37 7 19 5 46 2 81 -9 146 -46 280 11 353 149 23 43 27 62 27 141 0 52
-5 97 -11 105 -6 8 -14 36 -16 62 -14 128 -97 197 -238 197 -66 0 -86 -4 -138
-31 -109 -54 -198 -179 -223 -314 -6 -33 -12 -127 -13 -210 -1 -140 1 -155 26
-223 38 -105 83 -176 163 -257 196 -201 481 -307 948 -355 175 -18 509 -8 666
20 406 72 799 237 1201 505 218 145 339 242 490 395 188 189 341 410 597 863
132 233 164 276 225 308 71 37 163 17 192 -42 16 -32 15 -33 -20 -98 -107
-195 -227 -331 -338 -381 -90 -41 -87 -70 6 -70 32 0 38 -3 30 -13 -72 -87 22
-140 146 -82 163 76 303 227 415 451 81 161 123 193 296 224 292 53 448 176
452 356 5 180 4 189 -19 226 -29 47 -58 65 -134 84 -77 20 -175 14 -269 -15
-140 -44 -276 -174 -368 -350 l-43 -84 -65 6 c-111 11 -183 28 -183 44 0 9 41
86 91 172 200 342 378 609 558 835 212 267 637 656 770 707 103 39 170 45 279
26 761 -135 1156 -176 1562 -164 296 10 470 36 668 102 214 72 377 181 420
282 23 54 29 212 11 270 -24 75 -153 158 -321 207 -169 49 -287 61 -598 61
-296 0 -415 -10 -660 -56 -229 -44 -593 -146 -788 -223 l-64 -25 -211 50
c-654 154 -1041 239 -1206 264 -358 54 -864 40 -1239 -34 l-143 -28 -34 47
c-47 64 -167 176 -240 225 -118 77 -300 142 -468 164 -73 10 -365 13 -432 4z
m5870 -477 c238 -41 416 -119 456 -200 8 -15 4 -13 -13 6 -48 56 -224 116
-428 144 -58 9 -213 18 -345 21 -354 8 -576 -22 -1016 -137 -266 -70 -376 -93
-397 -85 -22 9 21 28 190 85 284 95 621 160 958 184 124 9 507 -3 595 -18z
m-29 -131 c220 -36 407 -117 429 -186 4 -11 11 -16 18 -12 7 3 3 -3 -7 -16
-49 -55 -244 -121 -417 -142 -314 -36 -919 34 -1443 169 -63 16 -68 19 -53 34
53 52 472 134 807 158 312 22 512 20 666 -5z m-5019 -21 c-3 -3 -12 -4 -19 -1
-8 3 -5 6 6 6 11 1 17 -2 13 -5z m-77 -21 c-167 -60 -229 -88 -359 -156 -498
-262 -952 -663 -1256 -1107 -32 -47 -64 -90 -70 -95 -15 -13 -85 -152 -110
-218 -10 -26 -20 -45 -22 -43 -6 6 70 184 109 254 112 202 243 368 467 593
366 366 707 591 1121 740 58 21 112 38 120 38 13 -1 13 -1 0 -6z m330 -112
c50 -26 75 -69 101 -174 41 -165 25 -517 -31 -712 -84 -291 -261 -616 -501
-915 -390 -487 -779 -739 -1186 -765 -185 -13 -317 35 -438 159 -120 122 -175
262 -175 445 0 125 10 212 21 186 6 -13 7 -1 4 30 -3 37 -2 43 4 25 l9 -25 1
24 c2 42 59 197 110 298 124 246 330 499 609 745 404 355 804 572 1237 671
134 31 189 33 235 8z m5170 -186 c0 -6 -97 -55 -107 -55 -4 1 17 14 47 30 61
32 60 32 60 25z m-7336 -1399 c-3 -15 -8 -25 -11 -23 -2 3 -1 17 3 31 3 15 8
25 11 23 2 -3 1 -17 -3 -31z m-17 -58 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3
4 -12 1 -19z m-10 -40 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z
m4109 -104 c39 -19 64 -59 64 -101 0 -17 -3 -23 -8 -16 -4 7 -28 15 -52 19
l-45 7 26 -30 c14 -17 31 -44 38 -62 8 -17 18 -28 23 -25 5 4 3 -7 -6 -24 -39
-75 -170 -143 -322 -168 -135 -22 -143 -19 -108 46 32 60 155 194 214 235 39
27 41 30 23 43 -12 9 -40 12 -91 10 -72 -3 -72 -3 -50 15 13 10 46 29 73 43
61 29 168 33 221 8z m-1521 -353 c-6 -6 -66 -26 -134 -45 -119 -34 -374 -142
-415 -175 -37 -30 19 42 68 87 97 89 237 136 426 140 40 1 60 -2 55 -7z m1505
-47 c-25 -25 -66 -57 -92 -70 -103 -52 -249 -71 -281 -36 -15 17 -12 18 74 30
109 15 228 53 289 92 25 16 47 29 50 29 2 1 -16 -20 -40 -45z m-832 -49 c65
-7 93 -24 45 -27 -54 -3 -83 2 -115 23 -19 12 -24 18 -13 15 11 -2 48 -8 83
-11z m-3107 -292 c13 -16 12 -17 -3 -4 -17 13 -22 21 -14 21 2 0 10 -8 17 -17z
m239 -99 c57 -12 114 -15 235 -12 l160 5 -85 -20 c-57 -14 -123 -21 -200 -21
-113 -1 -116 0 -190 36 -41 20 -91 51 -110 67 l-35 31 75 -35 c42 -19 109 -42
150 -51z m-1134 -1570 c103 -47 246 -90 381 -116 105 -20 150 -23 398 -23 247
0 270 -1 200 -11 -44 -6 -120 -17 -170 -24 -130 -18 -407 -8 -505 19 -143 39
-221 76 -377 179 -85 55 -117 84 -40 35 23 -14 74 -41 113 -59z"/>
                    </g>
                  </svg>

                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  )
}
