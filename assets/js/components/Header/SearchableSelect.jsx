import React from "react";
import Select, { components } from "react-select";

const Control = ({ children, ...props }) => {
  const { prefix } = props.selectProps;
  const style = { cursor: "pointer" };

  return (
    <components.Control {...props}>
      {prefix ? <span style={style}>{prefix}</span> : null}
      {children}
    </components.Control>
  );
};

const SearchableSelect = React.forwardRef(({ customProps, ...props }, ref) => {
  const styles = {
    control: (css, state) => ({
      ...css,
      width: state.selectProps.width,
      height: state.selectProps.height,
    }),
    option: (css) => ({
      ...css,
      color: "black",
    }),
  };

  if (customProps.hideDropdown) {
    styles.dropdownIndicator = (provided) => {
      return { ...provided, display: "none" };
    };
  }
  if (customProps.hideSeparator) {
    styles.indicatorSeparator = (provided) => {
      return { ...provided, display: "none" };
    };
  }

  return (
    <Select
      {...props}
      components={{ Control }}
      isSearchable
      width={customProps.width}
      height={customProps.height}
      placeholder={customProps.placeholder}
      isMulti={customProps.isMulti}
      closeMenuOnSelect={!customProps.keepMenuOpen}
      prefix={customProps.prefix}
      options={customProps.options}
      styles={styles}
      theme={(theme) => {
        return {
          ...theme,
          colors: {
            ...theme.colors,
            // primary: customProps.primary,
            // primary: "black", //focus border
            // primary25: "black", //hover menuList backgroundColor
            // primary50: "black",
            // primary75: "pink",
            // danger: "black", //hover color of remove button for selected item
            // dangerLight: "black", //hover background color of remove button for selected item
            // neutral0: "black", //backgroundColor
            // neutral5: "pink",
            // neutral10: "black", //backgroundColor of selected item
            // neutral20: "black", //border
            // neutral30: "black", //hover border
            // neutral40: "black",
            // neutral50: "black", //placeholder text
            // neutral60: "black",
            // neutral70: "black",
            // neutral80: "black",
            // neutral90: "black",
          },
        };
      }}
    />
  );
});

export default SearchableSelect;
