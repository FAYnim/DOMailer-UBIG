const initialEmails = [
  {
    id: "1",
    sender: "HR TechCorp",
    subject: "URGENT: Submit Q4 Performance Assessment",
    body: "Please complete your quarterly review before 5 PM today to avoid delay in processing.",
    date: "08:15 AM",
    isRead: false,
    isStarred: true
  },
  {
    id: "2",
    sender: "Alex Dev",
    subject: "Code Review - PR #402 DOM Refactoring",
    body: "Hey, can you take a look at the event delegation implementation when you have time?",
    date: "08:42 AM",
    isRead: false,
    isStarred: false
  },
  {
    id: "3",
    sender: "GitHub Notifications",
    subject: "[IMPORTANT] Security alert on repository main branch",
    body: "We detected a potential dependency vulnerability in package.json. Please update immediately.",
    date: "09:05 AM",
    isRead: false,
    isStarred: true
  },
  {
    id: "4",
    sender: "Sarah Product Lead",
    subject: "Sprint Planning Alignment for Next Week",
    body: "Let's align our backlog items for DOMailer milestone 2 tomorrow at 10 AM.",
    date: "09:30 AM",
    isRead: true,
    isStarred: false
  },
  {
    id: "5",
    sender: "Figma Team",
    subject: "New comments on DOMailer UI Wireframes",
    body: "Sarah left 3 new comments on the table view layout component.",
    date: "10:00 AM",
    isRead: true,
    isStarred: false
  },
  {
    id: "6",
    sender: "DevOps Ops",
    subject: "Staging Server Maintenance Notice",
    body: "Staging environment will be down for scheduled upgrades tonight between 11 PM and 1 AM.",
    date: "10:15 AM",
    isRead: true,
    isStarred: false
  },
  {
    id: "7",
    sender: "Client Support",
    subject: "URGENT: Login issue reported on production",
    body: "Multiple users are reporting intermittent 500 errors when submitting the login form.",
    date: "10:45 AM",
    isRead: false,
    isStarred: true
  },
  {
    id: "8",
    sender: "Slack Workspace",
    subject: "Weekly Activity Digest for TechCorp",
    body: "Here is your weekly summary: 142 new messages across 8 active channels.",
    date: "11:20 AM",
    isRead: true,
    isStarred: false
  },
  {
    id: "9",
    sender: "Finance Department",
    subject: "Reimbursement Claim Approved",
    body: "Your internet allowance claim for last month has been processed and approved.",
    date: "11:50 AM",
    isRead: true,
    isStarred: true
  },
  {
    id: "10",
    sender: "Radian QA",
    subject: "Bug Report: Checkbox bulk selection bug",
    body: "When select all is checked, unchecking one row does not update the master checkbox state.",
    date: "12:10 PM",
    isRead: false,
    isStarred: false
  },
  {
    id: "11",
    sender: "Google Calendar",
    subject: "Reminder: All-Hands Meeting in 30 minutes",
    body: "Company updates and Q&A session with the executive team. Zoom link attached.",
    date: "01:30 PM",
    isRead: false,
    isStarred: false
  },
  {
    id: "12",
    sender: "Jessica TechCorp",
    subject: "Design System Guidelines v2.0",
    body: "Check out the updated color tokens and button states for DOMailer dark mode.",
    date: "02:00 PM",
    isRead: true,
    isStarred: false
  },
  {
    id: "13",
    sender: "Vercel Deployments",
    subject: "Deployment successful for domailer-staging",
    body: "Your commit 'fix: update event listener logic' was successfully deployed to production preview.",
    date: "02:25 PM",
    isRead: true,
    isStarred: false
  },
  {
    id: "14",
    sender: "IT Helpdesk",
    subject: "IMPORTANT: Password Reset Required",
    body: "Your corporate account password will expire in 3 days. Please update it via portal.",
    date: "03:10 PM",
    isRead: false,
    isStarred: true
  },
  {
    id: "15",
    sender: "Medium Daily",
    subject: "Top stories in JavaScript Performance & DOM Optimization",
    body: "Discover why event delegation improves memory management in heavy web applications.",
    date: "Yesterday",
    isRead: true,
    isStarred: false
  },
  {
    id: "16",
    sender: "Michael Lead Dev",
    subject: "Architecture Review Feedback",
    
    body: "Great job on keeping the code modular. Let's optimize the filter algorithm next.",
    date: "Yesterday",
    isRead: true,
    isStarred: true
  },
  {
    id: "17",
    sender: "Notion Updates",
    subject: "Page shared with you: DOMailer Documentation",
    body: "Michael shared 'DOMailer Component Lifecycle' page with your workspace.",
    date: "Yesterday",
    isRead: true,
    isStarred: false
  },
  {
    id: "18",
    sender: "HR TechCorp",
    subject: "Town Hall Feedback Survey",
    body: "We value your input! Take 2 minutes to fill out the anonymous feedback form.",
    date: "Yesterday",
    isRead: true,
    isStarred: false
  },
  {
    id: "19",
    sender: "LinkedIn Jobs",
    subject: "New Frontend Developer roles matching your profile",
    body: "Explore 5 new remote opportunities matching Senior Vanilla JavaScript Developer.",
    date: "2 days ago",
    isRead: true,
    isStarred: false
  },
  {
    id: "20",
    sender: "NPM Registry",
    subject: "[URGENT] Deprecation notice for package user-event",
    body: "Version 12.x of user-event is now deprecated. Please upgrade to version 14.x immediately.",
    date: "2 days ago",
    isRead: false,
    isStarred: false
  },
  {
    id: "21",
    sender: "David Frontend",
    subject: "Question about DOM traversal methods",
    body: "Should we prefer closest() over parentElement for nested table rows in DOMailer?",
    date: "2 days ago",
    isRead: true,
    isStarred: false
  },
  {
    id: "22",
    sender: "Spotify for Work",
    subject: "Your Weekly Focused Coding Playlist",
    body: "Deep focus beats curated for frontend engineering sessions.",
    date: "3 days ago",
    isRead: true,
    isStarred: false
  },
  {
    id: "23",
    sender: "AWS Billing",
    subject: "Monthly Invoice Available for Account #8902",
    body: "Your monthly usage statement for September is available for download.",
    date: "3 days ago",
    isRead: true,
    isStarred: false
  },
  {
    id: "24",
    sender: "TechCorp Security",
    subject: "IMPORTANT: 2FA Enrollment Notice",
    body: "Two-Factor Authentication will be enforced for all developer accounts starting Friday.",
    date: "4 days ago",
    isRead: false,
    isStarred: true
  },
  {
    id: "25",
    sender: "Postman Team",
    subject: "Collection DOMailer API Mock shared",
    body: "Alex updated the response schemas for GET /emails and POST /emails/compose.",
    date: "4 days ago",
    isRead: true,
    isStarred: false
  },
  {
    id: "26",
    sender: "Coursera Tech",
    subject: "Certificate earned: Advanced JavaScript Data Structures",
    body: "Congratulations! Your certificate is ready to be shared on your LinkedIn profile.",
    date: "5 days ago",
    isRead: true,
    isStarred: true
  },
  {
    id: "27",
    sender: "Dribbble Digest",
    subject: "Minimalist Dashboard Design Inspiration",
    body: "Top 10 clean table and inbox UI designs selected by the community this week.",
    date: "5 days ago",
    isRead: true,
    isStarred: false
  },
  {
    id: "28",
    sender: "Office Facilities",
    subject: "Desk Allocation Update for Q4",
    body: "Please review your new seat assignment for the Engineering floor in Building B.",
    date: "6 days ago",
    isRead: true,
    isStarred: false
  },
  {
    id: "29",
    sender: "Sentry Error Tracker",
    subject: "URGENT: Unhandled TypeException in Production",
    body: "New exception caught in app.js at line 84: Cannot read properties of null.",
    date: "Oct 01",
    isRead: false,
    isStarred: true
  },
  {
    id: "30",
    sender: "TechCorp Onboarding",
    subject: "Welcome to TechCorp Engineering Team!",
    body: "Welcome aboard! Here are all the resources to get your local environment set up.",
    date: "Sep 28",
    isRead: true,
    isStarred: true
  }
];

