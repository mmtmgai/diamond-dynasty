// Tooltip component - for showing detailed info on hover/click
// This is a foundation for future tooltip functionality

import React, { useState, useRef, useEffect } from 'react';
import './Tooltip.css';

export default function Tooltip({ children, content, title, position = 'top' }) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);

  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    let top, left;

    switch (position) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - 8;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + 8;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left - tooltipRect.width - 8;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + 8;
        break;
      default:
        top = triggerRect.top - tooltipRect.height - 8;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
    }

    // Keep tooltip in viewport
    left = Math.max(10, Math.min(left, window.innerWidth - tooltipRect.width - 10));
    top = Math.max(10, Math.min(top, window.innerHeight - tooltipRect.height - 10));

    setCoords({ top, left });
  };

  useEffect(() => {
    if (visible) {
      updatePosition();
    }
  }, [visible]);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div
        ref={triggerRef}
        className="tooltip-trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {children}
      </div>

      {visible && content && (
        <div
          ref={tooltipRef}
          className={`tooltip tooltip-${position}`}
          style={{ top: coords.top, left: coords.left }}
        >
          {title && <div className="tooltip-title">{title}</div>}
          <div className="tooltip-content">{content}</div>
        </div>
      )}
    </>
  );
}

// Helper component for Legend tooltips
export function LegendTooltip({ legend, children }) {
  const content = (
    <div className="legend-tooltip-content">
      <div className="legend-tooltip-position">{legend.position}</div>
      <div className="legend-tooltip-effect">{legend.effect}</div>
      {legend.description && (
        <div className="legend-tooltip-desc">{legend.description}</div>
      )}
    </div>
  );

  return (
    <Tooltip content={content} title={legend.name} position="right">
      {children}
    </Tooltip>
  );
}

// Helper component for Card tooltips
export function CardTooltip({ card, children }) {
  const content = (
    <div className="card-tooltip-content">
      <div className="card-tooltip-value">
        Chips: <span className="text-chips">{card.chips}</span>
      </div>
      <div className="card-tooltip-rank">
        Rank: {card.rank} ({card.value})
      </div>
    </div>
  );

  return (
    <Tooltip content={content} title={`${card.rank} of ${card.suit}`} position="top">
      {children}
    </Tooltip>
  );
}

// Helper component for Voucher tooltips
export function VoucherTooltip({ voucher, children }) {
  const content = (
    <div className="voucher-tooltip-content">
      <div className="voucher-tooltip-effect">{voucher.description}</div>
    </div>
  );

  return (
    <Tooltip content={content} title={voucher.name} position="top">
      {children}
    </Tooltip>
  );
}
