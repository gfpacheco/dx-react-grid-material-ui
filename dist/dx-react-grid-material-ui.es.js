/**
 * Bundle of @devexpress/dx-react-grid-material-ui
 * Generated: 2017-08-29
 * Version: 1.0.0-alpha.8
 * License: https://js.devexpress.com/Licensing
 */

import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Grid, GroupPanelLayout, GroupingPanel, PagingPanel, TableEditColumn, TableEditRow, TableFilterRow, TableGroupRow, TableHeaderRow, TableLayout, TableRowDetail, TableSelection, TableView } from '@devexpress/dx-react-grid';
import { withStyles } from 'material-ui/styles';
import { Button, Checkbox, Chip, IconButton, Input, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, Typography } from 'material-ui';
import classNames from 'classnames';
import ExpandMore from 'material-ui-icons/ExpandMore';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ChevronLeft from 'material-ui-icons/ChevronLeft';
import ChevronRight from 'material-ui-icons/ChevronRight';
import { firstRowOnPage, lastRowOnPage } from '@devexpress/dx-grid-core';
import { DragSource, combineTemplates } from '@devexpress/dx-react-core';
import List from 'material-ui-icons/List';

var styles = function styles(theme) {
  return {
    headingPanel: {
      paddingLeft: '12px',
      paddingRight: '12px',
      paddingTop: '12px',
      borderBottom: '1px solid ' + theme.palette.text.lightDivider
    },
    footerPanel: {
      padding: '12px'
    }
  };
};

var Root = function Root(_ref) {
  var headerTemplate = _ref.headerTemplate,
      bodyTemplate = _ref.bodyTemplate,
      footerTemplate = _ref.footerTemplate;
  return React.createElement(
    Paper,
    null,
    headerTemplate(),
    bodyTemplate(),
    footerTemplate()
  );
};

Root.propTypes = {
  headerTemplate: PropTypes.func.isRequired,
  bodyTemplate: PropTypes.func.isRequired,
  footerTemplate: PropTypes.func.isRequired
};

var HeaderBase = function HeaderBase(_ref2) {
  var children = _ref2.children,
      classes = _ref2.classes;
  return children && React.createElement(
    'div',
    { className: classes.headingPanel },
    children
  );
};

HeaderBase.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

HeaderBase.defaultProps = {
  children: null
};

var Header = withStyles(styles, { name: 'GridLayout' })(HeaderBase);

var FooterBase = function FooterBase(_ref3) {
  var children = _ref3.children,
      classes = _ref3.classes;
  return children && React.createElement(
    'div',
    { className: classes.footerPanel },
    children
  );
};

FooterBase.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

FooterBase.defaultProps = {
  children: null
};

var Footer = withStyles(styles, { name: 'GridLayout' })(FooterBase);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var rootTemplate = function rootTemplate(props) {
  return React.createElement(Root, props);
};
var headerPlaceholderTemplate = function headerPlaceholderTemplate(props) {
  return React.createElement(Header, props);
};
var footerPlaceholderTemplate = function footerPlaceholderTemplate(props) {
  return React.createElement(Footer, props);
};

var Grid$1 = function Grid$$1(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);
  return React.createElement(
    Grid,
    _extends({
      rootTemplate: rootTemplate,
      headerPlaceholderTemplate: headerPlaceholderTemplate,
      footerPlaceholderTemplate: footerPlaceholderTemplate
    }, props),
    children
  );
};

Grid$1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

var styles$1 = function styles(theme) {
  return {
    container: {
      cursor: 'move',
      position: 'fixed',
      zIndex: 1000,
      left: 0,
      top: 0,
      display: 'inline-block'
    },
    column: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      float: 'right'
    }
  };
};

var ContainerBase = function ContainerBase(_ref) {
  var clientOffset = _ref.clientOffset,
      columns = _ref.columns,
      columnTemplate = _ref.columnTemplate,
      classes = _ref.classes;
  return React.createElement(
    Paper,
    {
      className: classes.container,
      style: {
        transform: 'translate(calc(' + clientOffset.x + 'px - 50%), calc(' + clientOffset.y + 'px - 50%))'
      }
    },
    columns.map(function (column) {
      return React.cloneElement(columnTemplate({ column: column }), { key: column.name });
    })
  );
};

