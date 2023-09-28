import { Input, Divider, Checkbox, Space } from "antd";
import { SearchOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
function PageContent() {
  return (
    <>
      <div className="page-content">
        <div className="search-sec">
          <div className="input">
            <Input
              prefix={<SearchOutlined />}
              suffix={<ExclamationCircleOutlined />}
              placeholder="Search by name, edu, exp or #tag"
              className="inp"
            ></Input>
          </div>

          <div className="filter">
            <div
              style={{ justifyContent: "space-between" }}
              className="fil-items"
            >
              <p style={{ fontWeight: "bold" }}>Filters</p>
              <p style={{ fontSize: "0.8rem" }}>0 Selected</p>
            </div>
            <Divider style={{ margin: 12 }} />
            <div className="fil-fle">
              <div className="fil-items">
                <div className="search-svg">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M9 17H11M9 13H13M9 9H10M19.2686 19.2686L21 21M20 17.5C20 18.8807 18.8807 20 17.5 20C16.1193 20 15 18.8807 15 17.5C15 16.1193 16.1193 15 17.5 15C18.8807 15 20 16.1193 20 17.5Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />{" "}
                    </g>
                  </svg>
                </div>
                <p>Personal Information</p>
              </div>
              <div>
                <svg
                  width="10px"
                  height="10px"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                      fill="#000000"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <Divider style={{ margin: 12 }} />
            <div className="fil-fle">
              <div className="fil-items">
                <div className="search-svg">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M9 17H11M9 13H13M9 9H10M19.2686 19.2686L21 21M20 17.5C20 18.8807 18.8807 20 17.5 20C16.1193 20 15 18.8807 15 17.5C15 16.1193 16.1193 15 17.5 15C18.8807 15 20 16.1193 20 17.5Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />{" "}
                    </g>
                  </svg>
                </div>
                <p>Education</p>
              </div>
              <div>
                <svg
                  width="10px"
                  height="10px"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                      fill="#000000"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <Divider style={{ margin: 12 }} />
            <div className="fil-fle">
              <div className="fil-items">
                <div className="search-svg">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M9 17H11M9 13H13M9 9H10M19.2686 19.2686L21 21M20 17.5C20 18.8807 18.8807 20 17.5 20C16.1193 20 15 18.8807 15 17.5C15 16.1193 16.1193 15 17.5 15C18.8807 15 20 16.1193 20 17.5Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />{" "}
                    </g>
                  </svg>
                </div>
                <p>Work Experience</p>
              </div>
              <div>
                <svg
                  width="10px"
                  height="10px"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                      fill="#000000"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <Divider style={{ margin: 12 }} />
            <div className="fil-fle">
              <div className="fil-items">
                <div className="search-svg">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M9 17H11M9 13H13M9 9H10M19.2686 19.2686L21 21M20 17.5C20 18.8807 18.8807 20 17.5 20C16.1193 20 15 18.8807 15 17.5C15 16.1193 16.1193 15 17.5 15C18.8807 15 20 16.1193 20 17.5Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />{" "}
                    </g>
                  </svg>
                </div>
                <p>Activity Filter</p>
              </div>
              <div>
                <svg
                  width="10px"
                  height="10px"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                      fill="#000000"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <Divider style={{ margin: 12 }} />
            <div className="fil-fle">
              <div className="fil-items">
                <div className="search-svg">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M9 17H11M9 13H13M9 9H10M19.2686 19.2686L21 21M20 17.5C20 18.8807 18.8807 20 17.5 20C16.1193 20 15 18.8807 15 17.5C15 16.1193 16.1193 15 17.5 15C18.8807 15 20 16.1193 20 17.5Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />{" "}
                    </g>
                  </svg>
                </div>
                <p>Advanced Filter</p>
              </div>
              <div>
                <svg
                  width="10px"
                  height="10px"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                      fill="#000000"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <Divider style={{ margin: 12 }} />
          </div>
        </div>
        <div className="cand-sec">
          <div className="cand-head">
            <Space>
              <Checkbox></Checkbox>
              <h4 style={{ color: "#218256" }}>5 Candidates</h4>
            </Space>
            <Space>
              <h4 style={{ color: "#218256" }}>Qualified</h4>
              <Divider type="vertical" style={{ border: "1px solid" }} />
              <h4>Task</h4>
              <div className="dot">
                <p>78</p>
              </div>
              <Divider type="vertical" style={{ border: "1px solid" }} />
              <h4>Disqualified</h4>
              <div className="dot">
                <p>45</p>
              </div>
            </Space>
          </div>
          <Divider style={{ margin: 4 }} />
          <div className="overfl">
            <div className="cand-body">
              <div className="content">
                <Space className="pad">
                  <Checkbox></Checkbox>
                </Space>
                <Space className="pad">
                  <div className="big-dot">
                    <p>A S</p>
                  </div>
                </Space>
                <Space direction="vertical" className="pad">
                  <h4>Aaliyah Anderson</h4>
                  <p className="dot-2">Riyah, Saudi Arabia</p>
                  <p className="dot-3">
                    Bachelor-Cambridge University(2022-2023)
                  </p>
                  <Space>
                    <p className="dot-4">#top_candidate</p>
                    <p className="dot-4">#top_School</p>
                  </Space>
                  <Space>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                  </Space>
                </Space>
              </div>
              <Divider style={{ margin: 6,  border: "1px solid"}} />
            </div>
            <div className="cand-body">
              <div className="content">
                <Space className="pad">
                  <Checkbox></Checkbox>
                </Space>
                <Space className="pad">
                  <div className="big-dot">
                    <p>A S</p>
                  </div>
                </Space>
                <Space direction="vertical" className="pad">
                  <h4>Aaliyah Anderson</h4>
                  <p className="dot-2">Riyah, Saudi Arabia</p>
                  <p className="dot-3">
                    Bachelor-Cambridge University(2022-2023)
                  </p>
                  <Space>
                    <p className="dot-4">#top_candidate</p>
                    <p className="dot-4">#top_School</p>
                  </Space>
                  <Space>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                  </Space>
                </Space>
              </div>
              <Divider style={{ margin: 6,  border: "1px solid" }} />
            </div>
            <div className="cand-body">
              <div className="content">
                <Space className="pad">
                  <Checkbox></Checkbox>
                </Space>
                <Space className="pad">
                  <div className="big-dot">
                    <p>A S</p>
                  </div>
                </Space>
                <Space direction="vertical" className="pad">
                  <h4>Aaliyah Anderson</h4>
                  <p className="dot-2">Riyah, Saudi Arabia</p>
                  <p className="dot-3">
                    Bachelor-Cambridge University(2022-2023)
                  </p>
                  <Space>
                    <p className="dot-4">#top_candidate</p>
                    <p className="dot-4">#top_School</p>
                  </Space>
                  <Space>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                  </Space>
                </Space>
              </div>
              <Divider style={{ margin: 6,  border: "1px solid"}} />
            </div>
            <div className="cand-body">
              <div className="content">
                <Space className="pad">
                  <Checkbox></Checkbox>
                </Space>
                <Space className="pad">
                  <div className="big-dot">
                    <p>A S</p>
                  </div>
                </Space>
                <Space direction="vertical" className="pad">
                  <h4>Aaliyah Anderson</h4>
                  <p className="dot-2">Riyah, Saudi Arabia</p>
                  <p className="dot-3">
                    Bachelor-Cambridge University(2022-2023)
                  </p>
                  <Space>
                    <p className="dot-4">#top_candidate</p>
                    <p className="dot-4">#top_School</p>
                  </Space>
                  <Space>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                  </Space>
                </Space>
              </div>
              <Divider style={{ margin: 6,  border: "1px solid" }} />
            </div>
            <div className="cand-body">
              <div className="content">
                <Space className="pad">
                  <Checkbox></Checkbox>
                </Space>
                <Space className="pad">
                  <div className="big-dot">
                    <p>A S</p>
                  </div>
                </Space>
                <Space direction="vertical" className="pad">
                  <h4>Aaliyah Anderson</h4>
                  <p className="dot-2">Riyah, Saudi Arabia</p>
                  <p className="dot-3">
                    Bachelor-Cambridge University(2022-2023)
                  </p>
                  <Space>
                    <p className="dot-4">#top_candidate</p>
                    <p className="dot-4">#top_School</p>
                  </Space>
                  <Space>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                  </Space>
                </Space>
              </div>
              <Divider style={{ margin: 6,  border: "1px solid" }} />
            </div>
            <div className="cand-body">
              <div className="content">
                <Space className="pad">
                  <Checkbox></Checkbox>
                </Space>
                <Space className="pad">
                  <div className="big-dot">
                    <p>A S</p>
                  </div>
                </Space>
                <Space direction="vertical" className="pad">
                  <h4>Aaliyah Anderson</h4>
                  <p className="dot-2">Riyah, Saudi Arabia</p>
                  <p className="dot-3">
                    Bachelor-Cambridge University(2022-2023)
                  </p>
                  <Space>
                    <p className="dot-4">#top_candidate</p>
                    <p className="dot-4">#top_School</p>
                  </Space>
                  <Space>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                    <div className="dot-5">
                      <p>New York</p>
                    </div>
                  </Space>
                </Space>
              </div>
              <Divider style={{ margin: 6,  border: "1px solid" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageContent;