const el_email_list = document.querySelector('#email-list');
const el_unread_count = document.querySelector('#unread-count');
const el_starred_count = document.querySelector('#starred-count');
const el_select_all = document.querySelector('#select-all-checkbox');
const el_bulk_action_bar = document.querySelector('#bulk-action-bar');
const el_selected_count = document.querySelector('#selected-count');
const el_mark_read_btn = document.querySelector('#mark-read-btn');
const el_delete_selected_btn = document.querySelector('#delete-selected-btn');

const el_search_input = document.querySelector('#search-input');
const el_filter_buttons = document.querySelectorAll('.filter-btn');
const el_compose_btn = document.querySelector('#compose-btn');
const el_compose_modal = document.querySelector('#compose-modal');
const el_close_compose_x = document.querySelector('#close-compose-x');
const el_close_compose_btn = document.querySelector('#close-compose-btn');
const el_compose_form = document.querySelector('#compose-form');
const el_compose_to = document.querySelector('#compose-to');
const el_compose_subject = document.querySelector('#compose-subject');
const el_compose_body = document.querySelector('#compose-body');

let emails = [...initialEmails];
let active_filter = 'all';
let search_query = '';


const get_visible_emails = () => {
  const normalized_query = search_query.trim().toLowerCase();

  return emails.filter((email) => {
    const matches_filter = active_filter === 'all' ||
      (active_filter === 'unread' && !email.isRead) ||
      (active_filter === 'starred' && email.isStarred);

    const matches_search = normalized_query === '' ||
      email.sender.toLowerCase().includes(normalized_query) ||
      email.subject.toLowerCase().includes(normalized_query);

    return matches_filter && matches_search;
  })
}

const render_visible_emails = () => {
  render_emails(get_visible_emails());
}

const get_selected_rows = () => {
  return [...el_email_list.querySelectorAll('.row-checkbox:checked')];
}