ContainerBase.propTypes = {
  clientOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  columns: PropTypes.array.isRequired,
  columnTemplate: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

var Container = withStyles(styles$1, { name: 'DragDrop' })(ContainerBase);

var ColumnBase = function ColumnBase(_ref2) {
  var column = _ref2.column,
      classes = _ref2.classes;
  return React.createElement(
    Typography,
    {
      className: classes.column,
      type: 'body1',
      component: 'p'
    },
    column.title
  );
};

ColumnBase.propTypes = {
  column: PropTypes.shape().isRequired,
  classes: PropTypes.object.isRequired
};

var Column = withStyles(styles$1, { name: 'DragDrop' })(ColumnBase);

var containerTemplate = function containerTemplate(props) {
  return React.createElement(Container, props);
};
var columnTemplate = function columnTemplate(props) {
  return React.createElement(Column, props);
};

var DragDropContext$1 = function DragDropContext$$1(props) {
  return React.createElement(DragDropContext, _extends({
    containerTemplate: containerTemplate,
    columnTemplate: columnTemplate
  }, props));
};

var styles$4 = function styles(theme) {
  return {
    button: {
      cursor: 'pointer',
      textTransform: 'none',
      fontWeight: 'bold',
      lineHeight: theme.typography.subheading.lineHeight
    },
    buttonIcon: {
      width: theme.spacing.unit * 2,
      float: 'right'
    },
    title: {
      display: 'inline-block',
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      verticalAlign: 'middle',
      paddingLeft: theme.spacing.unit * 3,
      marginLeft: -(theme.spacing.unit * 3)
    },
    selected: {
      color: theme.palette.text.primary
    }
  };
};

var DropDownMenuBase = function (_React$PureComponent) {
  inherits(DropDownMenuBase, _React$PureComponent);

  function DropDownMenuBase(props) {
    classCallCheck(this, DropDownMenuBase);

    var _this = possibleConstructorReturn(this, (DropDownMenuBase.__proto__ || Object.getPrototypeOf(DropDownMenuBase)).call(this, props));

    var _this$props = _this.props,
        selectedItem = _this$props.selectedItem,
        items = _this$props.items,
        defaultTitle = _this$props.defaultTitle,
        itemTemplate = _this$props.itemTemplate;


    _this.state = {
      anchorEl: undefined,
      open: false,
      selectedIndex: items.findIndex(function (item) {
        return item === selectedItem;
      }),
      title: defaultTitle || (itemTemplate ? itemTemplate(selectedItem) : selectedItem)
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleMenuItemClick = _this.handleMenuItemClick.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    return _this;
  }

  createClass(DropDownMenuBase, [{
    key: 'handleClick',
    value: function handleClick(event) {
      this.setState({ open: true, anchorEl: event.currentTarget });
    }
  }, {
    key: 'handleMenuItemClick',
    value: function handleMenuItemClick(event, index) {
      var _props = this.props,
          items = _props.items,
          defaultTitle = _props.defaultTitle,
          itemTemplate = _props.itemTemplate,
          onItemClick = _props.onItemClick;

      var title = items[index];

      if (index === 0 && defaultTitle) {
        title = defaultTitle;
      } else if (itemTemplate) {
        title = itemTemplate(title);
      }

      onItemClick(items[index], index);

      this.setState({
        selectedIndex: index,
        open: false,
        title: title
      });
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props2 = this.props,
          items = _props2.items,
          classes = _props2.classes,
          className = _props2.className,
          titleClassName = _props2.titleClassName,
          itemTemplate = _props2.itemTemplate;
      var _state = this.state,
          anchorEl = _state.anchorEl,
          open = _state.open,
          selectedIndex = _state.selectedIndex,
          title = _state.title;

      var titleClasses = classNames((_classNames = {}, defineProperty(_classNames, classes.title, true), defineProperty(_classNames, titleClassName, true), defineProperty(_classNames, classes.selected, selectedIndex > -1), _classNames));
      return React.createElement(
        'div',
        { className: className },
        React.createElement(
          Typography,
          {
            type: 'button',
            onClick: this.handleClick,
            className: classes.button
          },
          React.createElement(
            'span',
            { className: titleClasses },
            title
          ),
          open ? React.createElement(ExpandLess, { className: classes.buttonIcon }) : React.createElement(ExpandMore, { className: classes.buttonIcon })
        ),
        React.createElement(
          Menu,
          {
            anchorEl: anchorEl,
            open: open,
            onRequestClose: this.handleRequestClose
          },
          items.map(function (item, index) {
            return React.createElement(
              MenuItem,
              {
                key: item,
                selected: index === selectedIndex,
                onClick: function onClick(event) {
                  return _this2.handleMenuItemClick(event, index);
                }
              },
              itemTemplate ? itemTemplate(item) : item
            );
          })
        )
      );
    }
  }]);
  return DropDownMenuBase;
}(React.PureComponent);

DropDownMenuBase.propTypes = {
  defaultTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  classes: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired,
  itemTemplate: PropTypes.func,
  className: PropTypes.string,
  titleClassName: PropTypes.string
};

DropDownMenuBase.defaultProps = {
  className: null,
  titleClassName: null,
  selectedItem: undefined,
  defaultTitle: undefined,
  itemTemplate: undefined
};

var DropDownMenu = withStyles(styles$4, { name: 'DropDownMenu' })(DropDownMenuBase);

var styles$3 = function styles(theme) {
  return {
    pageSizeSelector: _extends({}, theme.typography.caption, {
      float: 'right',
      paddingRight: theme.spacing.unit * 5
    }),
    label: {
      paddingRight: theme.spacing.unit,
      lineHeight: theme.spacing.unit * 5 + 'px'
    },
    pageSizes: {
      display: 'inline-block'
    },
    pageSizeTitle: {
      width: 'auto',
      marginRight: theme.spacing.unit / 2
    },
    '@media (max-width: 768px)': {
      label: {
        display: 'none'
      },
      pageSizeSelector: {
        paddingRight: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit
      }
    }
  };
};

var PageSizeSelectorBase = function PageSizeSelectorBase(_ref) {
  var pageSize = _ref.pageSize,
      onPageSizeChange = _ref.onPageSizeChange,
      allowedPageSizes = _ref.allowedPageSizes,
      showAllText = _ref.showAllText,
      classes = _ref.classes;
  return React.createElement(
    'div',
    { className: classes.pageSizeSelector },
    React.createElement(
      'span',
      { className: classes.label },
      'Rows per page:'
    ),
    React.createElement(DropDownMenu, {
      selectedItem: pageSize,
      items: allowedPageSizes,
      itemTemplate: function itemTemplate(title) {
        return title || showAllText;
      },
      onItemClick: function onItemClick(item) {
        onPageSizeChange(item);
      },
      className: classes.pageSizes,
      titleClassName: classes.pageSizeTitle
    })
  );
};

PageSizeSelectorBase.propTypes = {
  pageSize: PropTypes.number.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  allowedPageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  showAllText: PropTypes.string,
  classes: PropTypes.object.isRequired
};

PageSizeSelectorBase.defaultProps = {
  showAllText: 'All'
};

var PageSizeSelector = withStyles(styles$3, { name: 'PageSizeSelector' })(PageSizeSelectorBase);

var styles$5 = function styles(theme) {
  return {
    pagination: {
      float: 'right',
      margin: 0
    },
    rowsLabel: _extends({}, theme.typography.caption, {
      paddingRight: theme.spacing.unit * 5,
      lineHeight: theme.spacing.unit * 5 + 'px'
    }),
    button: {
      minWidth: theme.spacing.unit * 2,
      height: theme.spacing.unit * 5
    },
    activeButton: {
      fontWeight: 'bold'
    },
    arrowButton: {
      width: theme.spacing.unit * 4,
      height: theme.spacing.unit * 4,
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    prev: {
      marginRight: 0
    },
    next: {
      marginLeft: 0
    },
    '@media(max-width: 768px)': {
      button: {
        display: 'none'
      },
      prev: {
        marginRight: theme.spacing.unit
      },
      next: {
        marginLeft: theme.spacing.unit
      },
      rowsLabel: {
        paddingRight: theme.spacing.unit * 2
      }
    }
  };
};

var PageButton = function PageButton(_ref) {
  var _classNames;

  var text = _ref.text,
      isActive = _ref.isActive,
      isDisabled = _ref.isDisabled,
      classes = _ref.classes,
      onClick = _ref.onClick;

  var buttonClasses = classNames((_classNames = {}, defineProperty(_classNames, classes.button, true), defineProperty(_classNames, classes.activeButton, isActive), _classNames));

  return React.createElement(
    Button,
    {
      className: buttonClasses,
      disabled: isDisabled,
      onClick: onClick
    },
    text
  );
};

PageButton.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

PageButton.defaultProps = {
  onClick: function onClick() {},
  isDisabled: false,
  isActive: false
};

var ellipsisSymbol = '\u2026';

var calculateStartPage = function calculateStartPage(currentPage, maxButtonCount, totalPageCount) {
  return Math.max(Math.min(currentPage - Math.floor(maxButtonCount / 2, 10), totalPageCount - maxButtonCount + 1), 1);
};

var renderPageButtons = function renderPageButtons(currentPage, totalPageCount, classes, onCurrentPageChange) {
  var pageButtons = [];
  var maxButtonCount = 3;
  var startPage = 1;
  var endPage = totalPageCount || 1;

  if (maxButtonCount < totalPageCount) {
    startPage = calculateStartPage(currentPage + 1, maxButtonCount, totalPageCount);
    endPage = startPage + maxButtonCount - 1;
  }
  if (startPage > 1) {
    pageButtons.push(React.createElement(PageButton, {
      key: 1,
      text: String(1),
      classes: classes,
      onClick: function onClick() {
        return onCurrentPageChange(0);
      }
    }));

    if (startPage > 2) {
      pageButtons.push(React.createElement(PageButton, {
        key: 'ellipsisStart',
        text: ellipsisSymbol,
        classes: classes,
        isDisabled: true
      }));
    }
  }

  var _loop = function _loop(page) {
    pageButtons.push(React.createElement(PageButton, {
      key: page,
      text: String(page),
      isActive: page === currentPage + 1,
      classes: classes,
      onClick: function onClick() {
        return onCurrentPageChange(page - 1);
      },
      isDisabled: startPage === endPage
    }));
  };

  for (var page = startPage; page <= endPage; page += 1) {
    _loop(page);
  }

  if (endPage < totalPageCount) {
    if (endPage < totalPageCount - 1) {
      pageButtons.push(React.createElement(PageButton, {
        key: 'ellipsisEnd',
        text: ellipsisSymbol,
        classes: classes,
        isDisabled: true
      }));
    }

    pageButtons.push(React.createElement(PageButton, {
      key: totalPageCount,
      text: String(totalPageCount),
      classes: classes,
      onClick: function onClick() {
        return onCurrentPageChange(totalPageCount - 1);
      }
    }));
  }

  return pageButtons;
};

var PaginationBase = function PaginationBase(_ref2) {
  var totalPages = _ref2.totalPages,
      totalCount = _ref2.totalCount,
      pageSize = _ref2.pageSize,
      currentPage = _ref2.currentPage,
      onCurrentPageChange = _ref2.onCurrentPageChange,
      classes = _ref2.classes;

  var firstRow = firstRowOnPage(currentPage, pageSize, totalCount);
  var lastRow = lastRowOnPage(currentPage, pageSize, totalCount);

  return React.createElement(
    'div',
    { className: classes.pagination },
    React.createElement(
      'span',
      { className: classes.rowsLabel },
      '' + firstRow + (firstRow < lastRow ? '-' + lastRow : '') + ' of ' + totalCount
    ),
    React.createElement(
      IconButton,
      {
        className: classNames(classes.arrowButton, classes.prev),
        disabled: currentPage === 0,
        onClick: function onClick() {
          return currentPage > 0 && onCurrentPageChange(currentPage - 1);
        }
      },
      React.createElement(ChevronLeft, null)
    ),
    renderPageButtons(currentPage, totalPages, classes, onCurrentPageChange),
    React.createElement(
      IconButton,
      {
        className: classNames(classes.arrowButton, classes.next),
        disabled: currentPage === totalPages - 1 || totalCount === 0,
        onClick: function onClick() {
          return currentPage < totalPages - 1 && onCurrentPageChange(currentPage + 1);
        }
      },
      React.createElement(ChevronRight, null)
    )
  );
};

PaginationBase.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onCurrentPageChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired
};

var Pagination = withStyles(styles$5, { name: 'Pagination' })(PaginationBase);

var styles$2 = {
  pager: {
    overflow: 'hidden'
  }
};

var PagerBase = function PagerBase(_ref) {
  var currentPage = _ref.currentPage,
      allowedPageSizes = _ref.allowedPageSizes,
      totalPages = _ref.totalPages,
      pageSize = _ref.pageSize,
      classes = _ref.classes,
      _onCurrentPageChange = _ref.onCurrentPageChange,
      onPageSizeChange = _ref.onPageSizeChange,
      totalCount = _ref.totalCount,
      showAllText = _ref.showAllText;
  return React.createElement(
    'div',
    { className: classes.pager },
    React.createElement(Pagination, {
      totalPages: totalPages,
      totalCount: totalCount,
      currentPage: currentPage,
      onCurrentPageChange: function onCurrentPageChange(page) {
        return _onCurrentPageChange(page);
      },
      pageSize: pageSize
    }),
    !!allowedPageSizes.length && React.createElement(PageSizeSelector, {
      pageSize: pageSize,
      onPageSizeChange: onPageSizeChange,
      allowedPageSizes: allowedPageSizes,
      showAllText: showAllText
    })
  );
};

PagerBase.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  allowedPageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  pageSize: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  onCurrentPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  showAllText: PropTypes.string
};

PagerBase.defaultProps = {
  showAllText: undefined
};

var Pager = withStyles(styles$2, { name: 'Pager' })(PagerBase);

var PagingPanel$1 = function PagingPanel$$1(_ref) {
  var showAllText = _ref.showAllText,
      restProps = objectWithoutProperties(_ref, ['showAllText']);
  return React.createElement(PagingPanel, _extends({
    pagerTemplate: function pagerTemplate(props) {
      return React.createElement(Pager, _extends({
        showAllText: showAllText
      }, props));
    }
  }, restProps));
};

PagingPanel$1.propTypes = {
  showAllText: PropTypes.string
};
PagingPanel$1.defaultProps = {
  showAllText: undefined
};

var styles$6 = function styles(theme) {
  return {
    panel: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },
    groupInfo: {
      padding: theme.spacing.unit * 0.75 + 'px 0',
      marginBottom: theme.spacing.unit * 1.5,
      display: 'inline-block',
      color: theme.typography.title.color
    },
    groupIcon: {
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  };
};

var DefaultTextBase = function DefaultTextBase(_ref) {
  var classes = _ref.classes,
      allowDragging = _ref.allowDragging,
      allowUngroupingByClick = _ref.allowUngroupingByClick;

  if (allowDragging) {
    return React.createElement(
      'span',
      { className: classes.groupInfo },
      'Drag a column header here to group by that column'
    );
  }
  if (allowUngroupingByClick) {
    return React.createElement(
      'span',
      { className: classes.groupInfo },
      'Click \xA0',
      React.createElement(
        'span',
        { className: classes.groupIcon },
        React.createElement(List, null)
      ),
      '\xA0 icon in the column header to group by that column'
    );
  }
  return React.createElement(
    'span',
    { className: classes.groupInfo },
    'Grouping is not available'
  );
};

DefaultTextBase.propTypes = {
  classes: PropTypes.shape().isRequired,
  allowDragging: PropTypes.bool,
  allowUngroupingByClick: PropTypes.bool
};

DefaultTextBase.defaultProps = {
  allowDragging: false,
  allowUngroupingByClick: false
};

var DefaultText = withStyles(styles$6, { name: 'GroupPanel' })(DefaultTextBase);

var PanelTemplateBase = function PanelTemplateBase(_ref2) {
  var classes = _ref2.classes,
      items = _ref2.items;
  return React.createElement(
    'div',
    { className: classes.panel },
    items
  );
};

PanelTemplateBase.propTypes = {
  classes: PropTypes.shape().isRequired,
  items: PropTypes.arrayOf(PropTypes.node).isRequired
};

var PanelTemplate = withStyles(styles$6, { name: 'GroupPanel' })(PanelTemplateBase);

var panelTemplate = function panelTemplate(props) {
  return React.createElement(PanelTemplate, props);
};

var GroupPanelBase = function GroupPanelBase(_ref3) {
  var groupByColumnText = _ref3.groupByColumnText,
      classes = _ref3.classes,
      restProps = objectWithoutProperties(_ref3, ['groupByColumnText', 'classes']);

  var text = groupByColumnText || React.createElement(DefaultText, {
    allowDragging: restProps.allowDragging,
    allowUngroupingByClick: restProps.allowUngroupingByClick
  });
  return React.createElement(
    'div',
    { className: classes.panel },
    React.createElement(GroupPanelLayout, _extends({
      groupByColumnText: text,
      panelTemplate: panelTemplate
    }, restProps))
  );
};

GroupPanelBase.propTypes = {
  groupByColumnText: PropTypes.string,
  classes: PropTypes.object.isRequired
};

GroupPanelBase.defaultProps = {
  groupByColumnText: undefined
};

var GroupPanel = withStyles(styles$6, { name: 'GroupPanel' })(GroupPanelBase);

var styles$7 = function styles(theme) {
  return {
    button: {
      marginRight: theme.spacing.unit,
      marginBottom: '12px'
    },
    draftCell: {
      opacity: 0.3
    }
  };
};

var label = function label(allowSorting, sortingDirection, column) {
  var title = column.title || column.name;
  return allowSorting ? React.createElement(
    TableSortLabel,
    {
      active: !!sortingDirection,
      direction: sortingDirection
    },
    title
  ) : title;
};

var GroupPanelItemBase = function GroupPanelItemBase(_ref) {
  var _classNames;

  var column = _ref.column,
      draft = _ref.draft,
      groupByColumn = _ref.groupByColumn,
      allowUngroupingByClick = _ref.allowUngroupingByClick,
      allowSorting = _ref.allowSorting,
      sortingDirection = _ref.sortingDirection,
      changeSortingDirection = _ref.changeSortingDirection,
      classes = _ref.classes;

  var chipClassNames = classNames((_classNames = {}, defineProperty(_classNames, classes.button, true), defineProperty(_classNames, classes.draftCell, draft), _classNames));

  return React.createElement(Chip, _extends({
    label: label(allowSorting, sortingDirection, column),
    className: chipClassNames
  }, allowUngroupingByClick ? { onRequestDelete: function onRequestDelete() {
      return groupByColumn({ columnName: column.name });
    } } : null, {
    onClick: function onClick(e) {
      if (!allowSorting) return;
      var cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
      changeSortingDirection({
        keepOther: e.shiftKey || cancelSortingRelatedKey,
        cancel: cancelSortingRelatedKey,
        columnName: column.name
      });
    }
  }));
};

GroupPanelItemBase.propTypes = {
  column: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
  draft: PropTypes.bool,
  allowSorting: PropTypes.bool,
  sortingDirection: PropTypes.oneOf(['asc', 'desc', null]),
  changeSortingDirection: PropTypes.func,
  groupByColumn: PropTypes.func,
  allowUngroupingByClick: PropTypes.bool,
  classes: PropTypes.object.isRequired
};

GroupPanelItemBase.defaultProps = {
  draft: false,
  allowSorting: false,
  sortingDirection: undefined,
  changeSortingDirection: undefined,
  groupByColumn: undefined,
  allowUngroupingByClick: false
};

var GroupPanelItem = withStyles(styles$7, { name: 'GroupPanelItem' })(GroupPanelItemBase);

var defaultCellTemplate = function defaultCellTemplate(props) {
  return React.createElement(GroupPanelItem, props);
};

var GroupingPanel$1 = function GroupingPanel$$1(_ref) {
  var groupByColumnText = _ref.groupByColumnText,
      groupPanelItemTemplate = _ref.groupPanelItemTemplate,
      restProps = objectWithoutProperties(_ref, ['groupByColumnText', 'groupPanelItemTemplate']);
  return React.createElement(GroupingPanel, _extends({
    groupPanelTemplate: function groupPanelTemplate(props) {
      return React.createElement(GroupPanel, _extends({
        groupByColumnText: groupByColumnText,
        groupPanelItemTemplate: combineTemplates(groupPanelItemTemplate, defaultCellTemplate)
      }, props));
    }
  }, restProps));
};

GroupingPanel$1.propTypes = {
  allowSorting: PropTypes.bool,
  groupByColumnText: PropTypes.string,
  groupPanelItemTemplate: PropTypes.func
};

GroupingPanel$1.defaultProps = {
  allowSorting: false,
  groupByColumnText: undefined,
  groupPanelItemTemplate: undefined
};

var styles$8 = function styles(theme) {
  return {
    toggleCell: {
      textAlign: 'center',
      cursor: 'pointer',
      textOverflow: 'initial'
    },
    toggleCellIcon: {
      verticalAlign: 'middle',
      display: 'inline-block',
      height: theme.spacing.unit * 3,
      marginLeft: '-6px'
    }
  };
};

var TableDetailToggleCellBase = function TableDetailToggleCellBase(_ref) {
  var style = _ref.style,
      expanded = _ref.expanded,
      classes = _ref.classes,
      toggleExpanded = _ref.toggleExpanded;
  return React.createElement(
    TableCell,
    {
      className: classes.toggleCell,
      style: style,
      onClick: function onClick(e) {
        e.stopPropagation();
        toggleExpanded();
      }
    },
    React.createElement(
      'span',
      { className: classes.toggleCellIcon },
      expanded ? React.createElement(ExpandMore, null) : React.createElement(ChevronRight, null)
    )
  );
};

TableDetailToggleCellBase.propTypes = {
  style: PropTypes.shape(),
  expanded: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  toggleExpanded: PropTypes.func
};

TableDetailToggleCellBase.defaultProps = {
  style: null,
  expanded: false,
  toggleExpanded: function toggleExpanded() {}
};

var TableDetailToggleCell = withStyles(styles$8, { name: 'TableDetailToggleCell' })(TableDetailToggleCellBase);

var styles$9 = function styles(theme) {
  return {
    active: {
      backgroundColor: theme.palette.background.contentFrame
    }
  };
};

var TableDetailCellBase = function TableDetailCellBase(_ref) {
  var colSpan = _ref.colSpan,
      style = _ref.style,
      template = _ref.template,
      classes = _ref.classes;
  return React.createElement(
    TableCell,
    {
      style: style,
      colSpan: colSpan,
      className: classes.active
    },
    template()
  );
};

TableDetailCellBase.propTypes = {
  style: PropTypes.shape(),
  colSpan: PropTypes.number,
  template: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

TableDetailCellBase.defaultProps = {
  style: null,
  colSpan: 1
};

var TableDetailCell = withStyles(styles$9, { name: 'TableDetailCell' })(TableDetailCellBase);

var detailToggleCellTemplate = function detailToggleCellTemplate(props) {
  return React.createElement(TableDetailToggleCell, props);
};
var detailCellTemplate = function detailCellTemplate(props) {
  return React.createElement(TableDetailCell, props);
};

var TableRowDetail$1 = function TableRowDetail$$1(props) {
  return React.createElement(TableRowDetail, _extends({
    detailToggleCellTemplate: detailToggleCellTemplate,
    detailCellTemplate: detailCellTemplate,
    detailToggleCellWidth: 38
  }, props));
};

var styles$10 = function styles(theme) {
  return {
    cell: {
      cursor: 'pointer',
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit
    },
    indentCell: {
      padding: 0
    },
    groupIcon: {
      verticalAlign: 'middle',
      display: 'inline-block',
      marginRight: '6px',
      height: theme.spacing.unit * 3
    },
    columnTitle: {
      verticalAlign: 'middle'
    }
  };
};

var TableGroupCellBase = function TableGroupCellBase(_ref) {
  var style = _ref.style,
      colSpan = _ref.colSpan,
      row = _ref.row,
      column = _ref.column,
      isExpanded = _ref.isExpanded,
      toggleGroupExpanded = _ref.toggleGroupExpanded,
      classes = _ref.classes;
  return React.createElement(
    TableCell,
    {
      colSpan: colSpan,
      style: style,
      className: classes.cell,
      onClick: toggleGroupExpanded
    },
    React.createElement(
      'span',
      { className: classes.groupIcon },
      isExpanded ? React.createElement(ExpandMore, null) : React.createElement(ChevronRight, null)
    ),
    React.createElement(
      'strong',
      { className: classes.columnTitle },
      column.title || column.name,
      ': ',
      row.value
    )
  );
};

TableGroupCellBase.propTypes = {
  style: PropTypes.shape(),
  colSpan: PropTypes.number,
  row: PropTypes.shape(),
  column: PropTypes.shape(),
  isExpanded: PropTypes.bool,
  toggleGroupExpanded: PropTypes.func,
  classes: PropTypes.object.isRequired
};

TableGroupCellBase.defaultProps = {
  style: null,
  colSpan: 1,
  row: {},
  column: {},
  isExpanded: false,
  toggleGroupExpanded: function toggleGroupExpanded() {}
};

var TableGroupCell = withStyles(styles$10, { name: 'TableGroupCell' })(TableGroupCellBase);

var groupCellTemplate = function groupCellTemplate(props) {
  return React.createElement(TableGroupCell, props);
};

var TableGroupRow$1 = function TableGroupRow$$1(props) {
  return React.createElement(TableGroupRow, _extends({
    groupCellTemplate: groupCellTemplate,
    groupIndentColumnWidth: 22
  }, props));
};

var styles$11 = function styles(theme) {
  return {
    cell: {
      overflow: 'visible',
      paddingRight: 0,
      paddingLeft: theme.spacing.unit
    },
    pointer: {
      cursor: 'pointer'
    }
  };
};

var TableSelectAllCellBase = function TableSelectAllCellBase(_ref) {
  var _classNames;

  var style = _ref.style,
      allSelected = _ref.allSelected,
      someSelected = _ref.someSelected,
      selectionAvailable = _ref.selectionAvailable,
      toggleAll = _ref.toggleAll,
      classes = _ref.classes;

  var cellClasses = classNames((_classNames = {}, defineProperty(_classNames, classes.cell, true), defineProperty(_classNames, classes.pointer, selectionAvailable), _classNames));

  return React.createElement(
    TableCell,
    {
      checkbox: true,
      style: style,
      className: cellClasses,
      onClick: function onClick(e) {
        if (!selectionAvailable) return;

        e.stopPropagation();
        toggleAll();
      }
    },
    React.createElement(Checkbox, {
      checked: allSelected,
      indeterminate: someSelected,
      disabled: !selectionAvailable
    })
  );
};

TableSelectAllCellBase.propTypes = {
  style: PropTypes.shape(),
  allSelected: PropTypes.bool,
  someSelected: PropTypes.bool,
  selectionAvailable: PropTypes.bool,
  toggleAll: PropTypes.func,
  classes: PropTypes.object.isRequired
};

TableSelectAllCellBase.defaultProps = {
  style: null,
  allSelected: false,
  someSelected: false,
  selectionAvailable: false,
  toggleAll: function toggleAll() {}
};

var TableSelectAllCell = withStyles(styles$11, { name: 'TableSelectAllCell' })(TableSelectAllCellBase);

var styles$12 = function styles(theme) {
  return {
    cell: {
      overflow: 'visible',
      paddingRight: 0,
      paddingLeft: theme.spacing.unit
    }
  };
};

var TableSelectCellBase = function TableSelectCellBase(_ref) {
  var style = _ref.style,
      selected = _ref.selected,
      changeSelected = _ref.changeSelected,
      classes = _ref.classes;
  return React.createElement(
    TableCell,
    {
      checkbox: true,
      style: style,
      className: classes.cell,
      onClick: function onClick(e) {
        e.stopPropagation();
        changeSelected();
      }
    },
    React.createElement(Checkbox, { checked: selected })
  );
};

TableSelectCellBase.defaultProps = {
  style: null,
  selected: false,
  changeSelected: function changeSelected() {}
};

TableSelectCellBase.propTypes = {
  style: PropTypes.shape(),
  selected: PropTypes.bool,
  changeSelected: PropTypes.func,
  classes: PropTypes.object.isRequired
};

var TableSelectCell = withStyles(styles$12, { name: 'TableSelectCell' })(TableSelectCellBase);

var selectCellTemplate = function selectCellTemplate(props) {
  return React.createElement(TableSelectCell, props);
};
var selectAllCellTemplate = function selectAllCellTemplate(props) {
  return React.createElement(TableSelectAllCell, props);
};

var TableSelection$1 = function TableSelection$$1(props) {
  return React.createElement(TableSelection, _extends({
    selectCellTemplate: selectCellTemplate,
    selectAllCellTemplate: selectAllCellTemplate,
    selectionColumnWidth: 40
  }, props));
};

var MINIMAL_COLUMN_WIDTH = 120;

/* eslint-disable react/prop-types */
var tableTemplate$1 = function tableTemplate(_ref) {
  var children = _ref.children,
      tableRef = _ref.tableRef,
      restProps = objectWithoutProperties(_ref, ['children', 'tableRef']);
  return React.createElement(
    Table,
    _extends({ ref: tableRef }, restProps),
    children
  );
};
var headTemplate = function headTemplate(_ref2) {
  var children = _ref2.children,
      restProps = objectWithoutProperties(_ref2, ['children']);
  return React.createElement(
    TableHead,
    restProps,
    children
  );
};
var bodyTemplate = function bodyTemplate(_ref3) {
  var children = _ref3.children,
      restProps = objectWithoutProperties(_ref3, ['children']);
  return React.createElement(
    TableBody,
    restProps,
    children
  );
};
var rowTemplate = function rowTemplate(_ref4) {
  var children = _ref4.children,
      row = _ref4.row,
      restProps = objectWithoutProperties(_ref4, ['children', 'row']);
  return React.createElement(
    TableRow,
    _extends({
      selected: row.selected
    }, restProps),
    children
  );
};
/* eslint-enable react/prop-types */

var Table$1 = function Table$$1(_ref5) {
  var headerRows = _ref5.headerRows,
      bodyRows = _ref5.bodyRows,
      getRowId = _ref5.getRowId,
      columns = _ref5.columns,
      cellTemplate = _ref5.cellTemplate,
      onClick = _ref5.onClick,
      allowColumnReordering = _ref5.allowColumnReordering,
      setColumnOrder = _ref5.setColumnOrder;
  return React.createElement(TableLayout, {
    headerRows: headerRows,
    rows: bodyRows,
    getRowId: getRowId,
    columns: columns,
    minColumnWidth: MINIMAL_COLUMN_WIDTH,
    tableTemplate: tableTemplate$1,
    headTemplate: headTemplate,
    bodyTemplate: bodyTemplate,
    rowTemplate: rowTemplate,
    cellTemplate: cellTemplate,
    onClick: onClick,
    allowColumnReordering: allowColumnReordering,
    setColumnOrder: setColumnOrder
  });
};
Table$1.defaultProps = {
  onClick: function onClick() {}
};
Table$1.propTypes = {
  headerRows: PropTypes.array.isRequired,
  bodyRows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  cellTemplate: PropTypes.func.isRequired,
  getRowId: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  allowColumnReordering: PropTypes.bool.isRequired,
  setColumnOrder: PropTypes.func.isRequired
};

var styles$13 = function styles(theme) {
  return {
    cell: {
      paddingRight: theme.spacing.unit,
      '& ~ $cell': {
        paddingLeft: theme.spacing.unit
      }
    },
    cellRightAlign: {
      textAlign: 'right'
    }
  };
};

var TableCellBase = function TableCellBase(_ref) {
  var _classNames;

  var style = _ref.style,
      column = _ref.column,
      value = _ref.value,
      classes = _ref.classes;
  return React.createElement(
    TableCell,
    {
      style: _extends({}, style),
      className: classNames((_classNames = {}, defineProperty(_classNames, classes.cell, true), defineProperty(_classNames, classes.cellRightAlign, column.align === 'right'), _classNames))
    },
    value
  );
};

TableCellBase.propTypes = {
  style: PropTypes.shape(),
  value: PropTypes.any,
  column: PropTypes.shape(),
  classes: PropTypes.object.isRequired
};

TableCellBase.defaultProps = {
  style: null,
  value: undefined,
  column: {}
};

var TableCell$1 = withStyles(styles$13, { name: 'TableCell' })(TableCellBase);

var styles$14 = {
  cell: {
    padding: 0
  }
};

var TableStubCellBase = function TableStubCellBase(_ref) {
  var style = _ref.style,
      classes = _ref.classes;
  return React.createElement(TableCell, {
    style: style,
    className: classes.cell
  });
};

TableStubCellBase.propTypes = {
  style: PropTypes.object,
  classes: PropTypes.object.isRequired
};

TableStubCellBase.defaultProps = {
  style: {}
};

var TableStubCell = withStyles(styles$14, { name: 'TableStubCell' })(TableStubCellBase);

var styles$15 = function styles(theme) {
  return {
    cell: {
      textAlign: 'center',
      padding: theme.spacing.unit * 5 + 'px 0'
    }
  };
};

var TableNoDataCellBase = function TableNoDataCellBase(_ref) {
  var style = _ref.style,
      colSpan = _ref.colSpan,
      classes = _ref.classes;
  return React.createElement(
    TableCell,
    {
      style: style,
      className: classes.cell,
      colSpan: colSpan
    },
    React.createElement(
      'big',
      { className: 'text-muted' },
      'No data'
    )
  );
};

TableNoDataCellBase.propTypes = {
  style: PropTypes.shape(),
  colSpan: PropTypes.number,
  classes: PropTypes.object.isRequired
};

TableNoDataCellBase.defaultProps = {
  style: null,
  colSpan: 1
};

var TableNoDataCell = withStyles(styles$15, { name: 'TableNoDataCell' })(TableNoDataCellBase);

var tableTemplate = function tableTemplate(props) {
  return React.createElement(Table$1, props);
};
var defaultCellTemplate$1 = function defaultCellTemplate(props) {
  return React.createElement(TableCell$1, props);
};
var stubCellTemplate = function stubCellTemplate(props) {
  return React.createElement(TableStubCell, props);
};
var noDataCellTemplate = function noDataCellTemplate(props) {
  return React.createElement(TableNoDataCell, props);
};

var TableView$1 = function TableView$$1(_ref) {
  var tableCellTemplate = _ref.tableCellTemplate,
      props = objectWithoutProperties(_ref, ['tableCellTemplate']);
  return React.createElement(TableView, _extends({
    tableTemplate: tableTemplate,
    tableCellTemplate: combineTemplates(tableCellTemplate, defaultCellTemplate$1),
    tableStubCellTemplate: stubCellTemplate,
    tableStubHeaderCellTemplate: stubCellTemplate,
    tableNoDataCellTemplate: noDataCellTemplate
  }, props));
};
TableView$1.propTypes = {
  tableCellTemplate: PropTypes.func
};
TableView$1.defaultProps = {
  tableCellTemplate: undefined
};

var styles$16 = function styles(theme) {
  return {
    cell: {
      verticalAlign: 'top',
      paddingTop: theme.spacing.unit + 4,
      paddingRight: theme.spacing.unit,
      '& ~ $cell': {
        paddingLeft: theme.spacing.unit
      }
    },
    input: {
      width: '100%'
    }
  };
};

var TableFilterCellBase = function TableFilterCellBase(_ref) {
  var style = _ref.style,
      filter = _ref.filter,
      setFilter = _ref.setFilter,
      classes = _ref.classes;
  return React.createElement(
    TableCell,
    {
      className: classes.cell,
      style: style
    },
    React.createElement(Input, {
      className: classes.input,
      value: filter ? filter.value : '',
      placeholder: 'Filter...',
      onChange: function onChange(e) {
        return setFilter(e.target.value ? { value: e.target.value } : null);
      }
    })
  );
};

TableFilterCellBase.propTypes = {
  style: PropTypes.object,
  filter: PropTypes.object,
  setFilter: PropTypes.func,
  classes: PropTypes.object.isRequired
};

TableFilterCellBase.defaultProps = {
  style: null,
  filter: null,
  setFilter: function setFilter() {}
};

var TableFilterCell = withStyles(styles$16, { name: 'TableFilterCell' })(TableFilterCellBase);

var defaultFilterCellTemplate = function defaultFilterCellTemplate(props) {
  return React.createElement(TableFilterCell, props);
};

var TableFilterRow$1 = function TableFilterRow$$1(_ref) {
  var filterCellTemplate = _ref.filterCellTemplate,
      restProps = objectWithoutProperties(_ref, ['filterCellTemplate']);
  return React.createElement(TableFilterRow, _extends({
    filterCellTemplate: combineTemplates(filterCellTemplate, defaultFilterCellTemplate)
  }, restProps));
};

TableFilterRow$1.propTypes = {
  filterCellTemplate: PropTypes.func
};
TableFilterRow$1.defaultProps = {
  filterCellTemplate: undefined
};

var styles$17 = function styles(theme) {
  return {
    groupingControl: {
      cursor: 'pointer',
      paddingLeft: 0,
      height: theme.spacing.unit * 3
    },
    sortingControl: {
      cursor: 'pointer',
      display: 'inline-block',
      paddingTop: theme.spacing.unit / 2
    },
    sortingTitle: {
      lineHeight: '18px',
      display: 'inline-block',
      verticalAlign: 'top',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    },
    plainTitle: {
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    },
    floatLeft: {
      float: 'left',
      textAlign: 'left'
    },
    floatRight: {
      float: 'right',
      textAlign: 'right'
    },
    cell: {
      paddingRight: theme.spacing.unit,
      '& ~ $cell': {
        paddingLeft: theme.spacing.unit
      }
    },
    cellNoUserSelect: {
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      width: '100%'
    },
    cellDraggable: {
      cursor: 'pointer'
    },
    cellClickable: {
      cursor: 'pointer'
    },
    cellDimmed: {
      opacity: 0.3
    },
    cellRight: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    clearPadding: {
      padding: 0
    },
    title: {
      height: '24px',
      lineHeight: '24px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      verticalAlign: 'middle'
    },
    titleRight: {
      textAlign: 'right',
      marginLeft: theme.spacing.unit * 2 - 2
    },
    titleLeft: {
      textAlign: 'left',
      marginRight: theme.spacing.unit * 2 - 2
    }
  };
};

var TableHeaderCellBase = function (_React$PureComponent) {
  inherits(TableHeaderCellBase, _React$PureComponent);

  function TableHeaderCellBase(props) {
    classCallCheck(this, TableHeaderCellBase);

    var _this = possibleConstructorReturn(this, (TableHeaderCellBase.__proto__ || Object.getPrototypeOf(TableHeaderCellBase)).call(this, props));

    _this.state = {
      dragging: false
    };
    return _this;
  }

  createClass(TableHeaderCellBase, [{
    key: 'render',
    value: function render() {
      var _classNames,
          _classNames2,
          _classNames3,
          _this2 = this;

      var _props = this.props,
          style = _props.style,
          column = _props.column,
          tableColumn = _props.tableColumn,
          allowSorting = _props.allowSorting,
          sortingDirection = _props.sortingDirection,
          changeSortingDirection = _props.changeSortingDirection,
          allowGroupingByClick = _props.allowGroupingByClick,
          groupByColumn = _props.groupByColumn,
          allowDragging = _props.allowDragging,
          dragPayload = _props.dragPayload,
          classes = _props.classes;
      var dragging = this.state.dragging;

      var align = column.align || 'left';
      var invertedAlign = align === 'left' ? 'right' : 'left';
      var columnTitle = column.title || column.name;

      var groupingControlClasses = classNames((_classNames = {}, defineProperty(_classNames, classes.groupingControl, true), defineProperty(_classNames, classes.floatLeft, invertedAlign === 'left'), defineProperty(_classNames, classes.floatRight, invertedAlign === 'right'), _classNames));

      var tableCellClasses = classNames((_classNames2 = {}, defineProperty(_classNames2, classes.cell, true), defineProperty(_classNames2, classes.cellRight, align === 'right'), defineProperty(_classNames2, classes.cellNoUserSelect, allowDragging || allowSorting), defineProperty(_classNames2, classes.cellDraggable, allowDragging), defineProperty(_classNames2, classes.cellClickable, allowSorting), defineProperty(_classNames2, classes.cellDimmed, dragging || tableColumn.draft), _classNames2));

      var titleClasses = classNames((_classNames3 = {}, defineProperty(_classNames3, classes.title, true), defineProperty(_classNames3, classes.titleRight, align === 'right'), defineProperty(_classNames3, classes.titleLeft, align === 'left'), _classNames3));

      var groupingControl = allowGroupingByClick && React.createElement(
        'div',
        {
          onClick: function onClick(e) {
            e.stopPropagation();
            groupByColumn(e);
          },
          className: groupingControlClasses
        },
        React.createElement(List, null)
      );

      var sortingControl = allowSorting && (align === 'right' ? React.createElement(
        'span',
        { className: classes.sortingControl },
        !!sortingDirection && React.createElement(TableSortLabel, {
          active: !!sortingDirection,
          direction: sortingDirection
        }),
        React.createElement(
          'span',
          { className: classes.sortingTitle },
          columnTitle
        )
      ) : React.createElement(
        'span',
        { className: classes.sortingControl },
        React.createElement(
          'span',
          { className: classes.sortingTitle },
          columnTitle
        ),
        React.createElement(TableSortLabel, {
          active: !!sortingDirection,
          direction: sortingDirection
        })
      ));

      var cellLayout = React.createElement(
        TableCell,
        {
          onClick: function onClick(e) {
            if (!allowSorting) return;
            e.stopPropagation();
            var cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
            changeSortingDirection({
              keepOther: e.shiftKey || cancelSortingRelatedKey,
              cancel: cancelSortingRelatedKey
            });
          },
          style: style,
          className: tableCellClasses
        },
        groupingControl,
        React.createElement(
          'div',
          { className: titleClasses },
          allowSorting ? sortingControl : React.createElement(
            'div',
            { className: classes.plainTitle },
            columnTitle
          )
        )
      );

      return allowDragging ? React.createElement(
        DragSource,
        {
          ref: function ref(element) {
            _this2.cellRef = element;
          },
          getPayload: function getPayload() {
            return dragPayload;
          },
          onStart: function onStart() {
            return _this2.setState({ dragging: true });
          },
          onEnd: function onEnd() {
            return _this2.cellRef && _this2.setState({ dragging: false });
          }
        },
        cellLayout
      ) : cellLayout;
    }
  }]);
  return TableHeaderCellBase;
}(React.PureComponent);

TableHeaderCellBase.propTypes = {
  tableColumn: PropTypes.object,
  column: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
  style: PropTypes.shape(),
  allowSorting: PropTypes.bool,
  sortingDirection: PropTypes.oneOf(['asc', 'desc', null]),
  changeSortingDirection: PropTypes.func,
  allowGroupingByClick: PropTypes.bool,
  groupByColumn: PropTypes.func,
  allowDragging: PropTypes.bool,
  dragPayload: PropTypes.any,
  classes: PropTypes.object.isRequired
};

TableHeaderCellBase.defaultProps = {
  tableColumn: {},
  style: null,
  allowSorting: false,
  sortingDirection: undefined,
  changeSortingDirection: undefined,
  allowGroupingByClick: false,
  groupByColumn: undefined,
  allowDragging: false,
  dragPayload: null
};

var TableHeaderCell = withStyles(styles$17, { name: 'TableHeaderCell' })(TableHeaderCellBase);

var headerCellTemplate = function headerCellTemplate(props) {
  return React.createElement(TableHeaderCell, props);
};

var TableHeaderRow$1 = function TableHeaderRow$$1(props) {
  return React.createElement(TableHeaderRow, _extends({
    headerCellTemplate: headerCellTemplate
  }, props));
};

var styles$18 = function styles(theme) {
  return {
    button: {
      padding: theme.spacing.unit,
      minWidth: 40
    },
    headingCell: {
      whiteSpace: 'nowrap',
      textAlign: 'center',
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: 0
    },
    cell: {
      whiteSpace: 'nowrap',
      textAlign: 'center',
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: 0
    }
  };
};

var withEditColumnStyles = withStyles(styles$18, { name: 'EditColumn' });

var CommandButtonBase = function CommandButtonBase(_ref) {
  var executeCommand = _ref.executeCommand,
      text = _ref.text,
      classes = _ref.classes;
  return React.createElement(
    Button,
    {
      color: 'primary',
      className: classes.button,
      onClick: function onClick(e) {
        executeCommand();
        e.stopPropagation();
      }
    },
    text
  );
};
CommandButtonBase.propTypes = {
  executeCommand: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

var CommandButton = withEditColumnStyles(CommandButtonBase);

var EditCommandHeadingCellBase = function EditCommandHeadingCellBase(_ref2) {
  var addRow = _ref2.addRow,
      commandTemplate = _ref2.commandTemplate,
      allowAdding = _ref2.allowAdding,
      _ref2$style = _ref2.style,
      style = _ref2$style === undefined ? {} : _ref2$style,
      addCommandText = _ref2.addCommandText,
      classes = _ref2.classes;
  return React.createElement(
    TableCell,
    {
      className: classes.headingCell,
      style: style
    },
    allowAdding && commandTemplate({
      id: 'add',
      executeCommand: addRow,
      text: addCommandText
    })
  );
};
EditCommandHeadingCellBase.propTypes = {
  addRow: PropTypes.func,
  addCommandText: PropTypes.string,
  allowAdding: PropTypes.bool,
  commandTemplate: PropTypes.func.isRequired,
  style: PropTypes.object,
  classes: PropTypes.object.isRequired
};
EditCommandHeadingCellBase.defaultProps = {
  addRow: function addRow() {},
  addCommandText: 'New',
  allowAdding: false,
  style: undefined
};

var EditCommandHeadingCell = withEditColumnStyles(EditCommandHeadingCellBase);

var EditCommandCellBase = function EditCommandCellBase(_ref3) {
  var startEditing = _ref3.startEditing,
      deleteRow = _ref3.deleteRow,
      cancelEditing = _ref3.cancelEditing,
      commitChanges = _ref3.commitChanges,
      isEditing = _ref3.isEditing,
      commandTemplate = _ref3.commandTemplate,
      allowEditing = _ref3.allowEditing,
      allowDeleting = _ref3.allowDeleting,
      _ref3$style = _ref3.style,
      style = _ref3$style === undefined ? {} : _ref3$style,
      classes = _ref3.classes,
      editCommandText = _ref3.editCommandText,
      deleteCommandText = _ref3.deleteCommandText,
      commitCommandText = _ref3.commitCommandText,
      cancelCommandText = _ref3.cancelCommandText;

  var commands = [];
  if (!isEditing) {
    if (allowEditing) {
      commands.push({
        id: 'edit',
        executeCommand: startEditing,
        text: editCommandText
      });
    }
    if (allowDeleting) {
      commands.push({
        id: 'delete',
        executeCommand: deleteRow,
        text: deleteCommandText
      });
    }
  } else {
    commands = [{
      id: 'commit',
      executeCommand: commitChanges,
      text: commitCommandText
    }, {
      id: 'cancel',
      executeCommand: cancelEditing,
      text: cancelCommandText
    }];
  }
  return React.createElement(
    TableCell,
    {
      className: classes.cell,
      style: style
    },
    commands.map(function (command) {
      return React.createElement(
        'span',
        { key: command.id },
        commandTemplate(command)
      );
    })
  );
};
EditCommandCellBase.propTypes = {
  startEditing: PropTypes.func,
  deleteRow: PropTypes.func,
  cancelEditing: PropTypes.func,
  commitChanges: PropTypes.func,
  isEditing: PropTypes.bool,
  allowEditing: PropTypes.bool,
  allowDeleting: PropTypes.bool,
  commandTemplate: PropTypes.func,
  editCommandText: PropTypes.string,
  deleteCommandText: PropTypes.string,
  commitCommandText: PropTypes.string,
  cancelCommandText: PropTypes.string,
  style: PropTypes.object,
  classes: PropTypes.object.isRequired
};
EditCommandCellBase.defaultProps = {
  startEditing: function startEditing() {},
  deleteRow: function deleteRow() {},
  cancelEditing: function cancelEditing() {},
  commitChanges: function commitChanges() {},
  isEditing: false,
  allowEditing: false,
  allowDeleting: false,
  commandTemplate: PropTypes.func,
  editCommandText: 'Edit',
  deleteCommandText: 'Delete',
  commitCommandText: 'Save',
  cancelCommandText: 'Cancel',
  style: undefined
};

var EditCommandCell = withEditColumnStyles(EditCommandCellBase);

var defaultCellTemplate$2 = function defaultCellTemplate(props) {
  return React.createElement(EditCommandCell, props);
};
var defaultHeadingCellTemplate = function defaultHeadingCellTemplate(props) {
  return React.createElement(EditCommandHeadingCell, props);
};
var defaultCommandTemplate = function defaultCommandTemplate(props) {
  return React.createElement(CommandButton, props);
};

var TableEditColumn$1 = function TableEditColumn$$1(_ref) {
  var cellTemplate = _ref.cellTemplate,
      headingCellTemplate = _ref.headingCellTemplate,
      commandTemplate = _ref.commandTemplate,
      restProps = objectWithoutProperties(_ref, ['cellTemplate', 'headingCellTemplate', 'commandTemplate']);
  return React.createElement(TableEditColumn, _extends({
    width: 140
  }, restProps, {
    cellTemplate: combineTemplates(cellTemplate, defaultCellTemplate$2),
    headingCellTemplate: combineTemplates(headingCellTemplate, defaultHeadingCellTemplate),
    commandTemplate: combineTemplates(commandTemplate, defaultCommandTemplate)
  }));
};
TableEditColumn$1.propTypes = {
  cellTemplate: PropTypes.func,
  headingCellTemplate: PropTypes.func,
  commandTemplate: PropTypes.func
};
TableEditColumn$1.defaultProps = {
  cellTemplate: undefined,
  headingCellTemplate: undefined,
  commandTemplate: undefined
};

var styles$19 = function styles(theme) {
  return {
    cell: {
      verticalAlign: 'top',
      paddingTop: theme.spacing.unit + 2,
      paddingRight: theme.spacing.unit,
      '& ~ $cell': {
        paddingLeft: theme.spacing.unit
      }
    },
    inputRoot: {
      width: '100%'
    },
    inputRight: {
      textAlign: 'right'
    }
  };
};

var EditCellBase = function EditCellBase(_ref) {
  var column = _ref.column,
      value = _ref.value,
      onValueChange = _ref.onValueChange,
      style = _ref.style,
      classes = _ref.classes;

  var inputClasses = classNames(defineProperty({}, classes.inputRight, column.align === 'right'));

  return React.createElement(
    TableCell,
    {
      className: classes.cell,
      style: style
    },
    React.createElement(Input, {
      className: classes.inputRoot,
      classes: { input: inputClasses },
      value: value || '',
      onChange: function onChange(e) {
        return onValueChange(e.target.value);
      }
    })
  );
};
EditCellBase.propTypes = {
  column: PropTypes.object,
  value: PropTypes.any,
  onValueChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  classes: PropTypes.object.isRequired
};
EditCellBase.defaultProps = {
  column: {},
  value: '',
  style: {}
};

var EditCell = withStyles(styles$19, { name: 'EditCell' })(EditCellBase);

var defaultEditCellTemplate = function defaultEditCellTemplate(props) {
  return React.createElement(EditCell, props);
};

var TableEditRow$1 = function TableEditRow$$1(_ref) {
  var editCellTemplate = _ref.editCellTemplate,
      restProps = objectWithoutProperties(_ref, ['editCellTemplate']);
  return React.createElement(TableEditRow, _extends({
    editCellTemplate: combineTemplates(editCellTemplate, defaultEditCellTemplate)
  }, restProps));
};
TableEditRow$1.propTypes = {
  editCellTemplate: PropTypes.func
};
TableEditRow$1.defaultProps = {
  editCellTemplate: undefined
};

export { Grid$1 as Grid, DragDropContext$1 as DragDropContext, PagingPanel$1 as PagingPanel, GroupingPanel$1 as GroupingPanel, TableRowDetail$1 as TableRowDetail, TableGroupRow$1 as TableGroupRow, TableSelection$1 as TableSelection, TableView$1 as TableView, TableFilterRow$1 as TableFilterRow, TableHeaderRow$1 as TableHeaderRow, TableEditColumn$1 as TableEditColumn, TableEditRow$1 as TableEditRow, DropDownMenu };
//# sourceMappingURL=dx-react-grid-material-ui.es.js.map
