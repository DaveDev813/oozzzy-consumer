import React, { ReactElement } from 'react';

export const SvgUse: React.FC<{ hrefVal: string; className: string }> = ({
  hrefVal,
  className,
}: any) => {
  const useTag = `<use xlink:href="${hrefVal}" />`;
  return (
    <svg className={className} dangerouslySetInnerHTML={{ __html: useTag }} />
  );
};

enum HeaderCollapse {
  NORMAL = 'normal',
  FULL = 'full',
  SINGLE = 'single',
}

interface HeaderItems {
  title: string;
  link?: string;
  isEnabled: boolean;
}

interface HeaderSection {
  header?: string;
  items: HeaderItems[];
}

interface BasicCollapseType extends HeaderItems {
  type: HeaderCollapse;
  section?: HeaderSection[];
  isActive: boolean;
}

const navItem: BasicCollapseType[] = [
  {
    title: 'Home',
    isEnabled: true,
    isActive: true,
    type: HeaderCollapse.NORMAL,
    section: [
      {
        items: [
          {
            title: 'Rooms',
            isEnabled: true,
            link: 'index.html',
          },
          {
            title: 'Restaurants',
            isEnabled: true,
            link: 'index-2.html',
          },
        ],
      },
    ],
  },
  {
    title: 'Docs',
    isEnabled: true,
    isActive: false,
    type: HeaderCollapse.NORMAL,
    section: [
      {
        header: 'Documentation',
        items: [
          {
            title: 'Documentation',
            isEnabled: true,
            link: 'docs/docs-introduction.html',
          },
          {
            title: 'Directory structure',
            isEnabled: true,
            link: 'docs/docs-directory-structure.html',
          },
          {
            title: 'Gulp',
            isEnabled: true,
            link: 'docs/docs-gulp.html',
          },
          {
            title: 'Customizing CSS',
            isEnabled: true,
            link: 'docs/docs-customizing-css.html',
          },
          {
            title: 'Credits',
            isEnabled: true,
            link: 'docs/docs-credits.html',
          },
          {
            title: 'Changelog',
            isEnabled: true,
            link: 'docs/docs-changelog.html',
          },
        ],
      },
      {
        header: 'Components',
        items: [
          {
            title: 'Bootstrap',
            isEnabled: true,
            link: 'docs/components-bootstrap.html',
          },
          {
            title: 'Theme',
            isEnabled: true,
            link: 'docs/components-directory.html',
          },
        ],
      },
    ],
  },
  {
    title: 'Contact',
    link: '#',
    isEnabled: true,
    type: HeaderCollapse.SINGLE,
    isActive: false,
  },
  {
    title: 'Sign in',
    link: '/login',
    isEnabled: true,
    type: HeaderCollapse.SINGLE,
    isActive: false,
  },
  {
    title: 'Sign up',
    link: '#',
    isEnabled: true,
    type: HeaderCollapse.SINGLE,
    isActive: false,
  },
];

const BasicCollapse: React.FC<BasicCollapseType> = ({
  title,
  isEnabled,
  link,
  section,
  isActive,
  type,
}: BasicCollapseType): ReactElement => {
  const itemId = title.replace(/\s/g, '');

  return (
    <React.Fragment>
      {isEnabled && (
        <li
          className={`nav-item ${
            type !== HeaderCollapse.SINGLE ? 'dropdown' : ''
          }`}
        >
          {type === HeaderCollapse.SINGLE ? (
            // <Link href={link}>
            <a className="nav-link">{title}</a>
          ) : (
            // </Link>
            <React.Fragment>
              <a
                id={itemId}
                href={link ? link : '#'}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className={`nav-link dropdown-toggle ${
                  isActive ? 'active' : ''
                }`}
              >
                {title}
              </a>

              {section && type === HeaderCollapse.NORMAL && (
                <div aria-labelledby={itemId} className="dropdown-menu">
                  {section.map(
                    ({ header, items }: HeaderSection, index: number) => (
                      <React.Fragment key={index + 'headerSection'}>
                        {header && (
                          <React.Fragment>
                            {index !== 0 && (
                              <div className="dropdown-divider" />
                            )}
                            <h6 className="dropdown-header font-weight-normal">
                              {header}
                            </h6>
                          </React.Fragment>
                        )}
                        {items.map(
                          (
                            { title, link, isEnabled }: HeaderItems,
                            index: number
                          ) => (
                            <React.Fragment key={index + 'headerItems'}>
                              {isEnabled && (
                                <a href={link} className="dropdown-item">
                                  {title}
                                </a>
                              )}
                            </React.Fragment>
                          )
                        )}
                      </React.Fragment>
                    )
                  )}
                </div>
              )}
            </React.Fragment>
          )}
        </li>
      )}
    </React.Fragment>
  );
};

