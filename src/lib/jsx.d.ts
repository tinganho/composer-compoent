
declare module JSX {
    export interface Element {
        isIntrinsic: boolean;
        toString: () => string;
        toDom: () => Node;
        setComponent: (component: any) => void;
        bindDom: () => void;
    }

    export interface IntrinsicElements {
        // HTML
        a: HtmlAttribute;
        abbr: HtmlAttribute;
        address: HtmlAttribute;
        area: HtmlAttribute;
        article: HtmlAttribute;
        aside: HtmlAttribute;
        audio: HtmlAttribute;
        b: HtmlAttribute;
        base: HtmlAttribute;
        bdi: HtmlAttribute;
        bdo: HtmlAttribute;
        big: HtmlAttribute;
        blockquote: HtmlAttribute;
        body: HtmlAttribute;
        br: HtmlAttribute;
        button: HtmlAttribute;
        canvas: HtmlAttribute;
        caption: HtmlAttribute;
        cite: HtmlAttribute;
        code: HtmlAttribute;
        col: HtmlAttribute;
        colgroup: HtmlAttribute;
        data: HtmlAttribute;
        datalist: HtmlAttribute;
        dd: HtmlAttribute;
        del: HtmlAttribute;
        details: HtmlAttribute;
        dfn: HtmlAttribute;
        dialog: HtmlAttribute;
        div: HtmlAttribute;
        dl: HtmlAttribute;
        dt: HtmlAttribute;
        em: HtmlAttribute;
        embed: HtmlAttribute;
        fieldset: HtmlAttribute;
        figcaption: HtmlAttribute;
        figure: HtmlAttribute;
        footer: HtmlAttribute;
        form: HtmlAttribute;
        h1: HtmlAttribute;
        h2: HtmlAttribute;
        h3: HtmlAttribute;
        h4: HtmlAttribute;
        h5: HtmlAttribute;
        h6: HtmlAttribute;
        head: HtmlAttribute;
        header: HtmlAttribute;
        hr: HtmlAttribute;
        html: HtmlAttribute;
        i: HtmlAttribute;
        iframe: HtmlAttribute;
        img: HtmlAttribute;
        input: HtmlAttribute;
        ins: HtmlAttribute;
        kbd: HtmlAttribute;
        keygen: HtmlAttribute;
        label: HtmlAttribute;
        legend: HtmlAttribute;
        li: HtmlAttribute;
        link: HtmlAttribute;
        main: HtmlAttribute;
        map: HtmlAttribute;
        mark: HtmlAttribute;
        menu: HtmlAttribute;
        menuitem: HtmlAttribute;
        meta: HtmlAttribute;
        meter: HtmlAttribute;
        nav: HtmlAttribute;
        noscript: HtmlAttribute;
        object: HtmlAttribute;
        ol: HtmlAttribute;
        optgroup: HtmlAttribute;
        option: HtmlAttribute;
        output: HtmlAttribute;
        p: HtmlAttribute;
        param: HtmlAttribute;
        picture: HtmlAttribute;
        pre: HtmlAttribute;
        progress: HtmlAttribute;
        q: HtmlAttribute;
        rp: HtmlAttribute;
        rt: HtmlAttribute;
        ruby: HtmlAttribute;
        s: HtmlAttribute;
        samp: HtmlAttribute;
        script: HtmlAttribute;
        section: HtmlAttribute;
        select: HtmlAttribute;
        small: HtmlAttribute;
        source: HtmlAttribute;
        span: HtmlAttribute;
        strong: HtmlAttribute;
        style: HtmlAttribute;
        sub: HtmlAttribute;
        summary: HtmlAttribute;
        sup: HtmlAttribute;
        table: HtmlAttribute;
        tbody: HtmlAttribute;
        td: HtmlAttribute;
        textarea: HtmlAttribute;
        tfoot: HtmlAttribute;
        th: HtmlAttribute;
        thead: HtmlAttribute;
        time: HtmlAttribute;
        title: HtmlAttribute;
        tr: HtmlAttribute;
        track: HtmlAttribute;
        u: HtmlAttribute;
        ul: HtmlAttribute;
        "var": HtmlAttribute;
        video: HtmlAttribute;
        wbr: HtmlAttribute;

        // SVG
        svg: SvgElementAttributes;

        circle: SvgAttributes;
        defs: SvgAttributes;
        ellipse: SvgAttributes;
        g: SvgAttributes;
        line: SvgAttributes;
        linearGradient: SvgAttributes;
        mask: SvgAttributes;
        path: SvgAttributes;
        pattern: SvgAttributes;
        polygon: SvgAttributes;
        polyline: SvgAttributes;
        radialGradient: SvgAttributes;
        rect: SvgAttributes;
        stop: SvgAttributes;
        text: SvgAttributes;
        tspan: SvgAttributes;
    }

