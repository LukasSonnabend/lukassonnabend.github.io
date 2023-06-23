"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image_export_optimizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4897);
/* harmony import */ var next_image_export_optimizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image_export_optimizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tech_line_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1756);



const ExperienceCard = ({ exp , content  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-6 rounded-lg shadow-lg dark:bg-slate-800 bg-white w-100",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-2 mb-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        children: exp.frontmatter.logo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image_export_optimizer__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: exp.frontmatter.logo,
                            width: "100%",
                            height: "100%",
                            alt: "",
                            className: "img h-auto sm:max-h-12 object-contain"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-700 dark:text-white text-xl font-semibold m-0 align-middle",
                                children: exp.frontmatter.jobTitle
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-gray-700 dark:text-white text-base m-0 align-middle",
                                children: [
                                    "@ ",
                                    exp.frontmatter.company,
                                    " - ",
                                    exp.frontmatter.location
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-gray-500 text-sm m-0 align-middle",
                                children: [
                                    exp.frontmatter.startDate,
                                    " - ",
                                    exp.frontmatter.endDate ? exp.frontmatter.endDate : "present"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: exp.frontmatter.technologies && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tech_line_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    technologies: exp.frontmatter.technologies
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "content",
                dangerouslySetInnerHTML: {
                    __html: content
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExperienceCard);


/***/ }),

/***/ 2525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Hero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "next-image-export-optimizer"
var external_next_image_export_optimizer_ = __webpack_require__(4897);
var external_next_image_export_optimizer_default = /*#__PURE__*/__webpack_require__.n(external_next_image_export_optimizer_);
;// CONCATENATED MODULE: ./education.json
const education_namespaceObject = JSON.parse('[{"name":"Darmstadt University of Applied Sciences","url":"https://h-da.de/en/","degree":"BSc. Computer Science","yearStarted":2020,"location":"Darmstadt, Germany"},{"name":"International School of Management","url":"https://en.ism.de/","degree":"BA. Marketing & Communications Management","yearStarted":2016,"yearGraduated":2019,"location":"Frankfurt a.M., Germany"}]');
;// CONCATENATED MODULE: ./components/Hero.tsx




const Hero = ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid gap-4 grid-cols-12 px-3 justify-center md:py-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-span-12 md:col-span-4 flex flex-col justify-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-40 lg:w-64 mx-auto",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_next_image_export_optimizer_default()), {
                                        src: "/me2.jpeg",
                                        width: "100%",
                                        height: "100%",
                                        unoptimized: true,
                                        layout: "responsive",
                                        className: "rounded-full object-cover",
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-4xl",
                                children: "Lukas Sonnabend"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-span-12 md:col-span-8 xl:col-span-6 right_side",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-4xl my-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "Hi \uD83D\uDC4B"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-xl",
                                            children: "My Name is Lukas, I am currently pursuing a Bachelor's degree in Computer Science at the University of Applied Sciences in Darmstadt, aiming on graduating in summer of 2023."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-12",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mb-2 sm:mb-0 md:p-0 col-span-6 sm:col-span-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-xl mb-2 font-semibold",
                                                    children: "Main Interests"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "list-disc pl-6",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "sm:mb-2",
                                                            children: "Web Development"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Distributed Systems"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-span-12 md:col-span-8",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-xl mb-2 font-semibold",
                                                    children: "Education"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "p-0",
                                                    children: education_namespaceObject && education_namespaceObject.map((uni)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "flex mb-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    children: uni.yearGraduated ? /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGraduationCap, {
                                                                        className: "inline-block mr-2"
                                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaUniversity, {
                                                                        className: "inline-block mr-2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: uni.degree
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: uni.url,
                                                                            className: "block text-sm",
                                                                            children: uni.name
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }, uni.name))
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
/* harmony default export */ const components_Hero = (Hero);


/***/ }),

/***/ 5745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PostCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tech_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1756);
/* harmony import */ var next_image_export_optimizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4897);
/* harmony import */ var next_image_export_optimizer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image_export_optimizer__WEBPACK_IMPORTED_MODULE_3__);