const NavBar = (): ReactElement => (
  <header className="header">
    <nav className="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <a href="index.html" className="navbar-brand py-1">
            <img src=" distribution/pages/img/logo.svg" alt="Directory logo" />
          </a>

          <form action="#" id="search" className="form-inline d-none d-sm-flex">
            <div className="input-label-absolute input-label-absolute-left input-reset input-expand ml-lg-2 ml-xl-3">
              <label htmlFor="search_search" className="label-absolute">
                <i className="fa fa-search" />
                <span className="sr-only">What are you looking for?</span>
              </label>
              <input
                id="search_search"
                placeholder="Search"
                aria-label="Search"
                className="form-control form-control-sm border-0 shadow-0 bg-gray-200"
              />
              <button type="reset" className="btn btn-reset btn-sm">
                <i className="fa-times fas" />
              </button>
            </div>
          </form>
        </div>

        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler navbar-toggler-right"
        >
          <i className="fa fa-bars" />
        </button>

        <div id="navbarCollapse" className="collapse navbar-collapse">
          <form
            action="#"
            id="searchcollapsed"
            className="form-inline mt-4 mb-2 d-sm-none"
          >
            <div className="input-label-absolute input-label-absolute-left input-reset w-100">
              <label
                htmlFor="searchcollapsed_search"
                className="label-absolute"
              >
                <i className="fa fa-search" />
                <span className="sr-only">What are you looking for?</span>
              </label>
              <input
                id="searchcollapsed_search"
                placeholder="Search"
                aria-label="Search"
                className="form-control form-control-sm border-0 shadow-0 bg-gray-200"
              />
              <button type="reset" className="btn btn-reset btn-sm">
                <i className="fa-times fas" />
              </button>
            </div>
          </form>

          <ul className="navbar-nav ml-auto">
            {navItem.map((item: BasicCollapseType, index: number) => (
              <BasicCollapse key={index + 'navItem'} {...item} />
            ))}
            <FullDrop />
            <li className="nav-item mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block">
              <a href="user-add-0.html" className="btn btn-primary">
                Add a listing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

const FullDrop: React.FC = () => (
  <li className="nav-item dropdown position-static">
    <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle">
      Template
    </a>
    <div className="dropdown-menu megamenu py-lg-0">
      <div className="row">
        <div className="col-lg-9">
          <div className="row p-3 pr-lg-0 pl-lg-5 pt-lg-5">
            <div className="col-lg-3">
              <h6 className="text-uppercase">Homepage</h6>
              <ul className="megamenu-list list-unstyled">
                <li className="megamenu-list-item">
                  <a href="index.html" className="megamenu-list-link">
                    Rooms{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a href="index-2.html" className="megamenu-list-link">
                    Restaurants{' '}
                  </a>
                </li>
              </ul>

              <h6 className="text-uppercase">Restaurants</h6>
              <ul className="megamenu-list list-unstyled">
                <li className="megamenu-list-item">
                  <a href="category.html" className="megamenu-list-link">
                    Category - Map on the top{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a href="category-2.html" className="megamenu-list-link">
                    Category - Map on the right{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a href="category-3.html" className="megamenu-list-link">
                    Category - no map{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a href="detail.html" className="megamenu-list-link">
                    Restaurant detail{' '}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h6 className="text-uppercase">Rooms</h6>
              <ul className="megamenu-list list-unstyled">
                <li className="megamenu-list-item">
                  <a href="category-rooms.html" className="megamenu-list-link">
                    Category - Map on the top{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a
                    href="category-2-rooms.html"
                    className="megamenu-list-link"
                  >
                    Category - Map on the right{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a
                    href="category-3-rooms.html"
                    className="megamenu-list-link"
                  >
                    Category - no map{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a href="detail-rooms.html" className="megamenu-list-link">
                    Room detail{' '}
                  </a>
                </li>
              </ul>

              <h6 className="text-uppercase">Blog</h6>
              <ul className="megamenu-list list-unstyled">
                <li className="megamenu-list-item">
                  <a href="blog.html" className="megamenu-list-link">
                    Blog{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a href="post.html" className="megamenu-list-link">
                    Post{' '}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h6 className="text-uppercase">Pages</h6>
              <ul className="megamenu-list list-unstyled">
                <li className="megamenu-list-item">
                  <a href="contact.html" className="megamenu-list-link">
                    Contact{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a href="pricing.html" className="megamenu-list-link">
                    Pricing{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a href="text.html" className="megamenu-list-link">
                    Text page{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a href="faq.html" className="megamenu-list-link">
                    F.A.Q.s <span className="badge badge-info ml-1">New</span>{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a href="coming-soon.html" className="megamenu-list-link">
                    Coming soon{' '}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h6 className="text-uppercase">User</h6>
              <ul className="megamenu-list list-unstyled">
                <li className="megamenu-list-item">
                  <a href="login.html" className="megamenu-list-link">
                    Sign in{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a href="signup.html" className="megamenu-list-link">
                    Sign up{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a href="user-booking-1.html" className="megamenu-list-link">
                    Booking process - 4 pages{' '}
                    <span className="badge badge-warning ml-1">New</span>{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a href="user-grid.html" className="megamenu-list-link">
                    Bookings &mdash; grid view{' '}
                    <span className="badge badge-warning ml-1">New</span>{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a
                    href="user-booking-detail.html"
                    className="megamenu-list-link"
                  >
                    Booking detail{' '}
                    <span className="badge badge-warning ml-1">New</span>{' '}
                  </a>
                </li>
              </ul>

              <h6 className="text-uppercase">Host</h6>
              <ul className="megamenu-list list-unstyled">
                <li className="megamenu-list-item">
                  <a href="user-add-0.html" className="megamenu-list-link">
                    Add new listing - 6 pages{' '}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a href="user-list.html" className="megamenu-list-link">
                    Bookings &mdash; list view{' '}
                    <span className="badge badge-warning ml-1">New</span>{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row megamenu-services d-none d-lg-flex pl-lg-5">
            <div className="col-xl-3 col-lg-6 d-flex">
              <div className="megamenu-services-item">
                <SvgUse hrefVal="#money-box-1" className="#destination-map-1" />
                <div>
                  <h6 className="text-uppercase">Best rentals</h6>
                  <p className="mb-0 text-muted text-sm">
                    Find the perfect place
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 d-flex">
              <div className="megamenu-services-item">
                <SvgUse
                  hrefVal="#money-box-1"
                  className="svg-icon megamenu-services-icon"
                />
                <div>
                  <h6 className="text-uppercase">Earn points</h6>
                  <p className="mb-0 text-muted text-sm">
                    And get great rewards
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 d-flex">
              <div className="megamenu-services-item">
                <SvgUse
                  hrefVal="#customer-support-1"
                  className="svg-icon megamenu-services-icon"
                />
                <div>
                  <h6 className="text-uppercase">020-800-456-747</h6>
                  <p className="mb-0 text-muted text-sm">
                    24/7 Available Support
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 d-flex">
              <div className="megamenu-services-item">
                <SvgUse
                  hrefVal="#secure-payment-1"
                  className="svg-icon megamenu-services-icon"
                />
                <div>
                  <h6 className="text-uppercase">Secure Payment</h6>
                  <p className="mb-0 text-muted text-sm">Secure Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 d-none d-lg-block">
          <img
            src=" distribution/pages/img/photo/photo-1521170665346-3f21e2291d8b.jpg"
            alt=""
            className="bg-image"
          />
        </div>
      </div>
    </div>
  </li>
);

const withLayout = (Comp: any) => {
  return (): ReactElement => (
    <div>
      <NavBar />
      <Comp />
      <script src={`/ distribution/pages/vendor/jquery/jquery.min.js`} />
      <script
        src={`/ distribution/pages/vendor/bootstrap/js/bootstrap.bundle.min.js`}
      />
      <script
        src={`/ distribution/pages/vendor/magnific-popup/jquery.magnific-popup.min.js`}
      />
      <script
        src={`/ distribution/pages/vendor/smooth-scroll/smooth-scroll.polyfills.min.js`}
      />
      <script
        src={`/ distribution/pages/vendor/bootstrap-select/js/bootstrap-select.min.js`}
      />
      <script
        src={`/ distribution/pages/vendor/object-fit-images/ofi.min.js`}
      />
      <script
        src={`https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js`}
      />
      <script src={` distribution/pages/js/theme.js`} />
    </div>
  );
};

export default withLayout;
