'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, Fragment } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js'
import { Line, Radar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
)

export default function DashboardsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const plData = [
    { m: 0, rev: 3.2, cogs: 1.9 },
    { m: 1, rev: 3.4, cogs: 2.0 },
    { m: 2, rev: 3.1, cogs: 1.8 },
    { m: 3, rev: 3.6, cogs: 2.1 },
    { m: 4, rev: 3.9, cogs: 2.2 },
    { m: 5, rev: 4.2, cogs: 2.4 },
    { m: 6, rev: 4.0, cogs: 2.3 },
    { m: 7, rev: 4.3, cogs: 2.5 },
    { m: 8, rev: 4.5, cogs: 2.6 },
    { m: 9, rev: 4.8, cogs: 2.7 },
    { m: 10, rev: 4.6, cogs: 2.6 },
    { m: 11, rev: 5.0, cogs: 2.8 },
  ]

  const oeeData = [62, 65, 63, 68, 70, 72, 69, 74, 73, 75, 77, 79].map((v, i) => ({
    w: `W${i + 1}`,
    oee: v,
    thr: 520 + i * 12 + (i % 3 ? 18 : -10),
  }))

  const wcData = [
    { q: '2024‑Q4', dso: 46, dpo: 55, dio: 41 },
    { q: '2025‑Q1', dso: 44, dpo: 58, dio: 39 },
    { q: '2025‑Q2', dso: 43, dpo: 60, dio: 37 },
    { q: '2025‑Q3', dso: 42, dpo: 61, dio: 36 },
  ]

  const closeTasks = [
    { name: 'Trial balance import', status: 'ok' },
    { name: 'Intercompany eliminations', status: 'warn' },
    { name: 'Accruals & deferrals', status: 'ok' },
    { name: 'Inventory reconciliation', status: 'bad' },
    { name: 'AP/AR aging refresh', status: 'ok' },
  ]

  const muted = '#b8b0cc'
  const auroraBlue = '#a8c8e8'
  const lavender = '#c9b8e8'
  const auroraPink = '#f4b8c5'
  const gridColor = 'rgba(201,184,232,.08)'

  const plChartData = {
    labels: plData.map((x) => months[x.m]),
    datasets: [
      {
        label: 'Revenue',
        data: plData.map((x) => x.rev),
        tension: 0.4,
        borderWidth: 2,
        borderColor: auroraBlue,
        backgroundColor: auroraBlue + '20',
        fill: true,
      },
      {
        label: 'COGS',
        data: plData.map((x) => x.cogs),
        tension: 0.4,
        borderWidth: 2,
        borderColor: lavender,
        backgroundColor: lavender + '20',
        fill: true,
      },
      {
        label: 'Gross Margin',
        data: plData.map((x) => x.rev - x.cogs),
        type: 'bar' as const,
        borderWidth: 0,
        backgroundColor: auroraPink + '60',
      },
    ],
  }

  const oeeChartData = {
    labels: oeeData.map((x) => x.w),
    datasets: [
      {
        type: 'line' as const,
        label: 'OEE %',
        data: oeeData.map((x) => x.oee),
        yAxisID: 'y',
        tension: 0.4,
        borderWidth: 2,
        borderColor: auroraBlue,
        backgroundColor: auroraBlue + '20',
        fill: true,
      },
      {
        type: 'bar' as const,
        label: 'Units/hr',
        data: oeeData.map((x) => x.thr),
        yAxisID: 'y1',
        backgroundColor: lavender + '50',
      },
    ],
  }

  const wcChartData = {
    labels: ['DSO', 'DPO', 'DIO'],
    datasets: wcData.map((row, i) => {
      const colors = [auroraBlue, lavender, auroraPink, '#e0d4f5']
      return {
        label: row.q,
        data: [row.dso, row.dpo, row.dio],
        borderColor: colors[i],
        backgroundColor: colors[i] + '20',
        borderWidth: 2,
      }
    }),
  }

  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: muted, font: { family: 'Quicksand' } },
      },
    },
  }

  return (
    <motion.section
      id="dashboards"
      className="section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="glow"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2 }}
      >
        Built-in Dashboards
      </motion.h2>
      <div className="decorative-line"></div>
      <motion.div
        className="dash-grid"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, staggerChildren: 0.1 }}
      >
        <motion.article
          className="dash"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
        >
          <div className="dash-head">
            <div>
              <div className="dash-title">P&L Overview</div>
              <div className="legend">
                <span>
                  <span className="dot" style={{ background: auroraBlue }}></span>Revenue
                </span>
                <span>
                  <span className="dot" style={{ background: lavender }}></span>COGS
                </span>
                <span>
                  <span className="dot" style={{ background: auroraPink }}></span>Gross Margin
                </span>
              </div>
            </div>
            <span className="pill mono">Monthly</span>
          </div>
          <div className="dash-body" style={{ height: '200px' }}>
            <Line data={plChartData} options={chartOptions} />
          </div>
        </motion.article>

        <motion.article
          className="dash"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
        >
          <div className="dash-head">
            <div>
              <div className="dash-title">OEE & Throughput (Manufacturing)</div>
              <div className="legend">
                <span>
                  <span className="dot" style={{ background: auroraBlue }}></span>OEE %
                </span>
                <span>
                  <span className="dot" style={{ background: lavender }}></span>Units/hr
                </span>
              </div>
            </div>
            <span className="pill mono">Weekly</span>
          </div>
          <div className="dash-body" style={{ height: '200px' }}>
            <Line
              data={oeeChartData}
              options={{
                ...chartOptions,
                scales: {
                  x: { ticks: { color: muted }, grid: { color: gridColor } },
                  y: {
                    position: 'left' as const,
                    ticks: { color: muted, callback: (v: any) => v + '%' },
                    grid: { color: gridColor },
                  },
                  y1: {
                    position: 'right' as const,
                    ticks: { color: muted },
                    grid: { drawOnChartArea: false },
                  },
                },
              }}
            />
          </div>
        </motion.article>

        <motion.article
          className="dash"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
        >
          <div className="dash-head">
            <div>
              <div className="dash-title">Working Capital</div>
              <div className="legend">
                <span>
                  <span className="dot" style={{ background: auroraBlue }}></span>DSO
                </span>
                <span>
                  <span className="dot" style={{ background: lavender }}></span>DPO
                </span>
                <span>
                  <span className="dot" style={{ background: auroraPink }}></span>DIO
                </span>
              </div>
            </div>
            <span className="pill mono">Quarterly</span>
          </div>
          <div className="dash-body" style={{ height: '200px' }}>
            <Radar
              data={wcChartData}
              options={{
                ...chartOptions,
                scales: {
                  r: {
                    angleLines: { color: gridColor },
                    grid: { color: gridColor },
                    pointLabels: { color: muted, font: { family: 'Quicksand' } },
                    ticks: { display: false },
                  },
                },
              }}
            />
          </div>
        </motion.article>

        <motion.article
          className="dash"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7 }}
        >
          <div className="dash-head">
            <div>
              <div className="dash-title">Close Cycle Tracker</div>
              <div className="legend">
                <span>
                  <span className="dot" style={{ background: '#a8d8a8' }}></span>On-time
                </span>
                <span>
                  <span className="dot" style={{ background: '#e8d4a8' }}></span>At risk
                </span>
                <span>
                  <span className="dot" style={{ background: '#e8a8a8' }}></span>Late
                </span>
              </div>
            </div>
            <span className="pill mono">Tasks</span>
          </div>
          <div className="dash-body">
            <div className="mono" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px' }}>
              {closeTasks.map((task) => {
                const statusColors: Record<string, { color: string; borderColor: string }> = {
                  ok: { color: '#a8d8a8', borderColor: 'rgba(168,216,168,.3)' },
                  warn: { color: '#e8d4a8', borderColor: 'rgba(232,212,168,.3)' },
                  bad: { color: '#e8a8a8', borderColor: 'rgba(232,168,168,.3)' },
                }
                const statusStyle = statusColors[task.status] || statusColors.ok
                return (
                  <Fragment key={task.name}>
                    <div style={{ padding: '10px 0', color: muted, fontSize: '13px' }}>
                      {task.name}
                    </div>
                    <div
                      className="pill"
                      style={{
                        fontSize: '10px',
                        alignSelf: 'center',
                        color: statusStyle.color,
                        borderColor: statusStyle.borderColor,
                      }}
                    >
                      {task.status.toUpperCase()}
                    </div>
                  </Fragment>
                )
              })}
            </div>
          </div>
        </motion.article>
      </motion.div>
    </motion.section>
  )
}
