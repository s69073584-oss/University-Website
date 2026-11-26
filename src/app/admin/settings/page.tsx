
"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Users,
  GraduationCap,
  UserRound,
  Settings,
  Bell,
  Mail,
  LockKeyhole,
  Save,
  CheckCircle2,
  Building2,
  Shield,
} from "lucide-react";

type RoleName = "Admin" | "Teacher" | "Student" | "Parent";

type Permission = {
  id: string;
  label: string;
  description: string;
};

const permissions: Permission[] = [
  { id: "dashboard", label: "View Dashboard", description: "Access the main dashboard and overview." },
  { id: "students", label: "Manage Students", description: "View, add and update student records." },
  { id: "teachers", label: "Manage Teachers", description: "View and manage teacher information." },
  { id: "courses", label: "Manage Courses", description: "Create and update courses and subjects." },
  { id: "attendance", label: "Manage Attendance", description: "View and update attendance records." },
  { id: "exams", label: "Manage Exams & Results", description: "Manage examination schedules and results." },
  { id: "fees", label: "Manage Fees & Payments", description: "View payment records and update fee status." },
  { id: "reports", label: "View Reports", description: "Access academic and financial reports." },
  { id: "announcements", label: "Manage Announcements", description: "Create and publish school notices." },
  { id: "settings", label: "Manage Settings", description: "Change system configuration and access." },
];

const initialPermissions: Record<RoleName, string[]> = {
  Admin: permissions.map((permission) => permission.id),
  Teacher: ["dashboard", "students", "courses", "attendance", "exams", "reports"],
  Student: ["dashboard", "courses", "attendance", "exams"],
  Parent: ["dashboard", "attendance", "exams", "fees"],
};

const roleInfo: {
  name: RoleName;
  description: string;
  users: number;
  icon: typeof ShieldCheck;
}[] = [
  {
    name: "Admin",
    description: "Full system access and management.",
    users: 3,
    icon: ShieldCheck,
  },
  {
    name: "Teacher",
    description: "Classroom and academic management.",
    users: 84,
    icon: GraduationCap,
  },
  {
    name: "Student",
    description: "Access to learning and academic records.",
    users: 1248,
    icon: Users,
  },
  {
    name: "Parent",
    description: "Access to student progress and information.",
    users: 960,
    icon: UserRound,
  },
];