function PostCard({ post  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white dark:bg-slate-800 flex flex-col sm:flex-row rounded-lg shadow-lg drop-shadow-md",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sm:w-5/12 mr-2 post-card-image flex mb-1 sm:mb-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/projects/[key]",
                    as: `/projects/${post.slug}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image_export_optimizer__WEBPACK_IMPORTED_MODULE_3___default()), {
                        width: "100%",
                        height: "100%",
                        className: "object-cover w-full h-full cursor-pointer",
                        src: post.frontmatter.thumbnail,
                        alt: post.frontmatter.title,
                        unoptimized: true
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center sm:text-left sm:w-9/12 mx-12 md:mx-0 my-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/projects/[key]",
                        as: `/projects/${post.slug}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-2xl mb-2 font-extrabold cursor-pointer hover:underline",
                            children: post.frontmatter.title
                        })
                    }),
                    post.frontmatter.subheading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: post.frontmatter.subheading
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mr-5 mb-2",
                        children: post.frontmatter.teaser
                    }),
                    post.frontmatter.technology && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tech_line__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        className: "justify-center sm:justify-start",
                        technologies: post.frontmatter.technology
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-gray-500 text-sm m-0 align-middle",
                        children: post.frontmatter.published
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/projects/[key]",
                        as: `/projects/${post.slug}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "text-blue-500 hover:underline",
                            children: "Read more"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Section = (props)=>{
    const headingColor = props.className?.includes("bg") ? "text-white" : "dark:text-white text-black";
    //"col-span-12 md:col-span-8 xl:col-span-6 right_side">
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: props.id,
        className: props.className + " text-slate-900 dark:text-white",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "dark:bg-slate-900 grid gap-4 grid-cols-12 justify-center p-2 lg:p-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-span-12 md:col-span-4 text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "p-8 text-4xl xl:text-6xl 2xl:text-7xl text-center font-bold " + headingColor,
                        children: props.sectionTitle
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-span-12 lg:col-span-8 xl:col-span-6 grid grid-flow-row auto-rows-[1fr] gap-y-4",
                    children: props.children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);


/***/ }),

/***/ 1756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ tech_line)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: external "react-icons/si"
const si_namespaceObject = require("react-icons/si");
;// CONCATENATED MODULE: external "react-icons/tb"
const tb_namespaceObject = require("react-icons/tb");
;// CONCATENATED MODULE: external "rc-tooltip"
const external_rc_tooltip_namespaceObject = require("rc-tooltip");
var external_rc_tooltip_default = /*#__PURE__*/__webpack_require__.n(external_rc_tooltip_namespaceObject);
;// CONCATENATED MODULE: ./components/tech-line.tsx






const TechLine = ({ technologies , className  })=>{
    const techIcon = (technology, index)=>{
        switch(technology){
            case "Ruby":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiRuby, {
                        className: "h-full w-8"
                    }, index)
                });
            case "Ruby on Rails":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiRubyonrails, {
                        className: "h-full w-8"
                    }, index)
                });
            case "Vue":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaVuejs, {
                        className: "h-full w-8"
                    }, index)
                });
            case "JavaScript":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiJavascript, {
                        className: "h-full w-8"
                    }, index)
                });
            case "Docker":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaDocker, {
                        className: "h-full w-8"
                    }, index)
                });
            case "React":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaReact, {
                        className: "h-full w-8"
                    }, index)
                });
            case "Java":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaJava, {
                        className: "h-full w-8"
                    }, index)
                });
            case "Gitlab":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGitlab, {
                        className: "h-full w-8"
                    }, index)
                });
            case "Bitbucket":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaBitbucket, {
                        className: "h-full w-8"
                    }, index)
                });
            case "Node":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaNodeJs, {
                        className: "h-full w-8"
                    }, index)
                });
            case "Jest":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiJest, {
                        className: "h-full w-8"
                    }, index)
                });
            case "Next.js":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(tb_namespaceObject.TbBrandNextjs, {
                        className: "h-full w-8"
                    }, index)
                });
            case "Android Studio":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaAndroid, {
                        className: "h-full w-8"
                    }, index)
                });
            case "TypeScript":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiTypescript, {
                        className: "h-full w-8"
                    }, index)
                });
            case "TailwindCSS":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiTailwindcss, {
                        className: "h-full w-8"
                    }, index)
                });
            case "DB2":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiIbm, {
                        className: "h-full w-8"
                    }, index)
                });
            case "SVN":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiSubversion, {
                        className: "h-full w-8"
                    }, "index")
                });
            case "Selenium":
                return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_tooltip_default()), {
                    placement: "top",
                    trigger: [
                        "hover"
                    ],
                    overlay: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: technology
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(si_namespaceObject.SiSelenium, {
                        className: "h-full w-8"
                    })
                });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-sm",
                children: "Technology used:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: className ? "flex gap-5 h-10 " + className : "flex gap-5 h-10",
                children: technologies.map((technology, index)=>{
                    return techIcon(technology, index);
                })
            })
        ]
    });
};
/* harmony default export */ const tech_line = (TechLine);


/***/ }),

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2525);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Navbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8010);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5745);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5824);
/* harmony import */ var _components_ExperienceCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4285);
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3193);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_11__]);
marked__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function Index({ posts , projects , experience  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Lukas Sonnabend | Home"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "This is the home page"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-neutral-50 dark:bg-slate-900 text-slate-900 dark:text-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Section__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        sectionTitle: "Experience",
                        id: "experience",
                        className: "bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-inner",
                        children: experience.map((exp, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ExperienceCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                exp: exp,
                                content: (0,marked__WEBPACK_IMPORTED_MODULE_11__.marked)(exp.content)
                            }, index))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Section__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        id: "projects",
                        sectionTitle: "Projects",
                        className: "pt-4 shadow-inner",
                        children: projects.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                post: post
                            }, index))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}
async function getStaticProps() {
    const projectFile = fs__WEBPACK_IMPORTED_MODULE_4___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("projects"));
    const postFile = fs__WEBPACK_IMPORTED_MODULE_4___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("posts"));
    const expFile = fs__WEBPACK_IMPORTED_MODULE_4___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("experience"));
    const sortOrder = (a, z)=>{
        return new Date(z.frontmatter.published).valueOf() - new Date(a.frontmatter.published).valueOf();
    };
    const experienceOrder = (a, z)=>{
        return new Date(z.frontmatter.startDate).valueOf() - new Date(a.frontmatter.startDate).valueOf();
    };
    const posts = postFile.map((filename)=>{
        const slug = filename.replace(".md", "");
        const markdown = fs__WEBPACK_IMPORTED_MODULE_4___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("posts", filename), "utf-8");
        const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_5___default()(markdown);
        return {
            slug,
            frontmatter
        };
    }).filter((post)=>post.frontmatter.published);
    const projects = projectFile.map((filename)=>{
        const slug = filename.replace(".md", "");
        const markdown = fs__WEBPACK_IMPORTED_MODULE_4___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("projects", filename), "utf-8");
        const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_5___default()(markdown);
        return {
            slug,
            frontmatter
        };
    }).filter((post)=>post.frontmatter.published);
    const experience = expFile.map((filename)=>{
        const slug = filename.replace(".md", "");
        const markdown = fs__WEBPACK_IMPORTED_MODULE_4___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("experience", filename), "utf-8");
        const { data: frontmatter , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_5___default()(markdown);
        return {
            slug,
            frontmatter,
            content
        };
    });
    return {
        props: {
            posts: posts.sort(sortOrder),
            experience: experience.sort(experienceOrder),
            projects: projects.sort(sortOrder)
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 4897:
/***/ ((module) => {

module.exports = require("next-image-export-optimizer");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8974:
/***/ ((module) => {

module.exports = import("marked");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,543], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();