import React, { useState, useRef } from "react";
import styles from "./css/ServiceFilterDropdown.module.css";

const ServiceFilterDropdown = ({ menuLabels, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    label: "All",
    type: "All",
  });
  const node = useRef();

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={node}>
      <div className={styles.selectedOption} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption.label}
      </div>
      {isOpen && (
        <div className={styles.options}>
          <div
            onClick={() => {
              setSelectedOption({ label: "All", type: "All" });
              onFilterChange("All");
              setIsOpen(false);
            }}
            className={styles.option}
          >
            All
          </div>
          {menuLabels.map((label) => (
            <div
              key={label.type}
              onClick={() => {
                setSelectedOption(label);
                onFilterChange(label.type);
                setIsOpen(false);
              }}
              className={styles.option}
            >
              {label.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceFilterDropdown;