    interface AbstractView {
        styleMedia: StyleMedia;
        document: Document;
    }

    interface SyntheticEvent {
        bubbles: boolean;
        cancelable: boolean;
        currentTarget: EventTarget;
        defaultPrevented: boolean;
        eventPhase: number;
        isTrusted: boolean;
        nativeEvent: Event;
        preventDefault(): void;
        stopPropagation(): void;
        target: EventTarget;
        timeStamp: Date;
        type: string;
    }

    interface DragEvent extends SyntheticEvent {
        dataTransfer: DataTransfer;
    }

    interface ClipboardEvent extends SyntheticEvent {
        clipboardData: DataTransfer;
    }

    interface KeyboardEvent extends SyntheticEvent {
        altKey: boolean;
        charCode: number;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        key: string;
        keyCode: number;
        locale: string;
        location: number;
        metaKey: boolean;
        repeat: boolean;
        shiftKey: boolean;
        which: number;
    }

    interface FocusEvent extends SyntheticEvent {
        relatedTarget: EventTarget;
    }

    interface FormEvent extends SyntheticEvent {
    }

    interface MouseEvent extends SyntheticEvent {
        altKey: boolean;
        button: number;
        buttons: number;
        clientX: number;
        clientY: number;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        pageX: number;
        pageY: number;
        relatedTarget: EventTarget;
        screenX: number;
        screenY: number;
        shiftKey: boolean;
    }

    interface TouchEvent extends SyntheticEvent {
        altKey: boolean;
        changedTouches: TouchList;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        shiftKey: boolean;
        targetTouches: TouchList;
        touches: TouchList;
    }

    interface UIEvent extends SyntheticEvent {
        detail: number;
        view: AbstractView;
    }

    interface WheelEvent extends SyntheticEvent {
        deltaMode: number;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
    }

    //
    // Event Handler Types
    // ----------------------------------------------------------------------

    interface EventHandler<E extends SyntheticEvent> {
        (event: E): void;
    }

    interface DragEventHandler extends EventHandler<DragEvent> {}
    interface ClipboardEventHandler extends EventHandler<ClipboardEvent> {}
    interface KeyboardEventHandler extends EventHandler<KeyboardEvent> {}
    interface FocusEventHandler extends EventHandler<FocusEvent> {}
    interface FormEventHandler extends EventHandler<FormEvent> {}
    interface MouseEventHandler extends EventHandler<MouseEvent> {}
    interface TouchEventHandler extends EventHandler<TouchEvent> {}
    interface UIEventHandler extends EventHandler<UIEvent> {}
    interface WheelEventHandler extends EventHandler<WheelEvent> {}

    // This interface is not complete. Only properties accepting
    // unitless numbers are listed here (see CSSProperty.js in React)
    interface CssProperties {
        boxFlex?: number;
        boxFlexGroup?: number;
        columnCount?: number;
        flex?: number | string;
        flexGrow?: number;
        flexShrink?: number;
        fontWeight?: number | string;
        lineClamp?: number;
        lineHeight?: number | string;
        opacity?: number;
        order?: number;
        orphans?: number;
        widows?: number;
        zIndex?: number;
        zoom?: number;

        // SVG-related properties
        fillOpacity?: number;
        strokeOpacity?: number;
        strokeWidth?: number;
    }

    interface DomAttributes {
        onCopy?: ClipboardEventHandler;
        onCut?: ClipboardEventHandler;
        onPaste?: ClipboardEventHandler;
        onKeyDown?: KeyboardEventHandler;
        onKeyPress?: KeyboardEventHandler;
        onKeyUp?: KeyboardEventHandler;
        onFocus?: FocusEventHandler;
        onBlur?: FocusEventHandler;
        onChange?: FormEventHandler;
        onInput?: FormEventHandler;
        onSubmit?: FormEventHandler;
        onClick?: MouseEventHandler;
        onDoubleClick?: MouseEventHandler;
        onDrag?: DragEventHandler;
        onDragEnd?: DragEventHandler;
        onDragEnter?: DragEventHandler;
        onDragExit?: DragEventHandler;
        onDragLeave?: DragEventHandler;
        onDragOver?: DragEventHandler;
        onDragStart?: DragEventHandler;
        onDrop?: DragEventHandler;
        onMouseDown?: MouseEventHandler;
        onMouseEnter?: MouseEventHandler;
        onMouseLeave?: MouseEventHandler;
        onMouseMove?: MouseEventHandler;
        onMouseOut?: MouseEventHandler;
        onMouseOver?: MouseEventHandler;
        onMouseUp?: MouseEventHandler;
        onTouchCancel?: TouchEventHandler;
        onTouchEnd?: TouchEventHandler;
        onTouchMove?: TouchEventHandler;
        onTouchStart?: TouchEventHandler;
        onScroll?: UIEventHandler;
        onWheel?: WheelEventHandler;

