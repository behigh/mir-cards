System.config({
    "babelOptions": {
        "optional": [
            "runtime",
            "optimisation.modules.system"
        ]
    },
    "baseURL": "js/",
    "bundles": {
        "app.js": [
            "controllers.js",
            "controllers/data.js",
            "controllers/transport/terminal/card.js",
            "controllers/transport/terminal/card_free.js",
            "controllers/transport/terminal/order.js",
            "controllers/transport/validator.js",
            "github:jspm/nodelibs-process@0.1.2.js",
            "github:jspm/nodelibs-process@0.1.2/index.js",
            "main.js",
            "npm:babel-runtime@5.8.38/core-js/number/is-finite.js",
            "npm:babel-runtime@5.8.38/core-js/number/is-integer.js",
            "npm:babel-runtime@5.8.38/core-js/object/assign.js",
            "npm:babel-runtime@5.8.38/core-js/object/create.js",
            "npm:babel-runtime@5.8.38/core-js/object/define-properties.js",
            "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
            "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js",
            "npm:babel-runtime@5.8.38/core-js/object/keys.js",
            "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js",
            "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
            "npm:babel-runtime@5.8.38/helpers/create-class.js",
            "npm:babel-runtime@5.8.38/helpers/extends.js",
            "npm:babel-runtime@5.8.38/helpers/get.js",
            "npm:babel-runtime@5.8.38/helpers/inherits.js",
            "npm:babel-runtime@5.8.38/helpers/object-without-properties.js",
            "npm:core-js@1.2.7/library/fn/number/is-finite.js",
            "npm:core-js@1.2.7/library/fn/number/is-integer.js",
            "npm:core-js@1.2.7/library/fn/object/assign.js",
            "npm:core-js@1.2.7/library/fn/object/create.js",
            "npm:core-js@1.2.7/library/fn/object/define-properties.js",
            "npm:core-js@1.2.7/library/fn/object/define-property.js",
            "npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js",
            "npm:core-js@1.2.7/library/fn/object/keys.js",
            "npm:core-js@1.2.7/library/fn/object/set-prototype-of.js",
            "npm:core-js@1.2.7/library/modules/$.a-function.js",
            "npm:core-js@1.2.7/library/modules/$.an-object.js",
            "npm:core-js@1.2.7/library/modules/$.cof.js",
            "npm:core-js@1.2.7/library/modules/$.core.js",
            "npm:core-js@1.2.7/library/modules/$.ctx.js",
            "npm:core-js@1.2.7/library/modules/$.defined.js",
            "npm:core-js@1.2.7/library/modules/$.export.js",
            "npm:core-js@1.2.7/library/modules/$.fails.js",
            "npm:core-js@1.2.7/library/modules/$.global.js",
            "npm:core-js@1.2.7/library/modules/$.iobject.js",
            "npm:core-js@1.2.7/library/modules/$.is-integer.js",
            "npm:core-js@1.2.7/library/modules/$.is-object.js",
            "npm:core-js@1.2.7/library/modules/$.js",
            "npm:core-js@1.2.7/library/modules/$.object-assign.js",
            "npm:core-js@1.2.7/library/modules/$.object-sap.js",
            "npm:core-js@1.2.7/library/modules/$.set-proto.js",
            "npm:core-js@1.2.7/library/modules/$.to-iobject.js",
            "npm:core-js@1.2.7/library/modules/$.to-object.js",
            "npm:core-js@1.2.7/library/modules/es6.number.is-finite.js",
            "npm:core-js@1.2.7/library/modules/es6.number.is-integer.js",
            "npm:core-js@1.2.7/library/modules/es6.object.assign.js",
            "npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js",
            "npm:core-js@1.2.7/library/modules/es6.object.keys.js",
            "npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js",
            "npm:fbjs@0.8.8/lib/EventListener.js",
            "npm:fbjs@0.8.8/lib/ExecutionEnvironment.js",
            "npm:fbjs@0.8.8/lib/camelize.js",
            "npm:fbjs@0.8.8/lib/camelizeStyleName.js",
            "npm:fbjs@0.8.8/lib/containsNode.js",
            "npm:fbjs@0.8.8/lib/createArrayFromMixed.js",
            "npm:fbjs@0.8.8/lib/createNodesFromMarkup.js",
            "npm:fbjs@0.8.8/lib/emptyFunction.js",
            "npm:fbjs@0.8.8/lib/emptyObject.js",
            "npm:fbjs@0.8.8/lib/focusNode.js",
            "npm:fbjs@0.8.8/lib/getActiveElement.js",
            "npm:fbjs@0.8.8/lib/getMarkupWrap.js",
            "npm:fbjs@0.8.8/lib/getUnboundedScrollPosition.js",
            "npm:fbjs@0.8.8/lib/hyphenate.js",
            "npm:fbjs@0.8.8/lib/hyphenateStyleName.js",
            "npm:fbjs@0.8.8/lib/invariant.js",
            "npm:fbjs@0.8.8/lib/isNode.js",
            "npm:fbjs@0.8.8/lib/isTextNode.js",
            "npm:fbjs@0.8.8/lib/memoizeStringOnly.js",
            "npm:fbjs@0.8.8/lib/performance.js",
            "npm:fbjs@0.8.8/lib/performanceNow.js",
            "npm:fbjs@0.8.8/lib/shallowEqual.js",
            "npm:fbjs@0.8.8/lib/warning.js",
            "npm:jquery@3.1.1.js",
            "npm:jquery@3.1.1/dist/jquery.js",
            "npm:object-assign@4.1.1.js",
            "npm:object-assign@4.1.1/index.js",
            "npm:process@0.11.9.js",
            "npm:process@0.11.9/browser.js",
            "npm:react-dom@15.4.2.js",
            "npm:react-dom@15.4.2/index.js",
            "npm:react-dom@15.4.2/lib/ARIADOMPropertyConfig.js",
            "npm:react-dom@15.4.2/lib/AutoFocusUtils.js",
            "npm:react-dom@15.4.2/lib/BeforeInputEventPlugin.js",
            "npm:react-dom@15.4.2/lib/CSSProperty.js",
            "npm:react-dom@15.4.2/lib/CSSPropertyOperations.js",
            "npm:react-dom@15.4.2/lib/CallbackQueue.js",
            "npm:react-dom@15.4.2/lib/ChangeEventPlugin.js",
            "npm:react-dom@15.4.2/lib/DOMChildrenOperations.js",
            "npm:react-dom@15.4.2/lib/DOMLazyTree.js",
            "npm:react-dom@15.4.2/lib/DOMNamespaces.js",
            "npm:react-dom@15.4.2/lib/DOMProperty.js",
            "npm:react-dom@15.4.2/lib/DOMPropertyOperations.js",
            "npm:react-dom@15.4.2/lib/Danger.js",
            "npm:react-dom@15.4.2/lib/DefaultEventPluginOrder.js",
            "npm:react-dom@15.4.2/lib/EnterLeaveEventPlugin.js",
            "npm:react-dom@15.4.2/lib/EventPluginHub.js",
            "npm:react-dom@15.4.2/lib/EventPluginRegistry.js",
            "npm:react-dom@15.4.2/lib/EventPluginUtils.js",
            "npm:react-dom@15.4.2/lib/EventPropagators.js",
            "npm:react-dom@15.4.2/lib/FallbackCompositionState.js",
            "npm:react-dom@15.4.2/lib/HTMLDOMPropertyConfig.js",
            "npm:react-dom@15.4.2/lib/KeyEscapeUtils.js",
            "npm:react-dom@15.4.2/lib/LinkedValueUtils.js",
            "npm:react-dom@15.4.2/lib/PooledClass.js",
            "npm:react-dom@15.4.2/lib/ReactBrowserEventEmitter.js",
            "npm:react-dom@15.4.2/lib/ReactChildReconciler.js",
            "npm:react-dom@15.4.2/lib/ReactComponentBrowserEnvironment.js",
            "npm:react-dom@15.4.2/lib/ReactComponentEnvironment.js",
            "npm:react-dom@15.4.2/lib/ReactCompositeComponent.js",
            "npm:react-dom@15.4.2/lib/ReactDOM.js",
            "npm:react-dom@15.4.2/lib/ReactDOMComponent.js",
            "npm:react-dom@15.4.2/lib/ReactDOMComponentFlags.js",
            "npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js",
            "npm:react-dom@15.4.2/lib/ReactDOMContainerInfo.js",
            "npm:react-dom@15.4.2/lib/ReactDOMEmptyComponent.js",
            "npm:react-dom@15.4.2/lib/ReactDOMFeatureFlags.js",
            "npm:react-dom@15.4.2/lib/ReactDOMIDOperations.js",
            "npm:react-dom@15.4.2/lib/ReactDOMInput.js",
            "npm:react-dom@15.4.2/lib/ReactDOMInvalidARIAHook.js",
            "npm:react-dom@15.4.2/lib/ReactDOMNullInputValuePropHook.js",
            "npm:react-dom@15.4.2/lib/ReactDOMOption.js",
            "npm:react-dom@15.4.2/lib/ReactDOMSelect.js",
            "npm:react-dom@15.4.2/lib/ReactDOMSelection.js",
            "npm:react-dom@15.4.2/lib/ReactDOMTextComponent.js",
            "npm:react-dom@15.4.2/lib/ReactDOMTextarea.js",
            "npm:react-dom@15.4.2/lib/ReactDOMTreeTraversal.js",
            "npm:react-dom@15.4.2/lib/ReactDOMUnknownPropertyHook.js",
            "npm:react-dom@15.4.2/lib/ReactDebugTool.js",
            "npm:react-dom@15.4.2/lib/ReactDefaultBatchingStrategy.js",
            "npm:react-dom@15.4.2/lib/ReactDefaultInjection.js",
            "npm:react-dom@15.4.2/lib/ReactElementSymbol.js",
            "npm:react-dom@15.4.2/lib/ReactEmptyComponent.js",
            "npm:react-dom@15.4.2/lib/ReactErrorUtils.js",
            "npm:react-dom@15.4.2/lib/ReactEventEmitterMixin.js",
            "npm:react-dom@15.4.2/lib/ReactEventListener.js",
            "npm:react-dom@15.4.2/lib/ReactFeatureFlags.js",
            "npm:react-dom@15.4.2/lib/ReactHostComponent.js",
            "npm:react-dom@15.4.2/lib/ReactHostOperationHistoryHook.js",
            "npm:react-dom@15.4.2/lib/ReactInjection.js",
            "npm:react-dom@15.4.2/lib/ReactInputSelection.js",
            "npm:react-dom@15.4.2/lib/ReactInstanceMap.js",
            "npm:react-dom@15.4.2/lib/ReactInstrumentation.js",
            "npm:react-dom@15.4.2/lib/ReactInvalidSetStateWarningHook.js",
            "npm:react-dom@15.4.2/lib/ReactMarkupChecksum.js",
            "npm:react-dom@15.4.2/lib/ReactMount.js",
            "npm:react-dom@15.4.2/lib/ReactMultiChild.js",
            "npm:react-dom@15.4.2/lib/ReactNodeTypes.js",
            "npm:react-dom@15.4.2/lib/ReactOwner.js",
            "npm:react-dom@15.4.2/lib/ReactPropTypeLocationNames.js",
            "npm:react-dom@15.4.2/lib/ReactPropTypesSecret.js",
            "npm:react-dom@15.4.2/lib/ReactReconcileTransaction.js",
            "npm:react-dom@15.4.2/lib/ReactReconciler.js",
            "npm:react-dom@15.4.2/lib/ReactRef.js",
            "npm:react-dom@15.4.2/lib/ReactServerRenderingTransaction.js",
            "npm:react-dom@15.4.2/lib/ReactServerUpdateQueue.js",
            "npm:react-dom@15.4.2/lib/ReactUpdateQueue.js",
            "npm:react-dom@15.4.2/lib/ReactUpdates.js",
            "npm:react-dom@15.4.2/lib/ReactVersion.js",
            "npm:react-dom@15.4.2/lib/SVGDOMPropertyConfig.js",
            "npm:react-dom@15.4.2/lib/SelectEventPlugin.js",
            "npm:react-dom@15.4.2/lib/SimpleEventPlugin.js",
            "npm:react-dom@15.4.2/lib/SyntheticAnimationEvent.js",
            "npm:react-dom@15.4.2/lib/SyntheticClipboardEvent.js",
            "npm:react-dom@15.4.2/lib/SyntheticCompositionEvent.js",
            "npm:react-dom@15.4.2/lib/SyntheticDragEvent.js",
            "npm:react-dom@15.4.2/lib/SyntheticEvent.js",
            "npm:react-dom@15.4.2/lib/SyntheticFocusEvent.js",
            "npm:react-dom@15.4.2/lib/SyntheticInputEvent.js",
            "npm:react-dom@15.4.2/lib/SyntheticKeyboardEvent.js",
            "npm:react-dom@15.4.2/lib/SyntheticMouseEvent.js",
            "npm:react-dom@15.4.2/lib/SyntheticTouchEvent.js",
            "npm:react-dom@15.4.2/lib/SyntheticTransitionEvent.js",
            "npm:react-dom@15.4.2/lib/SyntheticUIEvent.js",
            "npm:react-dom@15.4.2/lib/SyntheticWheelEvent.js",
            "npm:react-dom@15.4.2/lib/Transaction.js",
            "npm:react-dom@15.4.2/lib/ViewportMetrics.js",
            "npm:react-dom@15.4.2/lib/accumulateInto.js",
            "npm:react-dom@15.4.2/lib/adler32.js",
            "npm:react-dom@15.4.2/lib/checkReactTypeSpec.js",
            "npm:react-dom@15.4.2/lib/createMicrosoftUnsafeLocalFunction.js",
            "npm:react-dom@15.4.2/lib/dangerousStyleValue.js",
            "npm:react-dom@15.4.2/lib/escapeTextContentForBrowser.js",
            "npm:react-dom@15.4.2/lib/findDOMNode.js",
            "npm:react-dom@15.4.2/lib/flattenChildren.js",
            "npm:react-dom@15.4.2/lib/forEachAccumulated.js",
            "npm:react-dom@15.4.2/lib/getEventCharCode.js",
            "npm:react-dom@15.4.2/lib/getEventKey.js",
            "npm:react-dom@15.4.2/lib/getEventModifierState.js",
            "npm:react-dom@15.4.2/lib/getEventTarget.js",
            "npm:react-dom@15.4.2/lib/getHostComponentFromComposite.js",
            "npm:react-dom@15.4.2/lib/getIteratorFn.js",
            "npm:react-dom@15.4.2/lib/getNextDebugID.js",
            "npm:react-dom@15.4.2/lib/getNodeForCharacterOffset.js",
            "npm:react-dom@15.4.2/lib/getTextContentAccessor.js",
            "npm:react-dom@15.4.2/lib/getVendorPrefixedEventName.js",
            "npm:react-dom@15.4.2/lib/instantiateReactComponent.js",
            "npm:react-dom@15.4.2/lib/isEventSupported.js",
            "npm:react-dom@15.4.2/lib/isTextInputElement.js",
            "npm:react-dom@15.4.2/lib/quoteAttributeValueForBrowser.js",
            "npm:react-dom@15.4.2/lib/reactProdInvariant.js",
            "npm:react-dom@15.4.2/lib/renderSubtreeIntoContainer.js",
            "npm:react-dom@15.4.2/lib/setInnerHTML.js",
            "npm:react-dom@15.4.2/lib/setTextContent.js",
            "npm:react-dom@15.4.2/lib/shouldUpdateReactComponent.js",
            "npm:react-dom@15.4.2/lib/traverseAllChildren.js",
            "npm:react-dom@15.4.2/lib/validateDOMNesting.js",
            "npm:react@15.4.2.js",
            "npm:react@15.4.2/lib/KeyEscapeUtils.js",
            "npm:react@15.4.2/lib/PooledClass.js",
            "npm:react@15.4.2/lib/React.js",
            "npm:react@15.4.2/lib/ReactChildren.js",
            "npm:react@15.4.2/lib/ReactClass.js",
            "npm:react@15.4.2/lib/ReactComponent.js",
            "npm:react@15.4.2/lib/ReactComponentTreeHook.js",
            "npm:react@15.4.2/lib/ReactCurrentOwner.js",
            "npm:react@15.4.2/lib/ReactDOMFactories.js",
            "npm:react@15.4.2/lib/ReactElement.js",
            "npm:react@15.4.2/lib/ReactElementSymbol.js",
            "npm:react@15.4.2/lib/ReactElementValidator.js",
            "npm:react@15.4.2/lib/ReactNoopUpdateQueue.js",
            "npm:react@15.4.2/lib/ReactPropTypeLocationNames.js",
            "npm:react@15.4.2/lib/ReactPropTypes.js",
            "npm:react@15.4.2/lib/ReactPropTypesSecret.js",
            "npm:react@15.4.2/lib/ReactPureComponent.js",
            "npm:react@15.4.2/lib/ReactVersion.js",
            "npm:react@15.4.2/lib/canDefineProperty.js",
            "npm:react@15.4.2/lib/checkReactTypeSpec.js",
            "npm:react@15.4.2/lib/getIteratorFn.js",
            "npm:react@15.4.2/lib/onlyChild.js",
            "npm:react@15.4.2/lib/reactProdInvariant.js",
            "npm:react@15.4.2/lib/traverseAllChildren.js",
            "npm:react@15.4.2/react.js",
            "react-components/layout.js",
            "react-components/scrollbar.js",
            "vendor/bs/modal.js",
            "vendor/bs/util.js",
            "vendor/gemini-scrollbar/index.js",
            "vendor/reveal/reveal.js",
            "vendor/store/store.js"
        ]
    },
    "defaultJSExtensions": true,
    "map": {
        "babel": "npm:babel-core@5.8.38",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "classnames": "npm:classnames@2.2.5",
        "core-js": "npm:core-js@1.2.7",
        "dom-helpers": "npm:dom-helpers@3.2.0",
        "gemini-scrollbar": "vendor/gemini-scrollbar/index",
        "github:jspm/nodelibs-assert@0.1.0": {
            "assert": "npm:assert@1.4.1"
        },
        "github:jspm/nodelibs-buffer@0.1.0": {
            "buffer": "npm:buffer@3.6.0"
        },
        "github:jspm/nodelibs-domain@0.1.0": {
            "domain-browser": "npm:domain-browser@1.1.7"
        },
        "github:jspm/nodelibs-events@0.1.1": {
            "events": "npm:events@1.0.2"
        },
        "github:jspm/nodelibs-http@1.7.1": {
            "Base64": "npm:Base64@0.2.1",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "url": "github:jspm/nodelibs-url@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "github:jspm/nodelibs-https@0.1.0": {
            "https-browserify": "npm:https-browserify@0.0.0"
        },
        "github:jspm/nodelibs-path@0.1.0": {
            "path-browserify": "npm:path-browserify@0.0.0"
        },
        "github:jspm/nodelibs-process@0.1.2": {
            "process": "npm:process@0.11.9"
        },
        "github:jspm/nodelibs-stream@0.1.0": {
            "stream-browserify": "npm:stream-browserify@1.0.0"
        },
        "github:jspm/nodelibs-string_decoder@0.1.0": {
            "string_decoder": "npm:string_decoder@0.10.31"
        },
        "github:jspm/nodelibs-url@0.1.0": {
            "url": "npm:url@0.10.3"
        },
        "github:jspm/nodelibs-util@0.1.0": {
            "util": "npm:util@0.10.3"
        },
        "github:jspm/nodelibs-vm@0.1.0": {
            "vm-browserify": "npm:vm-browserify@0.0.4"
        },
        "github:jspm/nodelibs-zlib@0.1.0": {
            "browserify-zlib": "npm:browserify-zlib@0.1.4"
        },
        "invariant": "npm:invariant@2.2.2",
        "jquery": "npm:jquery@3.1.1",
        "lodash-compat": "npm:lodash-compat@3.10.2",
        "npm:asap@2.0.5": {
            "domain": "github:jspm/nodelibs-domain@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:assert@1.4.1": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "util": "npm:util@0.10.3"
        },
        "npm:babel-runtime@5.8.38": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:browserify-zlib@0.1.4": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "pako": "npm:pako@0.2.9",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "readable-stream": "npm:readable-stream@2.2.2",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:buffer-shims@1.0.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:buffer@3.6.0": {
            "base64-js": "npm:base64-js@0.0.8",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "ieee754": "npm:ieee754@1.1.8",
            "isarray": "npm:isarray@1.0.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:core-js@1.2.7": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        },
        "npm:core-util-is@1.0.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:domain-browser@1.1.7": {
            "events": "github:jspm/nodelibs-events@0.1.1"
        },
        "npm:encoding@0.1.12": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "iconv-lite": "npm:iconv-lite@0.4.15"
        },
        "npm:fbjs@0.8.8": {
            "core-js": "npm:core-js@1.2.7",
            "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
            "loose-envify": "npm:loose-envify@1.3.1",
            "object-assign": "npm:object-assign@4.1.1",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "promise": "npm:promise@7.1.1",
            "setimmediate": "npm:setimmediate@1.0.5",
            "ua-parser-js": "npm:ua-parser-js@0.7.12"
        },
        "npm:https-browserify@0.0.0": {
            "http": "github:jspm/nodelibs-http@1.7.1"
        },
        "npm:iconv-lite@0.4.15": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
            "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        },
        "npm:inherits@2.0.1": {
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:invariant@2.2.2": {
            "loose-envify": "npm:loose-envify@1.3.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:isomorphic-fetch@2.2.1": {
            "node-fetch": "npm:node-fetch@1.6.3",
            "whatwg-fetch": "npm:whatwg-fetch@2.0.2"
        },
        "npm:lodash-compat@3.10.2": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:loose-envify@1.3.1": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "js-tokens": "npm:js-tokens@3.0.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:node-fetch@1.6.3": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "encoding": "npm:encoding@0.1.12",
            "http": "github:jspm/nodelibs-http@1.7.1",
            "https": "github:jspm/nodelibs-https@0.1.0",
            "is-stream": "npm:is-stream@1.1.0",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "url": "github:jspm/nodelibs-url@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0",
            "zlib": "github:jspm/nodelibs-zlib@0.1.0"
        },
        "npm:pako@0.2.9": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:path-browserify@0.0.0": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:process-nextick-args@1.0.7": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:process@0.11.9": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "vm": "github:jspm/nodelibs-vm@0.1.0"
        },
        "npm:promise@7.1.1": {
            "asap": "npm:asap@2.0.5",
            "fs": "github:jspm/nodelibs-fs@0.1.2"
        },
        "npm:punycode@1.3.2": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:react-dom@15.4.2": {
            "fbjs": "npm:fbjs@0.8.8",
            "loose-envify": "npm:loose-envify@1.3.1",
            "object-assign": "npm:object-assign@4.1.1",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "react": "npm:react@15.4.2"
        },
        "npm:react-overlays@0.6.10": {
            "classnames": "npm:classnames@2.2.5",
            "dom-helpers": "npm:dom-helpers@2.4.0",
            "react": "npm:react@15.4.2",
            "react-dom": "npm:react-dom@15.4.2",
            "react-prop-types": "npm:react-prop-types@0.4.0",
            "warning": "npm:warning@3.0.0"
        },
        "npm:react-prop-types@0.4.0": {
            "react": "npm:react@15.4.2",
            "warning": "npm:warning@3.0.0"
        },
        "npm:react@15.4.2": {
            "fbjs": "npm:fbjs@0.8.8",
            "loose-envify": "npm:loose-envify@1.3.1",
            "object-assign": "npm:object-assign@4.1.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:readable-stream@1.1.14": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "core-util-is": "npm:core-util-is@1.0.2",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "isarray": "npm:isarray@0.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream-browserify": "npm:stream-browserify@1.0.0",
            "string_decoder": "npm:string_decoder@0.10.31"
        },
        "npm:readable-stream@2.2.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "buffer-shims": "npm:buffer-shims@1.0.0",
            "core-util-is": "npm:core-util-is@1.0.2",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "isarray": "npm:isarray@1.0.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "process-nextick-args": "npm:process-nextick-args@1.0.7",
            "string_decoder": "npm:string_decoder@0.10.31",
            "util-deprecate": "npm:util-deprecate@1.0.2"
        },
        "npm:setimmediate@1.0.5": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:stream-browserify@1.0.0": {
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "readable-stream": "npm:readable-stream@1.1.14"
        },
        "npm:string_decoder@0.10.31": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:ua-parser-js@0.7.12": {
            "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        },
        "npm:url@0.10.3": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "punycode": "npm:punycode@1.3.2",
            "querystring": "npm:querystring@0.2.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:util-deprecate@1.0.2": {
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:util@0.10.3": {
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:vm-browserify@0.0.4": {
            "indexof": "npm:indexof@0.0.1"
        },
        "npm:warning@3.0.0": {
            "loose-envify": "npm:loose-envify@1.3.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "react": "npm:react@15.4.2",
        "react-dom": "npm:react-dom@15.4.2",
        "react-overlays": "npm:react-overlays@0.6.10",
        "react-prop-types": "npm:react-prop-types@0.4.0",
        "reveal.js": "vendor/reveal/reveal",
        "store": "vendor/store/store",
        "text": "github:systemjs/plugin-text@0.0.9"
    },
    "paths": {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*",
        "slides/*": "/slides/*"
    },
    "transpiler": "babel"
});