const update_selection_list = () => {


  const row_checkboxes = [...el_email_list.querySelectorAll('.row-checkbox')];

  const selected_rows = get_selected_rows();

  const all_visible_selected = row_checkboxes.length > 0 && selected_rows.length === row_checkboxes.length;
  el_selected_count.textContent = selected_rows.length;
  el_bulk_action_bar.classList.toggle(
    'hidden',
    selected_rows.length === 0
  );

  el_select_all.checked = all_visible_selected;

  el_select_all.indeterminate = selected_rows.length > 0 && !all_visible_selected;
};

const update_metrics = (emails) => {
  const unread_count = emails.filter((email) => !email.isRead).length;
  const starred_count = emails.filter((email) => email.isStarred).length;

  el_unread_count.textContent  = unread_count;
  el_starred_count.textContent = starred_count;
}

const render_emails = (emails_list) => {
  el_email_list.innerHTML = '';

  emails_list.forEach((email) => {
    const emailRow = document.createElement('tr');
    const is_priority = /urgent|important/i.test(email.subject);

    emailRow.classList.add('email-row');
    emailRow.setAttribute('data-id', email.id);
    emailRow.setAttribute('data-read', email.isRead);
    emailRow.setAttribute('data-starred', email.isStarred);
    emailRow.innerHTML = `
      <td class="col-checkbox">
        <input type="checkbox" class="row-checkbox" aria-label="Select email" />
      </td>

      <td class="col-star">
        <span class="star-icon ${email.isStarred ? 'starred' : ''}" aria-label="Star email" title="Toggle Star">
          ${email.isStarred ? '★' : '☆'}
        </span>
      </td>

      <td class="sender">${email.sender}</td>

      <td class="subject-content">
        <span class="subject">${email.subject}</span>
        <span class="priority-tag">${is_priority ? 'HIGH PRIORITY' : ''}</span>
        <p class="body-preview">${email.body}</p>
        
      </td>
      <td class="date">${email.date}</td>

      <td class="col-action">
        <button type="button" class="delete-btn" aria-label="Delete email" title="Delete Email">
          Delete
        </button>
      </td>
    `;
    el_email_list.appendChild(emailRow);
  });
  
  update_metrics(emails);
  update_selection_list();
};

render_visible_emails();

el_email_list.addEventListener('change', (e) => {
  if(!e.target.matches('.row-checkbox')) {
    return;
  }

  update_selection_list();
})

el_select_all.addEventListener('change', (e) => {
  const row_checkboxes = el_email_list.querySelectorAll('.row-checkbox');

  row_checkboxes.forEach((checkbox) => {
    checkbox.checked = el_select_all.checked;
  });

  update_selection_list();
});

el_mark_read_btn.addEventListener('click', () => {
  const selectedRows = get_selected_rows();
  selectedRows.forEach((checkbox) => {
    const email_row = checkbox.closest('.email-row');
    const email_id = email_row.getAttribute('data-id');

    const email = emails.find((item) => item.id === email_id);

    if(email) {
      email.isRead = true;
    }
  });
  render_visible_emails();
});

el_email_list.addEventListener('click', (event) => {
  const email_row = event.target.closest('.email-row');

  if(!email_row) {
    return;
  }

  const email_id = email_row.getAttribute('data-id');
  const email = emails.find((item) => item.id === email_id);

  if(!email) {
    return;
  }

  if(event.target.matches('.row-checkbox')) {
    return;
  }

  const star_icon = event.target.closest('.star-icon');

  if(star_icon) {
    email.isStarred = !email.isStarred;
    render_visible_emails();
    return;
  }

  const delete_button = event.target.closest('.delete-btn');

  if(delete_button) {
    emails = emails.filter((item) => item.id !== email_id);
    render_visible_emails();
    return;
  }

  email.isRead = !email.isRead;
  render_visible_emails();
});

el_search_input.addEventListener('input', (e) => {
  search_query = e.target.value;
  render_visible_emails();
});

el_filter_buttons.forEach((button) => {
  button.addEventListener('click', () => {
    active_filter = button.getAttribute('data-filter');

    el_filter_buttons.forEach((filter_btn) => {
      filter_btn.classList.toggle('active', filter_btn === button);
    });

    render_visible_emails();
  });
});

const open_compose_modal = () => {
  el_compose_modal.classList.remove('hidden');
  el_compose_to.focus();
};

const close_compose_modal = () => {
  el_compose_modal.classList.add('hidden');
  el_compose_form.reset();
};

el_compose_btn.addEventListener('click', open_compose_modal);
el_close_compose_x.addEventListener('click', close_compose_modal);
el_close_compose_btn.addEventListener('click', close_compose_modal);

el_compose_form.addEventListener('submit', (event) => {
  event.preventDefault();

  const recipient = el_compose_to.value.trim();
  const subject = el_compose_subject.value.trim();
  const body = el_compose_body.value.trim();

  emails.unshift({
    id: crypto.randomUUID(),
    sender: recipient,
    subject,
    body,
    date: 'Just now',
    isRead: false,
    isStarred: false
  });

  render_visible_emails();
  close_compose_modal();
});