        dangerouslySetInnerHTML?: {
            __html: string;
        };
    }

    interface SvgElementAttributes extends HtmlAttribute {
        viewBox?: string;
        preserveAspectRatio?: string;
    }

    interface HtmlAttribute extends DomAttributes {
        ref?: string;

        accept?: string;
        acceptCharset?: string;
        accessKey?: string;
        action?: string;
        allowFullScreen?: boolean;
        allowTransparency?: boolean;
        alt?: string;
        async?: boolean;
        autoComplete?: boolean;
        autoFocus?: boolean;
        autoPlay?: boolean;
        cellPadding?: number | string;
        cellSpacing?: number | string;
        charSet?: string;
        checked?: boolean;
        classID?: string;
        className?: string;
        cols?: number;
        colSpan?: number;
        content?: string;
        contentEditable?: boolean;
        contextMenu?: string;
        controls?: any;
        coords?: string;
        crossOrigin?: string;
        data?: string;
        dateTime?: string;
        defer?: boolean;
        dir?: string;
        disabled?: boolean;
        download?: any;
        draggable?: boolean;
        encType?: string;
        form?: string;
        formAction?: string;
        formEncType?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        frameBorder?: number | string;
        headers?: string;
        height?: number | string;
        hidden?: boolean;
        high?: number;
        href?: string;
        hrefLang?: string;
        htmlFor?: string;
        httpEquiv?: string;
        icon?: string;
        id?: string;
        label?: string;
        lang?: string;
        list?: string;
        loop?: boolean;
        low?: number;
        manifest?: string;
        marginHeight?: number;
        marginWidth?: number;
        max?: number | string;
        maxLength?: number;
        media?: string;
        mediaGroup?: string;
        method?: string;
        min?: number | string;
        multiple?: boolean;
        muted?: boolean;
        name?: string;
        noValidate?: boolean;
        open?: boolean;
        optimum?: number;
        pattern?: string;
        placeholder?: string;
        poster?: string;
        preload?: string;
        radioGroup?: string;
        readOnly?: boolean;
        rel?: string;
        required?: boolean;
        role?: string;
        rows?: number;
        rowSpan?: number;
        sandbox?: string;
        scope?: string;
        scoped?: boolean;
        scrolling?: string;
        seamless?: boolean;
        selected?: boolean;
        shape?: string;
        size?: number;
        sizes?: string;
        span?: number;
        spellCheck?: boolean;
        src?: string;
        srcDoc?: string;
        srcSet?: string;
        start?: number;
        step?: number | string;
        style?: CssProperties;
        tabIndex?: number;
        target?: string;
        title?: string;
        type?: string;
        useMap?: string;
        value?: string;
        width?: number | string;
        wmode?: string;

        // Non-standard Attributes
        autoCapitalize?: boolean;
        autoCorrect?: boolean;
        property?: string;
        itemProp?: string;
        itemScope?: boolean;
        itemType?: string;
        unselectable?: boolean;
    }

    interface SvgAttributes extends DomAttributes {
        cx?: number | string;
        cy?: number | string;
        d?: string;
        dx?: number | string;
        dy?: number | string;
        fill?: string;
        fillOpacity?: number | string;
        fontFamily?: string;
        fontSize?: number | string;
        fx?: number | string;
        fy?: number | string;
        gradientTransform?: string;
        gradientUnits?: string;
        markerEnd?: string;
        markerMid?: string;
        markerStart?: string;
        offset?: number | string;
        opacity?: number | string;
        patternContentUnits?: string;
        patternUnits?: string;
        points?: string;
        preserveAspectRatio?: string;
        r?: number | string;
        rx?: number | string;
        ry?: number | string;
        spreadMethod?: string;
        stopColor?: string;
        stopOpacity?: number | string;
        stroke?: string;
        strokeDasharray?: string;
        strokeLinecap?: string;
        strokeOpacity?: number | string;
        strokeWidth?: number | string;
        textAnchor?: string;
        transform?: string;
        version?: string;
        viewBox?: string;
        x1?: number | string;
        x2?: number | string;
        x?: number | string;
        y1?: number | string;
        y2?: number | string
        y?: number | string;
    }
}

declare interface Props {
    id: string;
    [prop: string]: string;
}

declare interface Elements {
    [ref: string]: HTMLElement;
}

declare type Child = JSX.Element | JSX.Element[] | string;