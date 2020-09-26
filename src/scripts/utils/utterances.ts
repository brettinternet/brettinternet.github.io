const comments = document.getElementById('comments')
const repo = comments?.dataset.repo
if (comments && repo) {
  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.setAttribute('repo', repo)
  script.setAttribute('issue-term', 'pathname')
  script.setAttribute('label', '💬 Comments')
  script.setAttribute('defer', 'true')
  comments.appendChild(script)
}
