
declare module JSX {
    export interface Element {
        isIntrinsic: boolean;
        toString: () => string;
        toDOM: () => Node;
        setComponent: (component: any) => void;
        bindDOM: () => void;
    }

    export interface IntrinsicElements {
        // HTML
        a: HTMLAttribute;
        abbr: HTMLAttribute;
        address: HTMLAttribute;
        area: HTMLAttribute;
        article: HTMLAttribute;
        aside: HTMLAttribute;
        audio: HTMLAttribute;
        b: HTMLAttribute;
        base: HTMLAttribute;
        bdi: HTMLAttribute;
        bdo: HTMLAttribute;
        big: HTMLAttribute;
        blockquote: HTMLAttribute;
        body: HTMLAttribute;
        br: HTMLAttribute;
        button: HTMLAttribute;
        canvas: HTMLAttribute;
        caption: HTMLAttribute;
        cite: HTMLAttribute;
        code: HTMLAttribute;
        col: HTMLAttribute;
        colgroup: HTMLAttribute;
        data: HTMLAttribute;
        datalist: HTMLAttribute;
        dd: HTMLAttribute;
        del: HTMLAttribute;
        details: HTMLAttribute;
        dfn: HTMLAttribute;
        dialog: HTMLAttribute;
        div: HTMLAttribute;
        dl: HTMLAttribute;
        dt: HTMLAttribute;
        em: HTMLAttribute;
        embed: HTMLAttribute;
        fieldset: HTMLAttribute;
        figcaption: HTMLAttribute;
        figure: HTMLAttribute;
        footer: HTMLAttribute;
        form: HTMLAttribute;
        h1: HTMLAttribute;
        h2: HTMLAttribute;
        h3: HTMLAttribute;
        h4: HTMLAttribute;
        h5: HTMLAttribute;
        h6: HTMLAttribute;
        head: HTMLAttribute;
        header: HTMLAttribute;
        hr: HTMLAttribute;
        html: HTMLAttribute;
        i: HTMLAttribute;
        iframe: HTMLAttribute;
        img: HTMLAttribute;
        input: HTMLAttribute;
        ins: HTMLAttribute;
        kbd: HTMLAttribute;
        keygen: HTMLAttribute;
        label: HTMLAttribute;
        legend: HTMLAttribute;
        li: HTMLAttribute;
        link: HTMLAttribute;
        main: HTMLAttribute;
        map: HTMLAttribute;
        mark: HTMLAttribute;
        menu: HTMLAttribute;
        menuitem: HTMLAttribute;
        meta: HTMLAttribute;
        meter: HTMLAttribute;
        nav: HTMLAttribute;
        noscript: HTMLAttribute;
        object: HTMLAttribute;
        ol: HTMLAttribute;
        optgroup: HTMLAttribute;
        option: HTMLAttribute;
        output: HTMLAttribute;
        p: HTMLAttribute;
        param: HTMLAttribute;
        picture: HTMLAttribute;
        pre: HTMLAttribute;
        progress: HTMLAttribute;
        q: HTMLAttribute;
        rp: HTMLAttribute;
        rt: HTMLAttribute;
        ruby: HTMLAttribute;
        s: HTMLAttribute;
        samp: HTMLAttribute;
        script: HTMLAttribute;
        section: HTMLAttribute;
        select: HTMLAttribute;
        small: HTMLAttribute;
        source: HTMLAttribute;
        span: HTMLAttribute;
        strong: HTMLAttribute;
        style: HTMLAttribute;
        sub: HTMLAttribute;
        summary: HTMLAttribute;
        sup: HTMLAttribute;
        table: HTMLAttribute;
        tbody: HTMLAttribute;
        td: HTMLAttribute;
        textarea: HTMLAttribute;
        tfoot: HTMLAttribute;
        th: HTMLAttribute;
        thead: HTMLAttribute;
        time: HTMLAttribute;
        title: HTMLAttribute;
        tr: HTMLAttribute;
        track: HTMLAttribute;
        u: HTMLAttribute;
        ul: HTMLAttribute;
        "var": HTMLAttribute;
        video: HTMLAttribute;
        wbr: HTMLAttribute;

        // SVG
        svg: SvgElementAttributes;

        circle: SVGAttributes;
        defs: SVGAttributes;
        ellipse: SVGAttributes;
        g: SVGAttributes;
        line: SVGAttributes;
        linearGradient: SVGAttributes;
        mask: SVGAttributes;
        path: SVGAttributes;
        pattern: SVGAttributes;
        polygon: SVGAttributes;
        polyline: SVGAttributes;
        radialGradient: SVGAttributes;
        rect: SVGAttributes;
        stop: SVGAttributes;
        text: SVGAttributes;
        tspan: SVGAttributes;
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
    interface CSSProperties {
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

    interface DOMAttributes {
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

    interface SvgElementAttributes extends HTMLAttribute {
        viewBox?: string;
        preserveAspectRatio?: string;
    }

    interface HTMLAttribute extends DOMAttributes {
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
        style?: CSSProperties;
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

    interface SVGAttributes extends DOMAttributes {
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