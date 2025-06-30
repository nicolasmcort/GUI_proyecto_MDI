import React, { useState } from "react";
import {
  Plus,
  Search,
  Settings,
  List,
  CheckSquare,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Task {
  id: number;
  name: string;
  duration: number;
  priority: "High" | "Medium" | "Critical";
  dependencies: string;
}

const TaskFlowPro: React.FC = () => {
  const [tasks] = useState<Task[]>([
    {
      id: 1,
      name: "Design UI mockups",
      duration: 5,
      priority: "High",
      dependencies: "Ninguna",
    },
    {
      id: 2,
      name: "Implement backend API",
      duration: 8,
      priority: "High",
      dependencies: "1",
    },
    {
      id: 3,
      name: "Frontend development",
      duration: 12,
      priority: "Medium",
      dependencies: "1, 2",
    },
    {
      id: 4,
      name: "Testing and QA",
      duration: 4,
      priority: "High",
      dependencies: "3",
    },
    {
      id: 5,
      name: "Deploy to production",
      duration: 2,
      priority: "Critical",
      dependencies: "4",
    },
  ]);

  const [taskName, setTaskName] = useState("");
  const [duration, setDuration] = useState("");
  const [unit, setUnit] = useState("Horas");
  const [priority, setPriority] = useState("Baja");
  const [dependencies, setDependencies] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchId, setSearchId] = useState("");

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-orange-600";
      case "Medium":
        return "bg-blue-600";
      case "Critical":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-taskflow-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-70 bg-taskflow-sidebar border-r border-taskflow-border-light">
        <div className="border-b border-taskflow-border-light p-6">
          <h1 className="text-xl font-bold text-taskflow-primary">
            TaskFlow Pro
          </h1>
          <p className="text-xs text-taskflow-muted mt-1">
            Critical Path Management System
          </p>
        </div>

        <nav className="p-4 space-y-1">
          <div className="flex items-center space-x-3 p-3 rounded-md bg-taskflow-card border-l-2 border-taskflow-primary text-taskflow-primary">
            <CheckSquare size={16} />
            <span className="text-sm font-medium">Gestión de Tareas</span>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-md text-taskflow-muted hover:text-taskflow-text">
            <BarChart3 size={16} />
            <span className="text-sm">Análisis CPM</span>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-md text-taskflow-muted hover:text-taskflow-text">
            <List size={16} />
            <span className="text-sm">Reportes</span>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-md text-taskflow-muted hover:text-taskflow-text">
            <Settings size={16} />
            <span className="text-sm">Configuración</span>
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 w-full border-t border-taskflow-border-light p-4">
          <p className="text-xs text-taskflow-muted-dark">
            v2.1.0 - Academic Edition
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-70 min-h-screen">
        {/* Header */}
        <header className="border-b border-taskflow-border-light bg-taskflow-sidebar px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-taskflow-text">
              Panel de Control de Tareas
            </h2>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-taskflow-muted">Total:</span>
              <span className="text-taskflow-primary font-medium">
                {tasks.length}
              </span>
              <span className="text-taskflow-muted">tareas</span>
              <div className="w-2 h-2 rounded-full bg-taskflow-primary opacity-80 ml-2"></div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Task Entry and Management Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Task Entry Card */}
            <div className="bg-taskflow-card border border-taskflow-border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Plus size={20} className="text-taskflow-text" />
                <h3 className="text-base font-semibold text-taskflow-text">
                  Entrada de Tareas
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-taskflow-muted mb-2">
                    Nombre de la Tarea
                  </label>
                  <Input
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Ingrese el nombre de la tarea..."
                    className="bg-taskflow-background border-taskflow-border text-taskflow-text placeholder:text-gray-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-taskflow-muted mb-2">
                      Duración
                    </label>
                    <Input
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      placeholder="0"
                      className="bg-taskflow-background border-taskflow-border text-taskflow-text placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-taskflow-muted mb-2">
                      Unidad
                    </label>
                    <Select value={unit} onValueChange={setUnit}>
                      <SelectTrigger className="bg-gray-300 border-taskflow-border text-black">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Horas">Horas</SelectItem>
                        <SelectItem value="Días">Días</SelectItem>
                        <SelectItem value="Semanas">Semanas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-taskflow-muted mb-2">
                    Prioridad
                  </label>
                  <Select value={priority} onValueChange={setPriority}>
                    <SelectTrigger className="bg-gray-300 border-taskflow-border text-black">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Baja">Baja</SelectItem>
                      <SelectItem value="Media">Media</SelectItem>
                      <SelectItem value="Alta">Alta</SelectItem>
                      <SelectItem value="Crítica">Crítica</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-xs text-taskflow-muted mb-2">
                    Dependencias (IDs separados por comas)
                  </label>
                  <Input
                    value={dependencies}
                    onChange={(e) => setDependencies(e.target.value)}
                    placeholder="1, 2, 3"
                    className="bg-taskflow-background border-taskflow-border text-taskflow-text placeholder:text-gray-500"
                  />
                </div>

                <Button className="w-full bg-taskflow-primary hover:bg-taskflow-primary/90 text-taskflow-background font-semibold">
                  <Plus size={16} className="mr-2" />
                  Agregar Tarea
                </Button>
              </div>
            </div>

            {/* Task Management Card */}
            <div className="bg-taskflow-card border border-taskflow-border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Search size={20} className="text-taskflow-text" />
                <h3 className="text-base font-semibold text-taskflow-text">
                  Gestión y Búsqueda
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-taskflow-muted mb-2">
                    Buscar por Nombre
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      value={searchName}
                      onChange={(e) => setSearchName(e.target.value)}
                      placeholder="Nombre de tarea..."
                      className="bg-taskflow-background border-taskflow-border text-taskflow-text placeholder:text-gray-500 flex-1"
                    />
                    <Button
                      size="sm"
                      className="bg-taskflow-border hover:bg-taskflow-border/90 text-taskflow-text px-3"
                    >
                      <Search size={16} />
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-taskflow-muted mb-2">
                    ID de Tarea para Gestión
                  </label>
                  <Input
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    placeholder="Ingrese ID..."
                    className="bg-taskflow-background border-taskflow-border text-taskflow-text placeholder:text-gray-500"
                  />
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs">
                    Actualizar Tarea
                  </Button>
                  <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs">
                    Eliminar Tarea
                  </Button>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold">
                  <CheckSquare size={16} className="mr-2" />
                  Generar Plan / Calcular Ruta Crítica
                </Button>
              </div>
            </div>
          </div>

          {/* Task Visualization Table */}
          <div className="bg-taskflow-card border border-taskflow-border rounded-lg">
            <div className="p-6 border-b border-taskflow-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <List size={20} className="text-taskflow-text" />
                  <h3 className="text-base font-semibold text-taskflow-text">
                    Visualización de Tareas
                  </h3>
                </div>
                <Select defaultValue="5">
                  <SelectTrigger className="w-32 bg-gray-300 border-taskflow-border text-black text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 por página</SelectItem>
                    <SelectItem value="10">10 por página</SelectItem>
                    <SelectItem value="20">20 por página</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-taskflow-card border-b border-taskflow-border">
                  <tr>
                    <th className="text-left text-xs text-taskflow-muted font-medium px-6 py-3">
                      ID
                    </th>
                    <th className="text-left text-xs text-taskflow-muted font-medium px-6 py-3">
                      Nombre
                    </th>
                    <th className="text-left text-xs text-taskflow-muted font-medium px-6 py-3">
                      Duración
                    </th>
                    <th className="text-left text-xs text-taskflow-muted font-medium px-6 py-3">
                      Prioridad
                    </th>
                    <th className="text-left text-xs text-taskflow-muted font-medium px-6 py-3">
                      Dependencias
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, index) => (
                    <tr key={task.id} className="border-b border-black">
                      <td className="px-6 py-4 text-sm text-taskflow-text">
                        {task.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-taskflow-text">
                        {task.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-taskflow-text">
                        {task.duration}{" "}
                        <span className="text-taskflow-muted">days</span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white ${getPriorityColor(task.priority)}`}
                        >
                          {task.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-taskflow-muted">
                        {task.dependencies}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between p-6 border-t border-taskflow-border">
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-taskflow-text hover:text-taskflow-text"
                >
                  Anterior
                </Button>
                <Button
                  size="sm"
                  className="bg-taskflow-primary text-taskflow-background hover:bg-taskflow-primary/90"
                >
                  1
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-taskflow-text hover:text-taskflow-text"
                >
                  Siguiente
                </Button>
              </div>
              <div className="text-xs text-taskflow-muted">Página 1 de 1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskFlowPro;
