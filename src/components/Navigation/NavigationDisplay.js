import React, { Component } from 'react';



class NavBar extends Component {

  constructor(props) {
    super(props);
  }
  render() {

    return (
      this.props.navigationMenu.map((navMenu1) =>
        <nav className="navbar navbar-inverse" key={navMenu1.key}>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <NavBrand linkTo="#" text={navMenu1.buttonText} />
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              {<NavMenu links={navMenu1.menuItems} />}
            </div>
          </div>
        </nav>))
  }
};


class NavBrand extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
    );
  }
}

class NavMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var links = this.props.links.map(function (link) {
      return (
        <NavLinkDropdown links={link.menuItems} text={link.text} active={link.active} key={link.key} />
      );
    });
    return (
      <ul className="nav navbar-nav">
        {links}
      </ul>
    );
  }
};

class NavLinkDropdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var active = false;
    var links = this.props.links.map(function (link) {
      if (link.active) {
        active = true;
      }
      return (
        <NavLinkHeader links={link.menuItems} linkTo={link.url} text={link.text} active={link.active} key={link.key} />
      );
    });
    return (
      <li className={"dropdown " + (active ? "active" : "")}>
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          {this.props.text}
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          {links}
        </ul>
      </li>
    );
  }
};

class NavLinkHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var active = false;
    var links = this.props.links.map(function (link) {
      if (link.active) {
        active = true;
      }
      return (
        <NavLink linkTo={link.href} text={link.text} active={link.active} key={link.key}/>
      );
    });
    return (
      <span>
        <li className={(this.props.active ? "active disabled" : "disabled")}><a href={this.props.href}>{this.props.text}</a></li>
        {links}
        <li role="separator" className="divider"></li>
      </span>
    );
  }
};

class NavLink extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className={(this.props.active ? "active " : "")}><a href={this.props.linkTo}>{this.props.text}</a></li>

    );
  }
};

export const NavigationDisplay = ({ navigationMenu, fetched }) => (
  <div>
    {fetched ?
      <NavBar navigationMenu={navigationMenu} /> :
      <div>
        Please wait...
        </div>
    }
  </div>
);