export default function SettingsPage() {
  const [activeRole, setActiveRole] = useState<RoleName>("Admin");
  const [rolePermissions, setRolePermissions] = useState(initialPermissions);

  const [schoolName, setSchoolName] = useState("AL-RAZI School");
  const [schoolEmail, setSchoolEmail] = useState("info@alrazi.edu");
  const [schoolPhone, setSchoolPhone] = useState("+92 300 1234567");
  const [schoolAddress, setSchoolAddress] = useState("Pakistan");

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [systemNotifications, setSystemNotifications] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [saved, setSaved] = useState(false);

  const togglePermission = (permissionId: string) => {
    setRolePermissions((current) => {
      const currentRolePermissions = current[activeRole];

      const updatedPermissions = currentRolePermissions.includes(permissionId)
        ? currentRolePermissions.filter((id) => id !== permissionId)
        : [...currentRolePermissions, permissionId];

      return {
        ...current,
        [activeRole]: updatedPermissions,
      };
    });

    setSaved(false);
  };

  const updateSetting = (callback: (value: boolean) => void, value: boolean) => {
    callback(value);
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
  };

  const Toggle = ({
    checked,
    onChange,
    label,
  }: {
    checked: boolean;
    onChange: (value: boolean) => void;
    label: string;
  }) => (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        checked ? "bg-[#39765b]" : "bg-[#cbd5ce]"
      }`}
    >
      <span
        className={`absolute top-1 size-4 rounded-full bg-white shadow-sm transition ${
          checked ? "left-6" : "left-1"
        }`}
      />
    </button>
  );

  return (
    <div className="min-h-screen bg-[#f7f9f7] px-5 py-7 sm:px-8">

      {/* Heading */}
      <div className="mb-7">
        <p className="mb-2 text-xs font-medium text-[#718579]">
          Administration / Configuration
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-[#153d30]">
          Roles & Settings
        </h1>

        <p className="mt-1 text-sm text-[#718579]">
          Manage user roles, permissions and school system preferences.
        </p>
      </div>

      {/* Role Statistics */}
      <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {roleInfo.map((role) => {
          const Icon = role.icon;

          return (
            <button
              key={role.name}
              onClick={() => {
                setActiveRole(role.name);
                setSaved(false);
              }}
              className={`rounded-xl border bg-white p-5 text-left transition ${
                activeRole === role.name
                  ? "border-[#39765b] ring-1 ring-[#39765b]/20"
                  : "border-[#e1e9e3] hover:border-[#b8cdbd]"
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#e5f0e6]">
                  <Icon size={19} className="text-[#39765b]" />
                </div>

                {activeRole === role.name && (
                  <CheckCircle2 size={17} className="text-[#39765b]" />
                )}
              </div>

              <h2 className="text-sm font-semibold text-[#153d30]">
                {role.name}
              </h2>

              <p className="mt-1 text-[10px] text-[#819087]">
                {role.users.toLocaleString()} users
              </p>
            </button>
          );
        })}
      </div>

      {/* Roles and Permissions */}
      <div className="mb-7 overflow-hidden rounded-xl border border-[#e1e9e3] bg-white">

        <div className="flex flex-col justify-between gap-3 border-b border-[#e8eee9] p-5 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#39765b]" />
              <h2 className="text-sm font-semibold text-[#153d30]">
                Role permissions
              </h2>
            </div>

            <p className="mt-1 text-xs text-[#819087]">
              Configure what each user role can access.
            </p>
          </div>

          <span className="w-fit rounded-full bg-[#e5f0e6] px-3 py-1.5 text-[10px] font-semibold text-[#347448]">
            {activeRole} role selected
          </span>
        </div>

        <div className="border-b border-[#edf1ed] bg-[#fbfcfb] px-5 py-4">
          <h3 className="text-xs font-semibold text-[#294536]">
            {activeRole} access permissions
          </h3>

          <p className="mt-1 text-[10px] text-[#819087]">
            {roleInfo.find((role) => role.name === activeRole)?.description}
          </p>
        </div>

        <div className="divide-y divide-[#edf1ed]">
          {permissions.map((permission) => {
            const enabled = rolePermissions[activeRole].includes(
              permission.id
            );

            return (
              <div
                key={permission.id}
                className="flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-[#fafcfa]"
              >
                <div>
                  <p className="text-xs font-medium text-[#294536]">
                    {permission.label}
                  </p>

                  <p className="mt-1 text-[10px] text-[#819087]">
                    {permission.description}
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={() => togglePermission(permission.id)}
                  aria-label={`${permission.label} permission`}
                  className="size-4 shrink-0 cursor-pointer accent-[#39765b]"
                />
              </div>
            );
          })}
        </div>

        <div className="border-t border-[#edf1ed] bg-[#fbfcfb] px-5 py-3">
          <p className="text-[10px] text-[#819087]">
            {rolePermissions[activeRole].length} of {permissions.length} permissions enabled
          </p>
        </div>
      </div>

      {/* School Information */}
      <div className="mb-7 overflow-hidden rounded-xl border border-[#e1e9e3] bg-white">
        <div className="border-b border-[#e8eee9] p-5">
          <div className="flex items-center gap-2">
            <Building2 size={18} className="text-[#39765b]" />
            <h2 className="text-sm font-semibold text-[#153d30]">
              School information
            </h2>
          </div>

          <p className="mt-1 text-xs text-[#819087]">
            Manage your institution's basic information.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
          {[
            {
              label: "School name",
              value: schoolName,
              setValue: setSchoolName,
              placeholder: "Enter school name",
            },
            {
              label: "School email",
              value: schoolEmail,
              setValue: setSchoolEmail,
              placeholder: "Enter school email",
            },
            {
              label: "Contact number",
              value: schoolPhone,
              setValue: setSchoolPhone,
              placeholder: "Enter contact number",
            },
            {
              label: "School address",
              value: schoolAddress,
              setValue: setSchoolAddress,
              placeholder: "Enter school address",
            },
          ].map((field) => (
            <div key={field.label}>
              <label className="mb-2 block text-xs font-medium text-[#52665a]">
                {field.label}
              </label>

              <input
                type="text"
                value={field.value}
                onChange={(e) => {
                  field.setValue(e.target.value);
                  setSaved(false);
                }}
                placeholder={field.placeholder}
                className="w-full rounded-lg border border-[#dce6df] bg-white px-3 py-2.5 text-xs text-[#294536] outline-none transition focus:border-[#39765b]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* System Preferences */}
      <div className="mb-7 overflow-hidden rounded-xl border border-[#e1e9e3] bg-white">

        <div className="border-b border-[#e8eee9] p-5">
          <div className="flex items-center gap-2">
            <Settings size={18} className="text-[#39765b]" />
            <h2 className="text-sm font-semibold text-[#153d30]">
              System preferences
            </h2>
          </div>

          <p className="mt-1 text-xs text-[#819087]">
            Configure notifications and general system behavior.
          </p>
        </div>

        <div className="divide-y divide-[#edf1ed]">
          <div className="flex items-center justify-between gap-4 p-5">
            <div className="flex items-start gap-3">
              <Bell size={18} className="mt-0.5 text-[#718579]" />
              <div>
                <p className="text-xs font-medium text-[#294536]">
                  System notifications
                </p>
                <p className="mt-1 text-[10px] text-[#819087]">
                  Enable notifications for important system activities.
                </p>
              </div>
            </div>

            <Toggle
              checked={systemNotifications}
              onChange={(value) =>
                updateSetting(setSystemNotifications, value)
              }
              label="System notifications"
            />
          </div>

          <div className="flex items-center justify-between gap-4 p-5">
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 text-[#718579]" />
              <div>
                <p className="text-xs font-medium text-[#294536]">
                  Email notifications
                </p>
                <p className="mt-1 text-[10px] text-[#819087]">
                  Enable email alerts for school updates and activities.
                </p>
              </div>
            </div>

            <Toggle
              checked={emailNotifications}
              onChange={(value) =>
                updateSetting(setEmailNotifications, value)
              }
              label="Email notifications"
            />
          </div>

          <div className="flex items-center justify-between gap-4 p-5">
            <div className="flex items-start gap-3">
              <LockKeyhole size={18} className="mt-0.5 text-[#718579]" />
              <div>
                <p className="text-xs font-medium text-[#294536]">
                  Maintenance mode
                </p>
                <p className="mt-1 text-[10px] text-[#819087]">
                  Enable maintenance mode for system maintenance.
                </p>
              </div>
            </div>

            <Toggle
              checked={maintenanceMode}
              onChange={(value) =>
                updateSetting(setMaintenanceMode, value)
              }
              label="Maintenance mode"
            />
          </div>
        </div>
      </div>

      {/* Save Changes */}
      <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-[#e1e9e3] bg-white p-5 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-sm font-semibold text-[#294536]">
            Save configuration
          </h3>
          <p className="mt-1 text-xs text-[#819087]">
            Save your role permissions and system preferences.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#174d38] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#103c2b] sm:w-auto"
        >
          <Save size={15} />
          Save changes
        </button>
      </div>

      {saved && (
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-[#d7e9da] bg-[#edf6ee] p-4 text-xs font-medium text-[#347448]">
          <CheckCircle2 size={16} />
          Changes are ready. This demo does not persist settings to a database.
        </div>
      )}

      {/* Footer Note */}
      <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#e1e9e3] bg-white p-4">
        <Shield size={18} className="mt-0.5 shrink-0 text-[#39765b]" />
        <div>
          <h3 className="text-xs font-semibold text-[#294536]">
            Access control information
          </h3>
          <p className="mt-1 text-xs leading-5 text-[#718579]">
            These permissions are a frontend demonstration. Actual role-based
            access control must also be enforced by your authentication system
            and backend APIs.
          </p>
        </div>
      </div>
    </div>
  );
}
