"use client";

import * as React from "react";
import { Combobox as ComboboxPrimitive } from "@base-ui/react";

import { cn } from "@/lib/utils";

const Combobox = ComboboxPrimitive.Root;

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn("flex items-center cursor-pointer", className)}
      {...props}
    >
      {children}
      <span
        data-slot="combobox-trigger-icon"
        className="text-white/40 pointer-events-none text-[10px] ml-2 transition-colors group-hover/input-group:text-blood-red"
        aria-hidden
      >
        ▼
      </span>
    </ComboboxPrimitive.Trigger>
  );
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      className={cn(
        "text-white/50 hover:text-white text-xs px-2 transition-colors",
        className
      )}
      {...props}
    >
      ✕
    </ComboboxPrimitive.Clear>
  );
}

function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}: ComboboxPrimitive.Input.Props & {
  showTrigger?: boolean;
  showClear?: boolean;
}) {
  return (
    <div
      data-slot="input-group"
      className={cn(
        "group/input-group relative flex w-auto items-center bg-dark-ink border border-white/20 transition-all duration-200",
        "focus-within:border-blood-red",
        "hover:border-white/40",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
    >
      <ComboboxPrimitive.Input
        data-slot="combobox-input"
        disabled={disabled}
        className="flex-1 bg-transparent text-white text-sm font-medium uppercase tracking-wider px-4 py-3 outline-none placeholder:text-white/50 min-w-[180px] cursor-pointer"
        {...props}
      />
      <div className="flex items-center pr-3">
        {showClear && (
          <ComboboxClear
            disabled={disabled}
            className="group-has-data-[slot=combobox-trigger]:data-[empty=true]:hidden"
          />
        )}
        {showTrigger && (
          <ComboboxTrigger className="px-2 py-1 text-white/50 hover:text-blood-red transition-colors" />
        )}
      </div>
      {children}
    </div>
  );
}

function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 0,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
  >) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="isolate z-50"
        style={{ width: "calc(var(--anchor-width) + 47px)" }}
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          data-chips={!!anchor}
          className={cn(
            "bg-dark-ink text-white border border-white/20 border-t",
            "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0",
            "group/combobox-content relative max-h-72 w-full overflow-hidden duration-100",
            className
          )}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "max-h-64 overflow-y-auto py-2",
        "[&::-webkit-scrollbar]:w-2",
        "[&::-webkit-scrollbar-track]:bg-white/5",
        "[&::-webkit-scrollbar-thumb]:bg-blood-red",
        "[&::-webkit-scrollbar-thumb]:hover:bg-blood-red/80",
        className
      )}
      {...props}
    />
  );
}

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "relative flex w-full cursor-pointer items-center px-4 py-2.5 text-sm font-medium uppercase tracking-wider text-white/80 outline-hidden select-none",
        "hover:bg-white/5 hover:text-white",
        "data-highlighted:bg-blood-red data-highlighted:text-white",
        "data-selected:text-blood-red data-selected:bg-transparent",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "transition-colors duration-150",
        className
      )}
      {...props}
    >
      {children}
    </ComboboxPrimitive.Item>
  );
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn(className)}
      {...props}
    />
  );
}

function ComboboxLabel({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn(
        "text-white/50 px-4 py-2 text-xs uppercase tracking-[0.2em]",
        className
      )}
      {...props}
    />
  );
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  );
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "text-white/50 hidden w-full justify-center py-4 text-center text-sm italic group-data-empty/combobox-content:flex",
        className
      )}
      {...props}
    />
  );
}

function ComboboxSeparator({
  className,
  ...props
}: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("bg-white/20 -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function useComboboxAnchor() {
  return React.useRef<HTMLDivElement | null>(null);
}

export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
};
